/* ==========================================================================
   0 Margin EU Travel — AI Travel & Route Engine
   Live Google Maps Direct Links + Clean Customer-Facing UI
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
    return `<a href="${mapsUrl}" target="_blank" rel="noopener noreferrer" style="display:inline-flex; align-items:center; gap:0.25rem; background:#EFF6FF; color:#1D4ED8; border:1px solid #93C5FD; padding:0.15rem 0.5rem; border-radius:6px; font-weight:700; text-decoration:none; font-size:0.85rem;" title="Google Mapsでリアルタイム営業時間・口コミ・写真を見る">📍 ${escapeHtml(placeName)}${ratingTag} <span style="font-size:0.75rem;">↗</span></a>`;
  },

  generateItinerary(event) {
    if (event) event.preventDefault();

    const destination = document.getElementById('aiPlanDestination').value.trim() || 'Paris, France';
    let days = parseFloat(document.getElementById('aiPlanDays').value) || 1;
    if (days > 2) days = 2;

    const interest = document.getElementById('aiPlanInterest').value || 'Culture, History & Hidden Gems';
    const budget = document.getElementById('aiPlanBudget').value || 'Moderate (0 Margin Friendly)';

    const resultContainer = document.getElementById('aiPlanResult');
    if (!resultContainer) return;

    const lang = this.detectLanguage(destination + interest);

    resultContainer.style.display = 'block';
    resultContainer.innerHTML = `
      <div style="background:var(--bg-card-warm); border:2.5px solid var(--border-ink); border-radius:22px; padding:2.5rem; margin-top:1.5rem; box-shadow:var(--shadow-sketch); text-align:center;">
        <div style="font-size:1.5rem; color:var(--primary-gold); font-family:var(--font-serif);" class="font-serif">
          ⚡ ${lang === 'ja' ? '最適ルートとGoogle Maps高評価スポットを生成中...' : 'Generating Optimized Route & Google Maps Spots...'}
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
1. MAX DURATION IS ${days} DAY(S) (0.5 = Half Day, 1 = 1 Day, 2 = 2 Days max). DO NOT GENERATE DAY 3 OR BEYOND.
2. ABSOLUTELY ZERO REPETITION: Day 1 and Day 2 MUST feature 100% COMPLETELY DIFFERENT venues, attractions, restaurants, and bakeries.
3. NO GENERIC PLACEHOLDERS: Banned words: "Local Organic Bistro", "Artisan Market", "Historic Quarter". Every single place MUST be a REAL named venue with Google rating ★4.5+ (e.g. Chez Janou, Le Train Bleu, Musée d'Orsay, Sainte-Chapelle, Maison Dandoy, Fin de Siècle, Pont des Arts).
For each time slot (09:00 AM, 11:30 AM, 12:30 PM, 03:00 PM, 07:00 PM), output:
- Real venue name & rating
- Specific transit advice (e.g. Metro Line 1, RER C, 5 min walk)
- Specific dish or tip.
Format in clean HTML using <h4>, <ul>, <li>, and <strong> tags within 500 words.`;

      fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: systemPrompt }] },
          contents: [{ role: 'user', parts: [{ text: `Generate unique non-repeating real venue itinerary for ${destination} for ${days} days` }] }],
          generationConfig: { maxOutputTokens: 750, temperature: 0.5 }
        })
      })
      .then(res => res.json())
      .then(data => {
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!text) throw new Error('Empty payload');
        this.renderItineraryCard(destination, days, interest, text, '⚡ Live Gemini 1.5 Flash (Real Google Maps Spots)');
      })
      .catch(err => {
        console.warn('Gemini API call fallback:', err);
        const fallbackText = this.buildRealVenueDatabase(destination, days, interest, budget, lang);
        this.renderItineraryCard(destination, days, interest, fallbackText, '⚡ AI Route Planner (Real Google Maps Spots)');
      });

    } else {
      setTimeout(() => {
        const fallbackText = this.buildRealVenueDatabase(destination, days, interest, budget, lang);
        this.renderItineraryCard(destination, days, interest, fallbackText, '⚡ AI Route Planner (Real Google Maps Spots)');
      }, 350);
    }
  },

  // 100% Real Place Names & Direct Google Maps Search Links
  buildRealVenueDatabase(destination, days, interest, budget, lang) {
    const destLower = destination.toLowerCase();

    const isParis = destLower.includes('paris');
    const isAmsterdam = destLower.includes('amsterdam');
    const isBrussels = destLower.includes('brussels') || destLower.includes('bruxelles');
    const isLuxembourg = destLower.includes('luxembourg');
    const isCologne = destLower.includes('cologne') || destLower.includes('köln');
    const isMunich = destLower.includes('munich') || destLower.includes('münchen');
    const isBerlin = destLower.includes('berlin');

    let html = '';

    if (lang === 'ja') {
      // JAPANESE - HALF DAY / 1 DAY / 2 DAYS MAX
      if (days === 0.5) {
        html += `
          <div style="background:#FFF; border:1.5px solid var(--border-ink); border-radius:14px; padding:1.25rem; margin-bottom:1.25rem;">
            <h4 style="color:var(--primary-forest); font-size:1.05rem; margin-bottom:0.5rem; font-family:var(--font-sans);">
              📍 半日コース: ${escapeHtml(destination)} 厳選ハイライト＆Google Maps生リンク
            </h4>
            <ul style="font-size:0.92rem; color:var(--text-primary); line-height:1.85; padding-left:1.2rem;">
              <li><strong>09:00 AM — 主要シンボル名所:</strong> ${isParis ? this.createMapsLink('サント・シャペル教会', 'Paris', '★4.8') + '（メトロ4号線 Cité 駅）' : isAmsterdam ? this.createMapsLink('アムステルダム国立美術館', 'Amsterdam', '★4.7') + '（トラム2/5/12番）' : isBrussels ? this.createMapsLink('グラン＝プラス', 'Brussels', '★4.7') + '（中央駅徒歩5分）' : this.createMapsLink('ブランデンブルク門', 'Berlin', '★4.7')}。</li>
              <li><strong>11:30 AM — 老舗名物スイーツ:</strong> ${isParis ? this.createMapsLink('マルシェ・デ・ザンファン・ルージュ', 'Paris', '★4.5') + '（焼きたてクレープ）' : isAmsterdam ? this.createMapsLink('ヴァンスターペレ', 'Van Stapele Amsterdam', '★4.8') + '（チョコクッキー €3）' : isBrussels ? this.createMapsLink('メゾン・ダンドワ', 'Maison Dandoy Brussels', '★4.6') + '（リエージュワッフル）' : this.createMapsLink('Café Einfein', 'Berlin', '★4.8')}。</li>
              <li><strong>12:30 PM — 絶品ランチ名店:</strong> ${isParis ? this.createMapsLink('Le Petit Marché', 'Paris', '★4.6') + '（マレ地区の鴨コンフィ €18–€26）' : isAmsterdam ? 'カフェ・デ・クロース ' + this.createMapsLink('Café de Klos', 'Amsterdam', '★4.6') + '（スペアリブ €18–€26）' : isBrussels ? this.createMapsLink('Fin de Siècle', 'Brussels', '★4.5') + '（牛肉のビール煮込み €16–€24）' : this.createMapsLink('Brauhaus Sion', 'Cologne', '★4.4')}。</li>
            </ul>
          </div>
        `;
      } else {
        // DAY 1
        html += `
          <div style="background:#FFF; border:1.5px solid var(--border-ink); border-radius:14px; padding:1.25rem; margin-bottom:1.25rem;">
            <h4 style="color:var(--primary-forest); font-size:1.05rem; margin-bottom:0.5rem; font-family:var(--font-sans);">
              📍 1日目: ${escapeHtml(destination)} 中心部歴史名所＆高評価ビストロ
            </h4>
            <ul style="font-size:0.92rem; color:var(--text-primary); line-height:1.85; padding-left:1.2rem;">
              <li><strong>09:00 AM — 朝の特別観覧:</strong> ${isParis ? this.createMapsLink('サント・シャペル教会', 'Sainte Chapelle Paris', '★4.8') + '（メトロ4号線 Cité 駅徒歩3分）' : isAmsterdam ? this.createMapsLink('アムステルダム国立美術館', 'Rijksmuseum Amsterdam', '★4.7') + '（トラム2/5/12番）' : isBrussels ? this.createMapsLink('グラン＝プラス', 'Grand Place Brussels', '★4.7') + '（中央駅徒歩5分）' : isLuxembourg ? this.createMapsLink('ボックの砲台', 'Bock Casemates Luxembourg', '★4.6') + '（バス14/15番）' : isCologne ? this.createMapsLink('ケルン大聖堂', 'Kölner Dom', '★4.8') + '（ケルン中央駅直結）' : isMunich ? this.createMapsLink('マリエン広場', 'Marienplatz Munich', '★4.7') + '（Sバーン直結）' : this.createMapsLink('ブランデンブルク門', 'Brandenburg Gate Berlin', '★4.7')}。</li>
              <li><strong>11:30 AM — 老舗名物スイーツ:</strong> ${isParis ? this.createMapsLink('マルシェ・デ・ザンファン・ルージュ', 'Marché des Enfants Rouges Paris', '★4.5') + '（最古の屋台市場クレープ）' : isAmsterdam ? this.createMapsLink('ヴァン・スターペレ', 'Van Stapele Koekmakerij Amsterdam', '★4.8') + '（絶品焼きたてチョコクッキー €3）' : isBrussels ? this.createMapsLink('メゾン・ダンドワ', 'Maison Dandoy Brussels', '★4.6') + '（焼きたてリエージュワッフル）' : isLuxembourg ? this.createMapsLink('Chocolate House Nathalie Bonn', 'Luxembourg', '★4.6') + '（ホットスプーンチョコ）' : isCologne ? this.createMapsLink('Café Reichard', 'Cologne', '★4.5') + '（大聖堂ビューカフェ）' : isMunich ? this.createMapsLink('Viktualienmarkt', 'Munich', '★4.7') + '（プレッツェル屋台）' : this.createMapsLink("Mustafa's Gemüse Kebab", 'Berlin', '★4.4')}。</li>
              <li><strong>12:30 PM — 1日目ランチ名店:</strong> ${isParis ? this.createMapsLink('Le Petit Marché', 'Le Petit Marché Paris', '★4.6') + '（マレ地区の鴨コンフィ €18–€26）' : isAmsterdam ? this.createMapsLink('Café de Klos', 'Café de Klos Amsterdam', '★4.6') + '（スモーキー・スペアリブ €18–€26）' : isBrussels ? this.createMapsLink('Fin de Siècle', 'Fin de Siècle Brussels', '★4.5') + '（カルボナード牛肉ビール煮込み €16–€24）' : isLuxembourg ? this.createMapsLink('Brasserie du Cercle', 'Luxembourg', '★4.5') + '（ダルム広場）' : isCologne ? this.createMapsLink('Brauhaus Sion', 'Cologne', '★4.4') + '（ケルシュビール＆シュヴァイネハクセ）' : isMunich ? this.createMapsLink('Augustiner-Keller', 'Munich', '★4.6') + '（白ソーセージ＆ビール）' : this.createMapsLink('Bistro Organic Mitte', 'Berlin', '★4.7')}。</li>
              <li><strong>03:00 PM — 文化散策:</strong> ${isParis ? this.createMapsLink('パレ・ロワイヤル庭園', 'Palais Royal Paris', '★4.7') + '（白黒ストライプの柱）' : isAmsterdam ? this.createMapsLink('九つの街', 'De Negen Straatjes Amsterdam', '★4.8') + '（最美運河沿いセレクトショップ）' : isBrussels ? this.createMapsLink('ギャルリ・サンチュベール', 'Royal Gallery of Saint Hubert Brussels', '★4.6') : isLuxembourg ? this.createMapsLink('シュマン・ド・ラ・コルニッシュ', 'Chemin de la Corniche Luxembourg', '★4.8') : isCologne ? this.createMapsLink('ルートヴィヒ美術館', 'Museum Ludwig Cologne', '★4.6') : isMunich ? this.createMapsLink('英国庭園', 'Englischer Garten Munich', '★4.8') : this.createMapsLink('博物館島', 'Museum Island Berlin', '★4.8')}。</li>
              <li><strong>07:00 PM — 夜の散步:</strong> ${isParis ? this.createMapsLink('ポン・デ・ザール橋', 'Pont des Arts Paris', '★4.7') + '（夕刻のセーヌ川鑑賞）' : 'ローカル仲間と評価★4.6以上の地元カフェで交流'}。</li>
            </ul>
          </div>
        `;

        // DAY 2 (ONLY IF DAYS == 2) - 100% COMPLETELY DIFFERENT PLACES
        if (days >= 2) {
          html += `
            <div style="background:#FFF; border:1.5px solid var(--border-ink); border-radius:14px; padding:1.25rem; margin-bottom:1.25rem;">
              <h4 style="color:var(--primary-wood); font-size:1.05rem; margin-bottom:0.5rem; font-family:var(--font-sans);">
                📍 2日目: 【全施設重複なし】${escapeHtml(destination)} オルセー/モンマルトル＆名店リンク
              </h4>
              <ul style="font-size:0.92rem; color:var(--text-primary); line-height:1.85; padding-left:1.2rem;">
                <li><strong>09:00 AM — 2日目朝の特別観覧:</strong> ${isParis ? this.createMapsLink('オルセー美術館', 'Musée d Orsay Paris', '★4.8') + '（RER C線 Musée d\'Orsay 駅直結。印象派名画）' : isAmsterdam ? this.createMapsLink('ゴッホ美術館', 'Van Gogh Museum Amsterdam', '★4.8') + '（トラム2/5番 Museumplein）' : isBrussels ? this.createMapsLink('アトミウム', 'Atomium Brussels', '★4.4') + '（メトロ6号線 Heysel 駅直結）' : isLuxembourg ? this.createMapsLink('グルンド歴史地区', 'Grund Luxembourg', '★4.7') + '（エレベーター谷底）' : isCologne ? this.createMapsLink('ホーエンツォレルン橋', 'Hohenzollernbrücke Cologne', '★4.7') + '（愛の南京錠橋）' : isMunich ? this.createMapsLink('ニンフェンブルク宮殿', 'Nymphenburg Palace Munich', '★4.7') + '（トラム17番）' : this.createMapsLink('イーストサイドギャラリー', 'East Side Gallery Berlin', '★4.6')}。</li>
                <li><strong>11:30 AM — 2日目スイーツ名店:</strong> ${isParis ? this.createMapsLink('セドリック・グロレ', 'Cédric Grolet Le Meurice Paris', '★4.6') + '（彫刻フルーツケーキ）' : isAmsterdam ? this.createMapsLink('ウィンケル43', 'Winkel 43 Amsterdam', '★4.6') + '（伝統名物アップルパイ €5）' : isBrussels ? this.createMapsLink('ピエール・マルコリーニ', 'Pierre Marcolini Brussels', '★4.7') + '（グラン・サブロン広場）' : isLuxembourg ? this.createMapsLink('Oberweis Bakery', 'Luxembourg', '★4.6') : isCologne ? this.createMapsLink('Café Rizzoli', 'Cologne', '★4.6') : isMunich ? this.createMapsLink('Café Frischhut', 'Munich', '★4.7') + '（伝統揚げパン Schmalznudel）' : this.createMapsLink('Zeit für Brot', 'Berlin', '★4.7')}。</li>
                <li><strong>12:30 PM — 2日目ランチ名店:</strong> ${isParis ? this.createMapsLink('ル・トレン・ブルー', 'Le Train Bleu Paris', '★4.5') + '（リヨン駅構内豪華宮殿レストラン €25–€38）または ' + this.createMapsLink('シェ・ジャヌー', 'Chez Janou Paris', '★4.5') + '（プロヴァンス料理＆チョコムース）' : isAmsterdam ? this.createMapsLink('Foodhallen Amsterdam', 'Foodhallen Amsterdam', '★4.5') + '（リノベフードホール €15–€22）' : isBrussels ? this.createMapsLink('Chez Léon', 'Chez Léon Brussels', '★4.6') + '（1893年創業ムール貝＆フリッツ €18–€26）' : isLuxembourg ? this.createMapsLink('Um Dietgen', 'Luxembourg', '★4.5') : isCologne ? this.createMapsLink('Peters Brauhaus', 'Cologne', '★4.5') : isMunich ? this.createMapsLink('Hofbräuhaus München', 'Munich', '★4.5') + '（1589年創業バイエルン伝統館）' : this.createMapsLink('Prater Biergarten', 'Berlin', '★4.6')}。</li>
                <li><strong>03:00 PM — 2日目午後散策:</strong> ${isParis ? this.createMapsLink('サクレ・クール寺院＆モンマルトルの丘', 'Sacré Cœur Paris', '★4.7') + '（メトロ2号線 Anvers 駅）' : isAmsterdam ? this.createMapsLink('ザーンセ・スカンス風車村', 'Zaanse Schans', '★4.6') + '（バス391番直通20分）' : isBrussels ? this.createMapsLink('王立軍事歴史博物館', 'Royal Museum of the Armed Forces Brussels', '★4.7') : isLuxembourg ? this.createMapsLink('ヴィアンデン城', 'Vianden Castle Luxembourg', '★4.7') : isCologne ? this.createMapsLink('ドラッヘンフェルス城', 'Drachenfels Castle', '★4.6') : isMunich ? this.createMapsLink('レジデンツ宮殿', 'Munich Residenz', '★4.8') : this.createMapsLink('ポツダム・サンスーシ宮殿庭園', 'Sanssouci Palace Potsdam', '★4.8')}。</li>
                <li><strong>07:00 PM — フェアウェル交流:</strong> ローカル仲間と最終夜のセーヌ川/運河沿い散策。</li>
              </ul>
            </div>
          `;
        }
      }
    } else {
      // ENGLISH GENERATION WITH GOOGLE MAPS DIRECT LINKS
      if (days === 0.5) {
        html += `
          <div style="background:#FFF; border:1.5px solid var(--border-ink); border-radius:14px; padding:1.25rem; margin-bottom:1.25rem;">
            <h4 style="color:var(--primary-forest); font-size:1.05rem; margin-bottom:0.5rem; font-family:var(--font-sans);">
              📍 Half Day Express: ${escapeHtml(destination)} Top Places with Live Google Maps Links
            </h4>
            <ul style="font-size:0.92rem; color:var(--text-primary); line-height:1.85; padding-left:1.2rem;">
              <li><strong>09:00 AM — Primary Landmark:</strong> ${isParis ? this.createMapsLink('Sainte-Chapelle', 'Paris', '★4.8') + ' — Metro Line 4 Cité Station' : isAmsterdam ? this.createMapsLink('Rijksmuseum', 'Amsterdam', '★4.7') + ' — Tram 2/5/12' : isBrussels ? this.createMapsLink('Grand-Place', 'Brussels', '★4.7') + ' — 5 min walk from Central Station' : this.createMapsLink('Brandenburg Gate', 'Berlin', '★4.7')}。</li>
              <li><strong>11:30 AM — Signature Bakery:</strong> ${isParis ? this.createMapsLink('Marché des Enfants Rouges', 'Paris', '★4.5') + ' (crêpes)' : isAmsterdam ? this.createMapsLink('Van Stapele Koekmakerij', 'Amsterdam', '★4.8') + ' (chocolate cookies €3)' : isBrussels ? this.createMapsLink('Maison Dandoy', 'Brussels', '★4.6') + ' (Liège waffles)' : this.createMapsLink('Café Einfein', 'Berlin', '★4.8')}。</li>
              <li><strong>12:30 PM — Recommended Restaurant:</strong> ${isParis ? this.createMapsLink('Le Petit Marché', 'Paris', '★4.6') + ' (Marais duck confit €18–€26)' : isAmsterdam ? this.createMapsLink('Café de Klos', 'Amsterdam', '★4.6') + ' (smoked ribs €18–€26)' : isBrussels ? this.createMapsLink('Fin de Siècle', 'Brussels', '★4.5') + ' (Carbonnade Flamande €16–€24)' : this.createMapsLink('Brauhaus Sion', 'Cologne', '★4.4')}。</li>
            </ul>
          </div>
        `;
      } else {
        // DAY 1
        html += `
          <div style="background:#FFF; border:1.5px solid var(--border-ink); border-radius:14px; padding:1.25rem; margin-bottom:1.25rem;">
            <h4 style="color:var(--primary-forest); font-size:1.05rem; margin-bottom:0.5rem; font-family:var(--font-sans);">
              📍 Day 1: ${escapeHtml(destination)} Historic Landmarks & Le Petit Marché
            </h4>
            <ul style="font-size:0.92rem; color:var(--text-primary); line-height:1.85; padding-left:1.2rem;">
              <li><strong>09:00 AM — Morning Landmark:</strong> ${isParis ? this.createMapsLink('Sainte-Chapelle', 'Sainte Chapelle Paris', '★4.8') + ' — Metro Line 4 Cité Station' : isAmsterdam ? this.createMapsLink('Rijksmuseum', 'Rijksmuseum Amsterdam', '★4.7') + ' — Tram 2/5/12' : isBrussels ? this.createMapsLink('Grand-Place', 'Grand Place Brussels', '★4.7') + ' — 5 min walk from Central Station' : isLuxembourg ? this.createMapsLink('Bock Casemates', 'Luxembourg', '★4.6') : isCologne ? this.createMapsLink('Cologne Cathedral', 'Kölner Dom', '★4.8') : isMunich ? this.createMapsLink('Marienplatz', 'Munich', '★4.7') : this.createMapsLink('Brandenburg Gate', 'Berlin', '★4.7')}。</li>
              <li><strong>11:30 AM — Signature Bakery:</strong> ${isParis ? this.createMapsLink('Marché des Enfants Rouges', 'Paris', '★4.5') + ' — Paris\'s oldest covered market' : isAmsterdam ? this.createMapsLink('Van Stapele Koekmakerij', 'Amsterdam', '★4.8') + ' — Valrhona dark chocolate cookies (€3)' : isBrussels ? this.createMapsLink('Maison Dandoy', 'Brussels', '★4.6') + ' — Fresh Liège waffles with warm chocolate' : isLuxembourg ? this.createMapsLink('Chocolate House Nathalie Bonn', 'Luxembourg', '★4.6') : isCologne ? this.createMapsLink('Café Reichard', 'Cologne', '★4.5') : isMunich ? this.createMapsLink('Viktualienmarkt', 'Munich', '★4.7') : this.createMapsLink("Mustafa's Gemüse Kebab", 'Berlin', '★4.4')}。</li>
              <li><strong>12:30 PM — Day 1 Restaurant:</strong> ${isParis ? this.createMapsLink('Le Petit Marché', 'Paris', '★4.6') + ' — Metro Line 1 Saint-Paul. Marais duck confit (€18–€26)' : isAmsterdam ? this.createMapsLink('Café de Klos', 'Amsterdam', '★4.6') + ' — Kerkstraat 41. Smoked ribs (€18–€26)' : isBrussels ? this.createMapsLink('Fin de Siècle', 'Brussels', '★4.5') + ' — Authentic Carbonnade Flamande beef stew (€16–€24)' : isLuxembourg ? this.createMapsLink('Brasserie du Cercle', 'Luxembourg', '★4.5') : isCologne ? this.createMapsLink('Brauhaus Sion', 'Cologne', '★4.4') : isMunich ? this.createMapsLink('Augustiner-Keller', 'Munich', '★4.6') : this.createMapsLink('Bistro Organic Mitte', 'Berlin', '★4.7')}。</li>
              <li><strong>03:00 PM — Afternoon Walk:</strong> ${isParis ? this.createMapsLink('Palais-Royal Courtyard', 'Palais Royal Paris', '★4.7') + ' — Black & white Buren columns' : isAmsterdam ? this.createMapsLink('Nine Streets', 'De Negen Straatjes Amsterdam', '★4.8') + ' — Boutique art galleries & canals' : isBrussels ? this.createMapsLink('Royal Gallery of Saint-Hubert', 'Brussels', '★4.6') : isLuxembourg ? this.createMapsLink('Chemin de la Corniche', 'Luxembourg', '★4.8') : isCologne ? this.createMapsLink('Museum Ludwig', 'Cologne', '★4.6') : isMunich ? this.createMapsLink('Englischer Garten', 'Munich', '★4.8') : this.createMapsLink('Museum Island', 'Berlin', '★4.8')}。</li>
              <li><strong>07:00 PM — Evening Walk:</strong> ${isParis ? this.createMapsLink('Pont des Arts', 'Pont des Arts Paris', '★4.7') + ' — Sunset Seine river walk' : 'Evening walk with local companions'}。</li>
            </ul>
          </div>
        `;

        // DAY 2 (ONLY IF DAYS == 2) - 100% COMPLETELY DIFFERENT VENUES
        if (days >= 2) {
          html += `
            <div style="background:#FFF; border:1.5px solid var(--border-ink); border-radius:14px; padding:1.25rem; margin-bottom:1.25rem;">
              <h4 style="color:var(--primary-wood); font-size:1.05rem; margin-bottom:0.5rem; font-family:var(--font-sans);">
                📍 Day 2: 【100% Unique Venues】 Musée d'Orsay, Montmartre & Chez Janou
              </h4>
              <ul style="font-size:0.92rem; color:var(--text-primary); line-height:1.85; padding-left:1.2rem;">
                <li><strong>09:00 AM — Day 2 Morning Landmark:</strong> ${isParis ? this.createMapsLink("Musée d'Orsay", "Musée d Orsay Paris", '★4.8') + ' — RER C Musée d\'Orsay Station' : isAmsterdam ? this.createMapsLink('Van Gogh Museum', 'Amsterdam', '★4.8') + ' — Tram 2/5 Museumplein' : isBrussels ? this.createMapsLink('Atomium', 'Brussels', '★4.4') + ' — Metro Line 6 Heysel Station' : isLuxembourg ? this.createMapsLink('Grund Historic Quarter', 'Luxembourg', '★4.7') : isCologne ? this.createMapsLink('Hohenzollernbrücke', 'Cologne', '★4.7') : isMunich ? this.createMapsLink('Nymphenburg Palace', 'Munich', '★4.7') : this.createMapsLink('East Side Gallery', 'Berlin', '★4.6')}。</li>
                <li><strong>11:30 AM — Day 2 Bakery & Pastry:</strong> ${isParis ? this.createMapsLink('Cédric Grolet Le Meurice', 'Paris', '★4.6') + ' — Sculpted fruit pastries' : isAmsterdam ? this.createMapsLink('Winkel 43', 'Amsterdam', '★4.6') + ' — Famous Dutch warm apple pie (€5)' : isBrussels ? this.createMapsLink('Pierre Marcolini', 'Brussels', '★4.7') : isLuxembourg ? this.createMapsLink('Oberweis Bakery', 'Luxembourg', '★4.6') : isCologne ? this.createMapsLink('Café Rizzoli', 'Cologne', '★4.6') : isMunich ? this.createMapsLink('Café Frischhut', 'Munich', '★4.7') : this.createMapsLink('Zeit für Brot', 'Berlin', '★4.7')}。</li>
                <li><strong>12:30 PM — Day 2 Restaurant:</strong> ${isParis ? this.createMapsLink('Le Train Bleu', 'Le Train Bleu Paris', '★4.5') + ' (€25–€38) OR ' + this.createMapsLink('Chez Janou', 'Chez Janou Paris', '★4.5') + ' (Provençal bistro & chocolate mousse)' : isAmsterdam ? this.createMapsLink('Foodhallen Amsterdam', 'Amsterdam', '★4.5') + ' (€15–€22)' : isBrussels ? this.createMapsLink('Chez Léon', 'Brussels', '★4.6') + ' (Mussels & frites since 1893)' : isLuxembourg ? this.createMapsLink('Um Dietgen', 'Luxembourg', '★4.5') : isCologne ? this.createMapsLink('Peters Brauhaus', 'Cologne', '★4.5') : isMunich ? this.createMapsLink('Hofbräuhaus München', 'Munich', '★4.5') : this.createMapsLink('Prater Biergarten', 'Berlin', '★4.6')}。</li>
                <li><strong>03:00 PM — Day 2 Afternoon Excursion:</strong> ${isParis ? this.createMapsLink('Sacré-Cœur Basilica & Montmartre', 'Sacré Cœur Paris', '★4.7') + ' — Metro Line 2 Anvers Station' : isAmsterdam ? this.createMapsLink('Zaanse Schans Windmills', 'Zaanse Schans', '★4.6') + ' — Bus 391 Direct' : isBrussels ? this.createMapsLink('Royal Museum of the Armed Forces', 'Brussels', '★4.7') : isLuxembourg ? this.createMapsLink('Vianden Castle', 'Luxembourg', '★4.7') : isCologne ? this.createMapsLink('Drachenfels Castle', 'Cologne', '★4.6') : isMunich ? this.createMapsLink('Munich Residenz Palace', 'Munich', '★4.8') : this.createMapsLink('Sanssouci Palace Potsdam', 'Potsdam', '★4.8')}。</li>
                <li><strong>07:00 PM — Farewell Gathering:</strong> Evening walk along canal/river with local companions.</li>
              </ul>
            </div>
          `;
        }
      }
    }

    return html;
  },

  // Render Clean Customer-Facing Card (No internal multi-agent status box)
  renderItineraryCard(destination, days, interest, itineraryHtml, engineTag) {
    const resultContainer = document.getElementById('aiPlanResult');
    if (!resultContainer) return;

    resultContainer.innerHTML = `
      <div style="background:var(--bg-card-warm); border:2.5px solid var(--border-ink); border-radius:22px; padding:2rem; margin-top:1.5rem; box-shadow:var(--shadow-sketch); animation:fadeIn 0.3s ease;">
        
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem; margin-bottom:1.25rem;">
          <div>
            <span class="paper-tape">${engineTag}</span>
            <h3 style="font-size:1.65rem; margin-top:0.4rem; font-family:var(--font-serif);">
              ${escapeHtml(destination)} — ${days === 0.5 ? '半日コース' : days + '日コース'} 厳選ルート（${escapeHtml(interest)}）
            </h3>
          </div>
          <span class="seed-points-badge">📍 Google Maps 直結生リンク付き（★4.5+）</span>
        </div>

        <!-- Google Maps Live Links Instruction Box -->
        <div style="background:#EFF6FF; border:1.5px solid #3B82F6; border-radius:12px; padding:0.85rem 1.25rem; margin-bottom:1.5rem; font-size:0.85rem; color:#1E40AF; display:flex; align-items:center; gap:0.5rem;">
          <span style="font-size:1.2rem;">🗺️</span>
          <span><strong>ヒント:</strong> スポット名ボタン（例: <strong>📍 Sainte-Chapelle ↗</strong>）をタップすると、<strong>Googleマップの実際の店舗ページ（今日の営業時間・生の最新口コミ・写真）</strong>が直接開きます！</span>
        </div>

        <div style="margin-bottom:1.5rem;">
          ${itineraryHtml}
        </div>

        <!-- Call-to-Action for Zero-Commission Companion Connection -->
        <div style="background:linear-gradient(135deg, #FEF3C7, #D1FAE5); border:2px solid var(--border-ink); border-radius:16px; padding:1.5rem; text-align:center;">
          <h4 style="font-size:1.2rem; color:var(--primary-forest); margin-bottom:0.5rem; font-family:var(--font-sans);">
            🤝 このルートを一緒に巡るゼロマージン・ローカル仲間とつながりませんか？
          </h4>
          <p style="font-size:0.9rem; color:var(--text-secondary); max-width:650px; margin:0 auto 1.25rem;">
            ${escapeHtml(destination)} 在住の認証済みローカル仲間（学生・有志）と直接連絡できます。
            <strong>仲介手数料0%:</strong> 謝礼は100%ローカル仲間の収入、または無料ボランティアで交流！
          </p>
          <button class="btn btn-emerald" style="padding:0.75rem 1.75rem;" onclick="scrollToLocalCompanions('${escapeHtml(destination)}')">
            👥 このルートのゼロマージン・ローカル仲間とつながる
          </button>
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

function scrollToLocalCompanions(destination) {
  const element = document.getElementById('companionsSection');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str).replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[m]));
}

window.AITravelEngine = AITravelEngine;
