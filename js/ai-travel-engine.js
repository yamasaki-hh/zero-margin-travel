/* ==========================================================================
   0 Margin EU Travel — Focused AI Travel & Route Engine
   Transport Selection (Public Transit vs Car/Driving) + Live Google Maps Links
   ========================================================================== */

const AITravelEngine = {
  config: {
    apiKey: localStorage.getItem('zmt_gemini_api_key') || '',
    modelName: 'Gemini 1.5 Flash'
  },

  setApiKey(key) {
    this.config.apiKey = key.trim();
    localStorage.setItem('zmt_gemini_api_key', key.trim());
  },

  detectLanguage(text) {
    const jpRegex = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff]/;
    return jpRegex.test(text) ? 'ja' : 'en';
  },

  // Helper to create Google Maps live search link button
  createMapsLink(placeName, city, rating = '') {
    const query = encodeURIComponent(`${placeName} ${city}`);
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;
    const ratingTag = rating ? ` (${rating})` : '';
    return `<a href="${mapsUrl}" target="_blank" rel="noopener noreferrer" style="display:inline-flex; align-items:center; gap:0.25rem; background:#EFF6FF; color:#1D4ED8; border:1px solid #93C5FD; padding:0.15rem 0.55rem; border-radius:6px; font-weight:700; text-decoration:none; font-size:0.85rem;" title="Google Mapsでリアルタイム営業時間・口コミ・写真を見る">📍 ${escapeHtml(placeName)}${ratingTag} <span style="font-size:0.75rem;">↗</span></a>`;
  },

  generateItinerary(event) {
    if (event) event.preventDefault();

    const destination = document.getElementById('aiPlanDestination').value.trim() || 'Paris, France';
    let days = parseFloat(document.getElementById('aiPlanDays').value) || 1;
    if (days > 2) days = 2;

    const transportMode = document.getElementById('aiPlanTransport').value || 'transit'; // 'transit' or 'car'
    const interest = document.getElementById('aiPlanInterest').value || 'Culture, History & Hidden Gems';
    const budget = document.getElementById('aiPlanBudget').value || 'Moderate (0 Margin Friendly)';

    const resultContainer = document.getElementById('aiPlanResult');
    if (!resultContainer) return;

    const lang = this.detectLanguage(destination + interest);
    const isCar = transportMode === 'car';

    resultContainer.style.display = 'block';
    resultContainer.innerHTML = `
      <div style="background:var(--bg-card-warm); border:2.5px solid var(--border-ink); border-radius:22px; padding:2.5rem; margin-top:1.5rem; box-shadow:var(--shadow-sketch); text-align:center;">
        <div style="font-size:1.5rem; color:var(--primary-gold); font-family:var(--font-serif);" class="font-serif">
          ⚡ ${lang === 'ja' ? (isCar ? '🚗 車・ドライブに最適な駐車場付きルートを生成中...' : '🚆 公共交通機関・メトロに最適なルートを生成中...') : 'Generating Route & Google Maps Spots...'}
        </div>
        <p style="font-size:0.95rem; color:var(--text-secondary); margin-top:0.5rem;">
          ${escapeHtml(destination)} (${days === 0.5 ? '半日コース' : days + '日コース'}) の実在名所・高評価ビストロ（★4.5+）を構成しています...
        </p>
      </div>
    `;

    if (this.config.apiKey) {
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${this.config.apiKey}`;
      const systemPrompt = `You are an expert AI Travel Curator for 0 Margin EU Travel. Respond in ${lang === 'ja' ? 'Japanese' : 'English'}.
STRICT RULES:
1. TRANSPORTATION MODE: ${isCar ? 'CAR / DRIVING MODE (Optimize for driving routes, highways, and SPECIFIC PARKING GARAGE NAMES like Parking Indigo Louvre, P+R Rembrandtplein, Interparking Grand-Place)' : 'PUBLIC TRANSIT MODE (Optimize for metro lines, RER, tram, and station walking minutes)'}.
2. DURATION LIMIT: MAX ${days} DAY(S) (0.5 = Half Day, 1 = 1 Day, 2 = 2 Days max). DO NOT GENERATE DAY 3 OR BEYOND.
3. ABSOLUTELY ZERO REPETITION: Day 1 and Day 2 MUST feature 100% COMPLETELY DIFFERENT venues, attractions, restaurants, and bakeries.
4. NO GENERIC PLACEHOLDERS: Every single place MUST be a REAL named venue with Google rating ★4.5+ (e.g. Chez Janou, Le Train Bleu, Musée d'Orsay, Sainte-Chapelle, Maison Dandoy, Fin de Siècle, Pont des Arts).
For each time slot (09:00 AM, 11:30 AM, 12:30 PM, 03:00 PM, 07:00 PM), output:
- Real venue name & rating
- Specific transit advice (${isCar ? 'driving minutes & specific parking garage' : 'metro line & walking minutes'})
- Specific dish or tip.
Format in clean HTML using <h4>, <ul>, <li>, and <strong> tags within 500 words.`;

      fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: systemPrompt }] },
          contents: [{ role: 'user', parts: [{ text: `Generate unique non-repeating real venue itinerary for ${destination} (${transportMode} mode) for ${days} days` }] }],
          generationConfig: { maxOutputTokens: 750, temperature: 0.5 }
        })
      })
      .then(res => res.json())
      .then(data => {
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!text) throw new Error('Empty payload');
        this.renderItineraryCard(destination, days, interest, transportMode, text, '⚡ Live Gemini 1.5 Flash (Real Google Maps Spots)');
      })
      .catch(err => {
        console.warn('Gemini API call fallback:', err);
        const fallbackText = this.buildRealVenueDatabase(destination, days, interest, budget, transportMode, lang);
        this.renderItineraryCard(destination, days, interest, transportMode, fallbackText, '⚡ AI Route Planner (Real Google Maps Spots)');
      });

    } else {
      setTimeout(() => {
        const fallbackText = this.buildRealVenueDatabase(destination, days, interest, budget, transportMode, lang);
        this.renderItineraryCard(destination, days, interest, transportMode, fallbackText, '⚡ AI Route Planner (Real Google Maps Spots)');
      }, 350);
    }
  },

  // 100% Real Place Names & Direct Google Maps Search Links (Transit vs Car Mode)
  buildRealVenueDatabase(destination, days, interest, budget, transportMode, lang) {
    const destLower = destination.toLowerCase();
    const isCar = transportMode === 'car';

    const isParis = destLower.includes('paris');
    const isAmsterdam = destLower.includes('amsterdam');
    const isBrussels = destLower.includes('brussels') || destLower.includes('bruxelles');
    const isLuxembourg = destLower.includes('luxembourg');
    const isCologne = destLower.includes('cologne') || destLower.includes('köln');
    const isMunich = destLower.includes('munich') || destLower.includes('münchen');
    const isBerlin = destLower.includes('berlin');

    let html = '';

    // Transit / Car guidance badges per spot
    const transitParisD1 = isCar 
      ? '🚗 ドライブ: A14/環状道路経由。地下駐車場「Parking Indigo Louvre - Samaritaine」利用（徒歩4分）。' 
      : '🚆 公共交通機関: メトロ4号線 Cité（シテ）駅 徒歩3分。';

    const transitParisD2 = isCar 
      ? '🚗 ドライブ: セーヌ川沿いコース。「Parking Indigo Musée d\'Orsay」利用（徒歩2分）。' 
      : '🚆 公共交通機関: RER C線 Musée d\'Orsay（オルセー美術館）駅 直結。';

    const transitAmstD1 = isCar 
      ? '🚗 ドライブ: A10環状線経由。「Q-Park Museumplein 地下駐車場」利用（徒歩3分）。' 
      : '🚆 公共交通機関: トラム2/5/12番 Rijksmuseum 停 徒歩2分。';

    const transitAmstD2 = isCar 
      ? '🚗 ドライブ: S100号線。「P+R RAI パーク＆ライド」利用、トラムで中心部へ。' 
      : '🚆 公共交通機関: トラム2/5番 Museumplein 停 徒歩4分。';

    const transitBrussD1 = isCar 
      ? '🚗 ドライブ: N23号線経由。「Interparking Grand-Place 地下駐車場」利用（徒歩3分）。' 
      : '🚆 公共交通機関: ブリュッセル中央駅（Gare Centrale）徒歩5分。';

    const transitBrussD2 = isCar 
      ? '🚗 ドライブ: R0環状線経由。「Parkings Atomium 駐車場」直結。' 
      : '🚆 公共交通機関: メトロ6号線 Heysel（ヘイゼル）駅 直結。';

    if (lang === 'ja') {
      // JAPANESE GENERATION (HALF DAY / 1 DAY / 2 DAYS MAX)
      if (days === 0.5) {
        html += `
          <div style="background:#FFF; border:1.5px solid var(--border-ink); border-radius:14px; padding:1.25rem; margin-bottom:1.25rem;">
            <h4 style="color:var(--primary-forest); font-size:1.05rem; margin-bottom:0.5rem; font-family:var(--font-sans);">
              📍 半日コース: ${escapeHtml(destination)} 厳選ハイライト（${isCar ? '🚗 車・駐車場案内付' : '🚆 公共交通機関ルート'}）
            </h4>
            <ul style="font-size:0.92rem; color:var(--text-primary); line-height:1.85; padding-left:1.2rem;">
              <li><strong>09:00 AM — 主要シンボル名所:</strong> ${isParis ? this.createMapsLink('サント・シャペル教会', 'Paris', '★4.8') + `（${transitParisD1}）` : isAmsterdam ? this.createMapsLink('アムステルダム国立美術館', 'Amsterdam', '★4.7') + `（${transitAmstD1}）` : isBrussels ? this.createMapsLink('グラン＝プラス', 'Brussels', '★4.7') + `（${transitBrussD1}）` : this.createMapsLink('ブランデンブルク門', 'Berlin', '★4.7')}。</li>
              <li><strong>11:30 AM — 老舗名物スイーツ:</strong> ${isParis ? this.createMapsLink('マルシェ・デ・ザンファン・ルージュ', 'Paris', '★4.5') + '（焼きたてクレープ）' : isAmsterdam ? this.createMapsLink('ヴァン・スターペレ', 'Van Stapele Amsterdam', '★4.8') + '（チョコクッキー €3）' : isBrussels ? this.createMapsLink('メゾン・ダンドワ', 'Maison Dandoy Brussels', '★4.6') + '（リエージュワッフル）' : this.createMapsLink('Café Einfein', 'Berlin', '★4.8')}。</li>
              <li><strong>12:30 PM — 絶品ランチ名店:</strong> ${isParis ? this.createMapsLink('Le Petit Marché', 'Paris', '★4.6') + '（マレ地区の鴨コンフィ €18–€26）' : isAmsterdam ? this.createMapsLink('Café de Klos', 'Amsterdam', '★4.6') + '（スペアリブ €18–€26）' : isBrussels ? this.createMapsLink('Fin de Siècle', 'Brussels', '★4.5') + '（牛肉のビール煮込み €16–€24）' : this.createMapsLink('Brauhaus Sion', 'Cologne', '★4.4')}。</li>
            </ul>
          </div>
        `;
      } else {
        // DAY 1
        html += `
          <div style="background:#FFF; border:1.5px solid var(--border-ink); border-radius:14px; padding:1.25rem; margin-bottom:1.25rem;">
            <h4 style="color:var(--primary-forest); font-size:1.05rem; margin-bottom:0.5rem; font-family:var(--font-sans);">
              📍 1日目: ${escapeHtml(destination)} 歴史名所＆高評価ビストロ（${isCar ? '🚗 車・ドライブ最適化' : '🚆 電車・メトロ最適化'}）
            </h4>
            <ul style="font-size:0.92rem; color:var(--text-primary); line-height:1.85; padding-left:1.2rem;">
              <li><strong>09:00 AM — 朝の特別観覧:</strong> ${isParis ? this.createMapsLink('サント・シャペル教会', 'Sainte Chapelle Paris', '★4.8') + `（${transitParisD1}）` : isAmsterdam ? this.createMapsLink('アムステルダム国立美術館', 'Rijksmuseum Amsterdam', '★4.7') + `（${transitAmstD1}）` : isBrussels ? this.createMapsLink('グラン＝プラス', 'Grand Place Brussels', '★4.7') + `（${transitBrussD1}）` : isLuxembourg ? this.createMapsLink('ボックの砲台', 'Bock Casemates Luxembourg', '★4.6') : isCologne ? this.createMapsLink('ケルン大聖堂', 'Kölner Dom', '★4.8') : isMunich ? this.createMapsLink('マリエン広場', 'Marienplatz Munich', '★4.7') : this.createMapsLink('ブランデンブルク門', 'Brandenburg Gate Berlin', '★4.7')}。</li>
              <li><strong>11:30 AM — 老舗名物スイーツ:</strong> ${isParis ? this.createMapsLink('マルシェ・デ・ザンファン・ルージュ', 'Marché des Enfants Rouges Paris', '★4.5') + '（最古の屋台市場クレープ）' : isAmsterdam ? this.createMapsLink('ヴァン・スターペレ', 'Van Stapele Koekmakerij Amsterdam', '★4.8') + '（絶品焼きたてチョコクッキー €3）' : isBrussels ? this.createMapsLink('メゾン・ダンドワ', 'Maison Dandoy Brussels', '★4.6') + '（焼きたてリエージュワッフル）' : isLuxembourg ? this.createMapsLink('Chocolate House Nathalie Bonn', 'Luxembourg', '★4.6') : isCologne ? this.createMapsLink('Café Reichard', 'Cologne', '★4.5') : isMunich ? this.createMapsLink('Viktualienmarkt', 'Munich', '★4.7') : this.createMapsLink("Mustafa's Gemüse Kebab", 'Berlin', '★4.4')}。</li>
              <li><strong>12:30 PM — 1日目ランチ名店:</strong> ${isParis ? this.createMapsLink('Le Petit Marché', 'Le Petit Marché Paris', '★4.6') + '（マレ地区の鴨コンフィ €18–€26）' : isAmsterdam ? this.createMapsLink('Café de Klos', 'Café de Klos Amsterdam', '★4.6') + '（スモーキー・スペアリブ €18–€26）' : isBrussels ? this.createMapsLink('Fin de Siècle', 'Fin de Siècle Brussels', '★4.5') + '（カルボナード牛肉ビール煮込み €16–€24）' : isLuxembourg ? this.createMapsLink('Brasserie du Cercle', 'Luxembourg', '★4.5') : isCologne ? this.createMapsLink('Brauhaus Sion', 'Cologne', '★4.4') : isMunich ? this.createMapsLink('Augustiner-Keller', 'Munich', '★4.6') : this.createMapsLink('Bistro Organic Mitte', 'Berlin', '★4.7')}。</li>
              <li><strong>03:00 PM — 文化散策:</strong> ${isParis ? this.createMapsLink('パレ・ロワイヤル庭園', 'Palais Royal Paris', '★4.7') + '（白黒ストライプの柱）' : isAmsterdam ? this.createMapsLink('九つの街', 'De Negen Straatjes Amsterdam', '★4.8') + '（最美運河沿いセレクトショップ）' : isBrussels ? this.createMapsLink('ギャルリ・サンチュベール', 'Royal Gallery of Saint Hubert Brussels', '★4.6') : isLuxembourg ? this.createMapsLink('シュマン・ド・ラ・コルニッシュ', 'Chemin de la Corniche Luxembourg', '★4.8') : isCologne ? this.createMapsLink('ルートヴィヒ美術館', 'Museum Ludwig Cologne', '★4.6') : isMunich ? this.createMapsLink('英国庭園', 'Englischer Garten Munich', '★4.8') : this.createMapsLink('博物館島', 'Museum Island Berlin', '★4.8')}。</li>
              <li><strong>07:00 PM — 夜の散歩:</strong> ${isParis ? this.createMapsLink('ポン・デ・ザール橋', 'Pont des Arts Paris', '★4.7') + '（夕刻のセーヌ川鑑賞）' : 'ライトアップされた歴史地区散策'}。</li>
            </ul>
          </div>
        `;

        // DAY 2 (ONLY IF DAYS == 2) - 100% COMPLETELY DIFFERENT PLACES
        if (days >= 2) {
          html += `
            <div style="background:#FFF; border:1.5px solid var(--border-ink); border-radius:14px; padding:1.25rem; margin-bottom:1.25rem;">
              <h4 style="color:var(--primary-wood); font-size:1.05rem; margin-bottom:0.5rem; font-family:var(--font-sans);">
                📍 2日目: 【全施設重複なし】${escapeHtml(destination)} オルセー/モンマルトル＆名店リンク（${isCar ? '🚗 ドライブ・パーキング案内' : '🚆 メトロ・電車ルート'}）
              </h4>
              <ul style="font-size:0.92rem; color:var(--text-primary); line-height:1.85; padding-left:1.2rem;">
                <li><strong>09:00 AM — 2日目朝の特別観覧:</strong> ${isParis ? this.createMapsLink('オルセー美術館', 'Musée d Orsay Paris', '★4.8') + `（${transitParisD2}）` : isAmsterdam ? this.createMapsLink('ゴッホ美術館', 'Van Gogh Museum Amsterdam', '★4.8') + `（${transitAmstD2}）` : isBrussels ? this.createMapsLink('アトミウム', 'Atomium Brussels', '★4.4') + `（${transitBrussD2}）` : isLuxembourg ? this.createMapsLink('グルンド歴史地区', 'Grund Luxembourg', '★4.7') : isCologne ? this.createMapsLink('ホーエンツォレルン橋', 'Hohenzollernbrücke Cologne', '★4.7') : isMunich ? this.createMapsLink('ニンフェンブルク宮殿', 'Nymphenburg Palace Munich', '★4.7') : this.createMapsLink('イーストサイドギャラリー', 'East Side Gallery Berlin', '★4.6')}。</li>
                <li><strong>11:30 AM — 2日目スイーツ名店:</strong> ${isParis ? this.createMapsLink('セドリック・グロレ', 'Cédric Grolet Le Meurice Paris', '★4.6') + '（彫刻フルーツケーキ）' : isAmsterdam ? this.createMapsLink('ウィンケル43', 'Winkel 43 Amsterdam', '★4.6') + '（伝統オランダ名物アップルパイ €5）' : isBrussels ? this.createMapsLink('ピエール・マルコリーニ', 'Pierre Marcolini Brussels', '★4.7') : isLuxembourg ? this.createMapsLink('Oberweis Bakery', 'Luxembourg', '★4.6') : isCologne ? this.createMapsLink('Café Rizzoli', 'Cologne', '★4.6') : isMunich ? this.createMapsLink('Café Frischhut', 'Munich', '★4.7') : this.createMapsLink('Zeit für Brot', 'Berlin', '★4.7')}。</li>
                <li><strong>12:30 PM — 2日目ランチ名店:</strong> ${isParis ? this.createMapsLink('ル・トレン・ブルー', 'Le Train Bleu Paris', '★4.5') + '（リヨン駅構内豪華宮殿レストラン €25–€38）または ' + this.createMapsLink('シェ・ジャヌー', 'Chez Janou Paris', '★4.5') + '（プロヴァンス料理＆チョコムース）' : isAmsterdam ? this.createMapsLink('Foodhallen Amsterdam', 'Foodhallen Amsterdam', '★4.5') + '（リノベフードホール €15–€22）' : isBrussels ? this.createMapsLink('Chez Léon', 'Chez Léon Brussels', '★4.6') + '（1893年創業ムール貝＆フリッツ €18–€26）' : isLuxembourg ? this.createMapsLink('Um Dietgen', 'Luxembourg', '★4.5') : isCologne ? this.createMapsLink('Peters Brauhaus', 'Cologne', '★4.5') : isMunich ? this.createMapsLink('Hofbräuhaus München', 'Munich', '★4.5') : this.createMapsLink('Prater Biergarten', 'Berlin', '★4.6')}。</li>
                <li><strong>03:00 PM — 2日目午後散策:</strong> ${isParis ? this.createMapsLink('サクレ・クール寺院＆モンマルトルの丘', 'Sacré Cœur Paris', '★4.7') + `（${isCar ? '🚗 Parking Anvers 利用' : '🚆 メトロ2号線 Anvers 駅'}）` : isAmsterdam ? this.createMapsLink('ザーンセ・スカンス風車村', 'Zaanse Schans', '★4.6') + `（${isCar ? '🚗 A8号線経由 駐車場直結' : '🚆 バス391番直通20分'}）` : isBrussels ? this.createMapsLink('王立軍事歴史博物館', 'Royal Museum of the Armed Forces Brussels', '★4.7') : isLuxembourg ? this.createMapsLink('ヴィアンデン城', 'Vianden Castle Luxembourg', '★4.7') : isCologne ? this.createMapsLink('ドラッヘンフェルス城', 'Drachenfels Castle', '★4.6') : isMunich ? this.createMapsLink('レジデンツ宮殿', 'Munich Residenz', '★4.8') : this.createMapsLink('ポツダム・サンスーシ宮殿庭園', 'Sanssouci Palace Potsdam', '★4.8')}。</li>
                <li><strong>07:00 PM — 夜の散歩:</strong> リラックスした雰囲気で夕刻の川沿い/運河散策。</li>
              </ul>
            </div>
          `;
        }
      }
    } else {
      // ENGLISH GENERATION WITH TRANSIT MODE SELECTION
      if (days === 0.5) {
        html += `
          <div style="background:#FFF; border:1.5px solid var(--border-ink); border-radius:14px; padding:1.25rem; margin-bottom:1.25rem;">
            <h4 style="color:var(--primary-forest); font-size:1.05rem; margin-bottom:0.5rem; font-family:var(--font-sans);">
              📍 Half Day Express: ${escapeHtml(destination)} (${isCar ? '🚗 Car / Driving' : '🚆 Public Transit'})
            </h4>
            <ul style="font-size:0.92rem; color:var(--text-primary); line-height:1.85; padding-left:1.2rem;">
              <li><strong>09:00 AM — Primary Landmark:</strong> ${isParis ? this.createMapsLink('Sainte-Chapelle', 'Paris', '★4.8') + ` (${isCar ? 'Parking Indigo Louvre' : 'Metro Line 4 Cité'})` : isAmsterdam ? this.createMapsLink('Rijksmuseum', 'Amsterdam', '★4.7') + ` (${isCar ? 'Q-Park Museumplein' : 'Tram 2/5/12'})` : isBrussels ? this.createMapsLink('Grand-Place', 'Brussels', '★4.7') + ` (${isCar ? 'Interparking Grand-Place' : '5 min walk Central Station'})` : this.createMapsLink('Brandenburg Gate', 'Berlin', '★4.7')}。</li>
              <li><strong>11:30 AM — Signature Bakery:</strong> ${isParis ? this.createMapsLink('Marché des Enfants Rouges', 'Paris', '★4.5') : isAmsterdam ? this.createMapsLink('Van Stapele Koekmakerij', 'Amsterdam', '★4.8') : isBrussels ? this.createMapsLink('Maison Dandoy', 'Brussels', '★4.6') : this.createMapsLink('Café Einfein', 'Berlin', '★4.8')}。</li>
              <li><strong>12:30 PM — Recommended Restaurant:</strong> ${isParis ? this.createMapsLink('Le Petit Marché', 'Paris', '★4.6') : isAmsterdam ? this.createMapsLink('Café de Klos', 'Amsterdam', '★4.6') : isBrussels ? this.createMapsLink('Fin de Siècle', 'Brussels', '★4.5') : this.createMapsLink('Brauhaus Sion', 'Cologne', '★4.4')}。</li>
            </ul>
          </div>
        `;
      } else {
        // DAY 1
        html += `
          <div style="background:#FFF; border:1.5px solid var(--border-ink); border-radius:14px; padding:1.25rem; margin-bottom:1.25rem;">
            <h4 style="color:var(--primary-forest); font-size:1.05rem; margin-bottom:0.5rem; font-family:var(--font-sans);">
              📍 Day 1: ${escapeHtml(destination)} (${isCar ? '🚗 Car Mode with Parking' : '🚆 Public Transit Mode'})
            </h4>
            <ul style="font-size:0.92rem; color:var(--text-primary); line-height:1.85; padding-left:1.2rem;">
              <li><strong>09:00 AM — Morning Landmark:</strong> ${isParis ? this.createMapsLink('Sainte-Chapelle', 'Sainte Chapelle Paris', '★4.8') + ` (${isCar ? 'Parking Indigo Louvre' : 'Metro Line 4 Cité Station'})` : isAmsterdam ? this.createMapsLink('Rijksmuseum', 'Rijksmuseum Amsterdam', '★4.7') + ` (${isCar ? 'Q-Park Museumplein' : 'Tram 2/5/12'})` : isBrussels ? this.createMapsLink('Grand-Place', 'Grand Place Brussels', '★4.7') + ` (${isCar ? 'Interparking Grand-Place' : '5 min walk Central Station'})` : isLuxembourg ? this.createMapsLink('Bock Casemates', 'Luxembourg', '★4.6') : isCologne ? this.createMapsLink('Cologne Cathedral', 'Kölner Dom', '★4.8') : isMunich ? this.createMapsLink('Marienplatz', 'Munich', '★4.7') : this.createMapsLink('Brandenburg Gate', 'Berlin', '★4.7')}。</li>
              <li><strong>11:30 AM — Signature Bakery:</strong> ${isParis ? this.createMapsLink('Marché des Enfants Rouges', 'Paris', '★4.5') : isAmsterdam ? this.createMapsLink('Van Stapele Koekmakerij', 'Amsterdam', '★4.8') : isBrussels ? this.createMapsLink('Maison Dandoy', 'Brussels', '★4.6') : isLuxembourg ? this.createMapsLink('Chocolate House Nathalie Bonn', 'Luxembourg', '★4.6') : isCologne ? this.createMapsLink('Café Reichard', 'Cologne', '★4.5') : isMunich ? this.createMapsLink('Viktualienmarkt', 'Munich', '★4.7') : this.createMapsLink("Mustafa's Gemüse Kebab", 'Berlin', '★4.4')}。</li>
              <li><strong>12:30 PM — Day 1 Restaurant:</strong> ${isParis ? this.createMapsLink('Le Petit Marché', 'Paris', '★4.6') + ' (€18–€26)' : isAmsterdam ? this.createMapsLink('Café de Klos', 'Amsterdam', '★4.6') + ' (€18–€26)' : isBrussels ? this.createMapsLink('Fin de Siècle', 'Brussels', '★4.5') + ' (€16–€24)' : isLuxembourg ? this.createMapsLink('Brasserie du Cercle', 'Luxembourg', '★4.5') : isCologne ? this.createMapsLink('Brauhaus Sion', 'Cologne', '★4.4') : isMunich ? this.createMapsLink('Augustiner-Keller', 'Munich', '★4.6') : this.createMapsLink('Bistro Organic Mitte', 'Berlin', '★4.7')}。</li>
              <li><strong>03:00 PM — Afternoon Walk:</strong> ${isParis ? this.createMapsLink('Palais-Royal Courtyard', 'Palais Royal Paris', '★4.7') : isAmsterdam ? this.createMapsLink('Nine Streets', 'De Negen Straatjes Amsterdam', '★4.8') : isBrussels ? this.createMapsLink('Royal Gallery of Saint-Hubert', 'Brussels', '★4.6') : isLuxembourg ? this.createMapsLink('Chemin de la Corniche', 'Luxembourg', '★4.8') : isCologne ? this.createMapsLink('Museum Ludwig', 'Cologne', '★4.6') : isMunich ? this.createMapsLink('Englischer Garten', 'Munich', '★4.8') : this.createMapsLink('Museum Island', 'Berlin', '★4.8')}。</li>
              <li><strong>07:00 PM — Evening Walk:</strong> ${isParis ? this.createMapsLink('Pont des Arts', 'Pont des Arts Paris', '★4.7') : 'Evening walk'}。</li>
            </ul>
          </div>
        `;

        // DAY 2 (ONLY IF DAYS == 2)
        if (days >= 2) {
          html += `
            <div style="background:#FFF; border:1.5px solid var(--border-ink); border-radius:14px; padding:1.25rem; margin-bottom:1.25rem;">
              <h4 style="color:var(--primary-wood); font-size:1.05rem; margin-bottom:0.5rem; font-family:var(--font-sans);">
                📍 Day 2: 【100% Unique Venues】 Musée d'Orsay, Montmartre & Chez Janou (${isCar ? '🚗 Car / Parking' : '轨 Transit'})
              </h4>
              <ul style="font-size:0.92rem; color:var(--text-primary); line-height:1.85; padding-left:1.2rem;">
                <li><strong>09:00 AM — Day 2 Landmark:</strong> ${isParis ? this.createMapsLink("Musée d'Orsay", "Musée d Orsay Paris", '★4.8') + ` (${isCar ? 'Parking Indigo Orsay' : 'RER C Musée d\'Orsay Station'})` : isAmsterdam ? this.createMapsLink('Van Gogh Museum', 'Amsterdam', '★4.8') : isBrussels ? this.createMapsLink('Atomium', 'Brussels', '★4.4') : isLuxembourg ? this.createMapsLink('Grund Historic Quarter', 'Luxembourg', '★4.7') : isCologne ? this.createMapsLink('Hohenzollernbrücke', 'Cologne', '★4.7') : isMunich ? this.createMapsLink('Nymphenburg Palace', 'Munich', '★4.7') : this.createMapsLink('East Side Gallery', 'Berlin', '★4.6')}。</li>
                <li><strong>11:30 AM — Day 2 Pastry:</strong> ${isParis ? this.createMapsLink('Cédric Grolet Le Meurice', 'Paris', '★4.6') : isAmsterdam ? this.createMapsLink('Winkel 43', 'Amsterdam', '★4.6') : isBrussels ? this.createMapsLink('Pierre Marcolini', 'Brussels', '★4.7') : isLuxembourg ? this.createMapsLink('Oberweis Bakery', 'Luxembourg', '★4.6') : isCologne ? this.createMapsLink('Café Rizzoli', 'Cologne', '★4.6') : isMunich ? this.createMapsLink('Café Frischhut', 'Munich', '★4.7') : this.createMapsLink('Zeit für Brot', 'Berlin', '★4.7')}。</li>
                <li><strong>12:30 PM — Day 2 Restaurant:</strong> ${isParis ? this.createMapsLink('Le Train Bleu', 'Le Train Bleu Paris', '★4.5') + ' OR ' + this.createMapsLink('Chez Janou', 'Chez Janou Paris', '★4.5') : isAmsterdam ? this.createMapsLink('Foodhallen Amsterdam', 'Amsterdam', '★4.5') : isBrussels ? this.createMapsLink('Chez Léon', 'Brussels', '★4.6') : isLuxembourg ? this.createMapsLink('Um Dietgen', 'Luxembourg', '★4.5') : isCologne ? this.createMapsLink('Peters Brauhaus', 'Cologne', '★4.5') : isMunich ? this.createMapsLink('Hofbräuhaus München', 'Munich', '★4.5') : this.createMapsLink('Prater Biergarten', 'Berlin', '★4.6')}。</li>
                <li><strong>03:00 PM — Day 2 Excursion:</strong> ${isParis ? this.createMapsLink('Sacré-Cœur Basilica & Montmartre', 'Sacré Cœur Paris', '★4.7') + ` (${isCar ? 'Parking Anvers' : 'Metro Line 2 Anvers'})` : isAmsterdam ? this.createMapsLink('Zaanse Schans Windmills', 'Zaanse Schans', '★4.6') : isBrussels ? this.createMapsLink('Royal Museum of the Armed Forces', 'Brussels', '★4.7') : isLuxembourg ? this.createMapsLink('Vianden Castle', 'Luxembourg', '★4.7') : isCologne ? this.createMapsLink('Drachenfels Castle', 'Cologne', '★4.6') : isMunich ? this.createMapsLink('Munich Residenz Palace', 'Munich', '★4.8') : this.createMapsLink('Sanssouci Palace Potsdam', 'Potsdam', '★4.8')}。</li>
                <li><strong>07:00 PM — Evening Walk:</strong> Sunset walk along river.</li>
              </ul>
            </div>
          `;
        }
      }
    }

    return html;
  },

  // Render Clean Customer-Facing Card
  renderItineraryCard(destination, days, interest, transportMode, itineraryHtml, engineTag) {
    const resultContainer = document.getElementById('aiPlanResult');
    if (!resultContainer) return;

    const isCar = transportMode === 'car';

    resultContainer.innerHTML = `
      <div style="background:var(--bg-card-warm); border:2.5px solid var(--border-ink); border-radius:22px; padding:2rem; margin-top:1.5rem; box-shadow:var(--shadow-sketch); animation:fadeIn 0.3s ease;">
        
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem; margin-bottom:1.25rem;">
          <div>
            <span class="paper-tape">${engineTag}</span>
            <h3 style="font-size:1.65rem; margin-top:0.4rem; font-family:var(--font-serif);">
              ${escapeHtml(destination)} — ${days === 0.5 ? '半日コース' : days + '日コース'} （${isCar ? '🚗 車・ドライブ・駐車場案内付' : '🚆 公共交通機関ルート'}）
            </h3>
          </div>
          <span class="seed-points-badge">${isCar ? '🚗 車・ドライブ＆駐車場案内' : '🚆 公共交通機関＆メトロ案内'}</span>
        </div>

        <!-- Google Maps Live Links Instruction Box -->
        <div style="background:#EFF6FF; border:1.5px solid #3B82F6; border-radius:12px; padding:0.85rem 1.25rem; margin-bottom:1.5rem; font-size:0.85rem; color:#1E40AF; display:flex; align-items:center; gap:0.5rem;">
          <span style="font-size:1.2rem;">🗺️</span>
          <span><strong>ヒント:</strong> スポット名ボタン（例: <strong>📍 Sainte-Chapelle ↗</strong>）をタップすると、<strong>Googleマップの実際の店舗ページ（今日の営業時間・生の最新口コミ・写真・混雑状況）</strong>が直接開きます！</span>
        </div>

        <div style="margin-bottom:1.5rem;">
          ${itineraryHtml}
        </div>
      </div>
    `;
  }
};

function configureGeminiKey() {
  const key = prompt('Optional: Enter your Gemini 1.5 Flash API Key to enable live Gemini API calls:\n(Leave empty for built-in 0 Margin Travel Engine)', AITravelEngine.config.apiKey);
  if (key !== null) {
    AITravelEngine.setApiKey(key);
    alert(key.trim() ? 'Gemini 1.5 Flash API Key saved! Live API responses enabled.' : 'Switched to Built-in 0 Margin Travel Engine.');
  }
}

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str).replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[m]));
}

window.AITravelEngine = AITravelEngine;
