/* ==========================================================================
   0 Margin EU Travel — Interactive Spot Selection & Custom AI Route Engine
   Step 1: City, Transport, Traveler Type, Duration
   Step 2: Candidate Spots & Must-Visit Selection (Cap: 0.5d=2, 1d=4, 2d=7)
   Step 3: AI Route Synthesis with 100% Real Named Venues & Google Maps Links
   ========================================================================== */

const candidateSpotsDatabase = {
  'Paris, France': [
    { id: 'p_1', name: 'サント・シャペル教会 (Sainte-Chapelle)', category: '観光地', rating: '★4.8', desc: '13世紀の圧巻のゴシック様式ステンドグラス大聖堂', price: '入場料: €11.50', family: true, adult: true },
    { id: 'p_2', name: "オルセー美術館 (Musée d'Orsay)", category: '観光地', rating: '★4.8', desc: '旧リヨン駅校舎をリノベートした印象派絵画の殿堂', price: '入場料: €16.00', family: true, adult: true },
    { id: 'p_3', name: 'パレ・ロワイヤル庭園 (Palais-Royal)', category: '観光地', rating: '★4.7', desc: '白黒ストライプの現代アート柱と静寂な噴水庭園', price: '入場無料', family: true, adult: true },
    { id: 'p_4', name: 'サクレ・クール寺院 (Sacré-Cœur)', category: '観光地', rating: '★4.7', desc: 'モンマルトルの丘からパリ一望の白亜の大聖堂', price: '入場無料', family: true, adult: true },
    { id: 'p_5', name: 'Le Petit Marché', category: 'レストラン', rating: '★4.6', desc: 'マレ地区で大人気の絶品鴨コンフィと創作ビストロ', price: '平均予算: €18–€26', family: false, adult: true },
    { id: 'p_6', name: 'ル・トレン・ブルー (Le Train Bleu)', category: 'レストラン', rating: '★4.5', desc: 'リヨン駅構内の豪華絢爛な宮殿装飾歴史的レストラン', price: '平均予算: €25–€38', family: true, adult: true },
    { id: 'p_7', name: 'シェ・ジャヌー (Chez Janou)', category: 'レストラン', rating: '★4.5', desc: 'プロヴァンス風ビストロと盛り放題名物チョコムース', price: '平均予算: €16–€25', family: true, adult: true },
    { id: 'p_8', name: 'マルシェ・デ・ザンファン・ルージュ', category: 'カフェ', rating: '★4.5', desc: '1615年創業の最古屋内市場と焼きたて手打ちクレープ', price: 'クレープ: €5–€9', family: true, adult: true },
    { id: 'p_9', name: 'セドリック・グロレ (Cédric Grolet Le Meurice)', category: 'カフェ', rating: '★4.6', desc: '彫刻のように美しい世界最高峰のパティスリーケーキ', price: 'ケーキ: €12–€18', family: true, adult: true }
  ],

  'Amsterdam, Netherlands': [
    { id: 'a_1', name: 'アムステルダム国立美術館 (Rijksmuseum)', category: '観光地', rating: '★4.7', desc: 'レンブラント「夜警」とフェルメール名画を展示する殿堂', price: '入場料: €22.50', family: true, adult: true },
    { id: 'a_2', name: 'ゴッホ美術館 (Van Gogh Museum)', category: '観光地', rating: '★4.8', desc: 'ゴッホの「ひまわり」や「自画像」を世界最大所蔵', price: '入場料: €20.00', family: true, adult: true },
    { id: 'a_3', name: '九つの街 (De Negen Straatjes)', category: '観光地', rating: '★4.8', desc: '最美運河沿いに並ぶブティックとセレクトショップ街', price: '散策無料', family: true, adult: true },
    { id: 'a_4', name: 'ザーンセ・スカンス風車村 (Zaanse Schans)', category: '観光地', rating: '★4.6', desc: '木造風車とチーズ工房が広がるオランダ伝統の郊外風車村', price: '入場無料', family: true, adult: true },
    { id: 'a_5', name: 'Café de Klos', category: 'レストラン', rating: '★4.6', desc: '地元民に愛される絶品スモーキー・スペアリブの名店', price: '平均予算: €18–€26', family: true, adult: true },
    { id: 'a_6', name: 'Foodhallen Amsterdam', category: 'レストラン', rating: '★4.5', desc: '旧路面電車車庫をリノベートしたおしゃれなフードホール', price: '平均予算: €15–€22', family: true, adult: true },
    { id: 'a_7', name: 'ヴァン・スターペレ (Van Stapele Koekmakerij)', category: 'カフェ', rating: '★4.8', desc: '焼きたてヴァローナ・ダークチョコクッキーの行列店', price: 'クッキー: €3.00', family: true, adult: true },
    { id: 'a_8', name: 'ウィンケル43 (Winkel 43)', category: 'カフェ', rating: '★4.6', desc: 'ホイップクリームたっぷりの名物温かいアップルパイ', price: 'アップルパイ: €5.00', family: true, adult: true },
    { id: 'a_9', name: 'ブロウエライ・テイ (Brouwerij \'t IJ)', category: 'カフェ', rating: '★4.6', desc: '大風車の足元にあるオーガニッククラフトビール醸造所', price: 'ビール: €5–€8', family: false, adult: true }
  ],

  'Brussels, Belgium': [
    { id: 'b_1', name: 'グラン＝プラス (Grand-Place)', category: '観光地', rating: '★4.7', desc: 'ヴィクトル・ユーゴーが絶賛した世界最美の石畳大広場', price: '入場無料', family: true, adult: true },
    { id: 'b_2', name: 'ギャルリ・サンチュベール (Royal Gallery)', category: '観光地', rating: '★4.6', desc: '19世紀ヨーロッパ最古のガラス屋根ショッピングアーケード', price: '散策無料', family: true, adult: true },
    { id: 'b_3', name: 'アトミウム (Atomium)', category: '観光地', rating: '★4.4', desc: '鉄の結晶構造を1650億倍に拡大した未来的なパノラマ展望台', price: '入場料: €16.00', family: true, adult: true },
    { id: 'b_4', name: 'Fin de Siècle', category: 'レストラン', rating: '★4.5', desc: '牛肉のベルギービール煮込み「カルボナード」の行列名店', price: '平均予算: €16–€24', family: true, adult: true },
    { id: 'b_5', name: 'Chez Léon', category: 'レストラン', rating: '★4.6', desc: '1893年創業。名物ムール貝の白ワイン蒸しとフリッツ', price: '平均予算: €18–€26', family: true, adult: true },
    { id: 'b_6', name: 'メゾン・ダンドワ (Maison Dandoy)', category: 'カフェ', rating: '★4.6', desc: '外サク内モチの焼きたて伝統リエージュワッフル専門店', price: 'ワッフル: €4.50–€7', family: true, adult: true },
    { id: 'b_7', name: 'ピエール・マルコリーニ (Pierre Marcolini)', category: 'カフェ', rating: '★4.7', desc: 'ベルギー王室御用達ショコラティエの本店フラッグシップ', price: 'チョコ: €8–€15', family: true, adult: true }
  ],

  'Luxembourg City, Luxembourg': [
    { id: 'l_1', name: 'ボックの砲台 (Bock Casemates)', category: '観光地', rating: '★4.6', desc: '断崖絶壁に掘られた世界遺産の地下要塞迷宮', price: '入場料: €8.00', family: true, adult: true },
    { id: 'l_2', name: 'シュマン・ド・ラ・コルニッシュ', category: '観光地', rating: '★4.8', desc: '「ヨーロッパ最美のバルコニー」と呼ばれるパノラマ遊歩道', price: '散策無料', family: true, adult: true },
    { id: 'l_3', name: 'グルンド歴史地区 (Grund)', category: '観光地', rating: '★4.7', desc: '無料エレベーターで降りる美しい谷底の石畳歴史地区', price: '散策無料', family: true, adult: true },
    { id: 'l_4', name: 'Chocolate House Nathalie Bonn', category: 'カフェ', rating: '★4.6', desc: '宮殿の向かいにあるホットスプーンチョコ＆キッシュ名店', price: '平均予算: €14–€22', family: true, adult: true },
    { id: 'l_5', name: 'Brasserie du Cercle', category: 'レストラン', rating: '★4.5', desc: 'ダルム広場に面した伝統的なルクセンブルク料理レストラン', price: '平均予算: €18–€28', family: true, adult: true }
  ],

  'Cologne, Germany': [
    { id: 'c_1', name: 'ケルン大聖堂 (Kölner Dom)', category: '観光地', rating: '★4.8', desc: 'ケルン中央駅横に聳え立つ世界遺産のゴシック大聖堂', price: '入場無料 (塔拝観: €6)', family: true, adult: true },
    { id: 'c_2', name: 'ルートヴィヒ美術館 (Museum Ludwig)', category: '観光地', rating: '★4.6', desc: 'ピカソの膨大なコレクションとポップアートの宝庫', price: '入場料: €11.00', family: true, adult: true },
    { id: 'c_3', name: 'ホーエンツォレルン橋 (Hohenzollernbrücke)', category: '観光地', rating: '★4.7', desc: '愛の南京錠がびっしりと並ぶライン川の鉄道橋ウォーク', price: '散策無料', family: true, adult: true },
    { id: 'c_4', name: 'Brauhaus Sion', category: 'レストラン', rating: '★4.4', desc: '名物ケルシュビールとボリューム満点シュヴァイネハクセ', price: '平均予算: €15–€24', family: true, adult: true },
    { id: 'c_5', name: 'Café Reichard', category: 'カフェ', rating: '★4.5', desc: '大聖堂の目の前で楽しむ伝統ドイツケーキとコーヒー', price: '平均予算: €8–€14', family: true, adult: true }
  ],

  'Munich, Germany': [
    { id: 'm_1', name: 'マリエン広場 (Marienplatz)', category: '観光地', rating: '★4.7', desc: '新市庁舎のからくり時計（グロッケンシュピール）が有名な広場', price: '観覧無料', family: true, adult: true },
    { id: 'm_2', name: '英国庭園 (Englischer Garten)', category: '観光地', rating: '★4.8', desc: 'アイスバッハ川で川サーフィンが見られる世界最大級の都市公園', price: '散策無料', family: true, adult: true },
    { id: 'm_3', name: 'ニンフェンブルク宮殿 (Nymphenburg Palace)', category: '観光地', rating: '★4.7', desc: 'バイエルン王家のバロック様式大宮殿と広大な庭園', price: '庭園散策無料', family: true, adult: true },
    { id: 'm_4', name: 'Augustiner-Keller', category: 'レストラン', rating: '★4.6', desc: '大きなマロニエの木の下で味わう名物白ソーセージとビール', price: '平均予算: €14–€22', family: true, adult: true },
    { id: 'm_5', name: 'Café Frischhut', category: 'カフェ', rating: '★4.7', desc: 'ヴィクトゥアーリエンマルクト近くの伝統揚げパン「シュマルツヌーデル」', price: '揚げパン: €3.00', family: true, adult: true }
  ],

  'Berlin, Germany': [
    { id: 'b_b1', name: 'ブランデンブルク門 (Brandenburger Tor)', category: '観光地', rating: '★4.7', desc: 'ベルリンの象徴でありドイツ統一の歴史を見守った平和の門', price: '観覧無料', family: true, adult: true },
    { id: 'b_b2', name: '博物館島 (Museumsinsel)', category: '観光地', rating: '★4.8', desc: 'ペルガモン博物館や新博物館が集まるユネスコ世界遺産', price: '島内散策無料', family: true, adult: true },
    { id: 'b_b3', name: 'イーストサイドギャラリー (East Side Gallery)', category: '観光地', rating: '★4.6', desc: 'ベルリンの壁に描かれた全長1.3kmの屋外ウォールアート', price: '観覧無料', family: true, adult: true },
    { id: 'b_b4', name: 'Mustafa\'s Gemüse Kebab', category: 'レストラン', rating: '★4.4', desc: 'ベルリンで行列No.1を誇る名物チキン＆焼き野菜ケバブ', price: 'ケバブ: €7.00', family: true, adult: true },
    { id: 'b_b5', name: 'Zeit für Brot', category: 'カフェ', rating: '★4.7', desc: '焼きたてふわふわのオーガニックシナモンロール名店', price: 'シナモンロール: €4.50', family: true, adult: true }
  ]
};

const AITravelEngine = {
  config: {
    apiKey: localStorage.getItem('zmt_gemini_api_key') || '',
    modelName: 'Gemini 1.5 Flash'
  },

  selectedMustVisitIds: new Set(),

  setApiKey(key) {
    this.config.apiKey = key.trim();
    localStorage.setItem('zmt_gemini_api_key', key.trim());
  },

  detectLanguage(text) {
    const jpRegex = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff]/;
    return jpRegex.test(text) ? 'ja' : 'en';
  },

  // Helper: Create Google Maps Search Link Button
  createMapsLink(placeName, city, rating = '') {
    const query = encodeURIComponent(`${placeName} ${city}`);
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;
    const ratingTag = rating ? ` (${rating})` : '';
    return `<a href="${mapsUrl}" target="_blank" rel="noopener noreferrer" style="display:inline-flex; align-items:center; gap:0.25rem; background:#EFF6FF; color:#1D4ED8; border:1px solid #93C5FD; padding:0.15rem 0.55rem; border-radius:6px; font-weight:700; text-decoration:none; font-size:0.85rem;" title="Google Mapsでリアルタイム営業時間・口コミ・写真を見る">📍 ${escapeHtml(placeName)}${ratingTag} <span style="font-size:0.75rem;">↗</span></a>`;
  },

  // Step 2: Render Interactive Candidate Spots with Selection Checkboxes
  renderCandidateSpots() {
    const city = document.getElementById('aiPlanDestination').value || 'Paris, France';
    const days = parseFloat(document.getElementById('aiPlanDays').value) || 1;
    const targetAudience = document.getElementById('aiPlanAudience').value || 'none';

    // Selection Cap: 0.5d=2, 1d=4, 2d=7
    let maxCap = 4;
    if (days === 0.5) maxCap = 2;
    if (days === 2.0) maxCap = 7;

    const spots = candidateSpotsDatabase[city] || candidateSpotsDatabase['Paris, France'];
    const container = document.getElementById('candidateSpotsGrid');
    const counterBadge = document.getElementById('spotsCounterBadge');

    if (!container) return;

    // Filter by audience if specified
    let filteredSpots = spots;
    if (targetAudience === 'kids') {
      filteredSpots = spots.filter(s => s.family);
    } else if (targetAudience === 'adults') {
      filteredSpots = spots.filter(s => s.adult);
    }

    if (counterBadge) {
      const selectedCount = this.selectedMustVisitIds.size;
      counterBadge.innerHTML = `選択中: <strong>${selectedCount} / ${maxCap}</strong> 箇所 (最大 ${maxCap} 箇所まで「絶対行きたい」場所を選択可能)`;
      counterBadge.style.color = selectedCount >= maxCap ? '#C2410C' : '#047857';
    }

    container.innerHTML = filteredSpots.map(s => {
      const isChecked = this.selectedMustVisitIds.has(s.id);
      return `
        <div class="card spot-candidate-card" style="border:2px solid ${isChecked ? 'var(--primary-gold)' : 'var(--border-ink)'}; background:${isChecked ? '#FEF3C7' : '#FFF'}; cursor:pointer; transition:all 0.2s ease;" onclick="AITravelEngine.toggleSpotSelection('${s.id}', ${maxCap})">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.4rem;">
            <span style="font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0369A1; padding:0.15rem 0.55rem; border-radius:6px; border:1px solid #0284C7;">${s.category}</span>
            <span style="font-size:0.8rem; font-weight:800; color:#047857;">${s.rating}</span>
          </div>

          <h4 style="font-size:1.05rem; margin-bottom:0.3rem; font-family:var(--font-sans); color:var(--text-primary); display:flex; align-items:center; gap:0.4rem;">
            <input type="checkbox" id="chk_${s.id}" ${isChecked ? 'checked' : ''} onclick="event.stopPropagation(); AITravelEngine.toggleSpotSelection('${s.id}', ${maxCap})" style="width:18px; height:18px; cursor:pointer;">
            <span>${escapeHtml(s.name)}</span>
          </h4>

          <p style="font-size:0.85rem; color:var(--text-secondary); line-height:1.5; margin-bottom:0.5rem;">${escapeHtml(s.desc)}</p>

          <div style="display:flex; justify-content:space-between; align-items:center; margin-top:0.6rem; font-size:0.8rem; border-top:1px dashed #EADEC9; padding-top:0.4rem;">
            <span style="font-weight:700; color:var(--primary-wood);">${escapeHtml(s.price)}</span>
            ${this.createMapsLink(s.name.split(' (')[0], city.split(',')[0])}
          </div>
        </div>
      `;
    }).join('');
  },

  toggleSpotSelection(spotId, maxCap) {
    if (this.selectedMustVisitIds.has(spotId)) {
      this.selectedMustVisitIds.delete(spotId);
    } else {
      if (this.selectedMustVisitIds.size >= maxCap) {
        alert(`選択上限です。${maxCap}箇所まで選択できます。上限を増やすには旅行期間（1日・2日）を変更してください。`);
        return;
      }
      this.selectedMustVisitIds.add(spotId);
    }
    this.renderCandidateSpots();
  },

  // Step 3: Generate Custom Route embedding selected Must-Visit spots
  generateItinerary(event) {
    if (event) event.preventDefault();

    const destination = document.getElementById('aiPlanDestination').value.trim() || 'Paris, France';
    let days = parseFloat(document.getElementById('aiPlanDays').value) || 1;
    if (days > 2) days = 2;

    const transportMode = document.getElementById('aiPlanTransport').value || 'transit';
    const audience = document.getElementById('aiPlanAudience').value || 'none';

    const resultContainer = document.getElementById('aiPlanResult');
    if (!resultContainer) return;

    const lang = this.detectLanguage(destination);
    const isCar = transportMode === 'car';

    // Gather Must-Visit spot objects
    const allSpots = candidateSpotsDatabase[destination] || candidateSpotsDatabase['Paris, France'];
    const mustVisitSpots = allSpots.filter(s => this.selectedMustVisitIds.has(s.id));
    const mustVisitNames = mustVisitSpots.map(s => s.name).join(', ');

    resultContainer.style.display = 'block';
    resultContainer.innerHTML = `
      <div style="background:var(--bg-card-warm); border:2.5px solid var(--border-ink); border-radius:22px; padding:2.5rem; margin-top:1.5rem; box-shadow:var(--shadow-sketch); text-align:center;">
        <div style="font-size:1.5rem; color:var(--primary-gold); font-family:var(--font-serif);" class="font-serif">
          ⚡ ${lang === 'ja' ? '絶対行きたい場所を含めた最適ルートをAI作成中...' : 'Generating Custom Route with Must-Visit Spots...'}
        </div>
        <p style="font-size:0.95rem; color:var(--text-secondary); margin-top:0.5rem;">
          ${escapeHtml(destination)} (${days === 0.5 ? '半日コース' : days + '日コース'}) | 必訪: <strong>${escapeHtml(mustVisitNames || 'AIおまかせ厳選名所')}</strong>
        </p>
      </div>
    `;

    if (this.config.apiKey) {
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${this.config.apiKey}`;
      const systemPrompt = `You are an expert AI Travel Route Curator for 0 Margin EU Travel. Respond in ${lang === 'ja' ? 'Japanese' : 'English'}.
STRICT MANDATE:
1. MUST EMBED THESE USER-SELECTED MUST-VISIT SPOTS: ${mustVisitNames || 'Top 4.5+ Real Spots'}.
2. TRANSPORTATION: ${isCar ? 'CAR / DRIVING MODE (Include driving minutes and parking garages like Parking Indigo, Q-Park, Interparking)' : 'PUBLIC TRANSIT MODE (Include metro/RER lines and walking minutes)'}.
3. TARGET AUDIENCE: ${audience === 'kids' ? 'Family with kids (kid-friendly tips & easy pace)' : audience === 'adults' ? 'Adults only (fine dining & relaxed pace)' : 'All travelers'}.
4. DURATION LIMIT: MAX ${days} DAY(S) (0.5 = Half Day, 1 = 1 Day, 2 = 2 Days max). NO DAY 3.
5. ABSOLUTELY ZERO REPETITION: Day 1 and Day 2 MUST feature 100% COMPLETELY DIFFERENT venues.
Format cleanly in HTML using <h4>, <ul>, <li>, and <strong> tags within 500 words.`;

      fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: systemPrompt }] },
          contents: [{ role: 'user', parts: [{ text: `Generate custom route for ${destination} containing ${mustVisitNames}` }] }],
          generationConfig: { maxOutputTokens: 750, temperature: 0.5 }
        })
      })
      .then(res => res.json())
      .then(data => {
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!text) throw new Error('Empty payload');
        this.renderItineraryCard(destination, days, transportMode, audience, mustVisitSpots, text, '⚡ Live Gemini 1.5 Flash (Custom Route)');
      })
      .catch(err => {
        console.warn('Gemini API call fallback:', err);
        const fallbackText = this.buildCustomRouteItinerary(destination, days, transportMode, audience, mustVisitSpots, lang);
        this.renderItineraryCard(destination, days, transportMode, audience, mustVisitSpots, fallbackText, '⚡ AI Custom Route (Real Google Maps Spots)');
      });

    } else {
      setTimeout(() => {
        const fallbackText = this.buildCustomRouteItinerary(destination, days, transportMode, audience, mustVisitSpots, lang);
        this.renderItineraryCard(destination, days, transportMode, audience, mustVisitSpots, fallbackText, '⚡ AI Custom Route (Real Google Maps Spots)');
      }, 350);
    }
  },

  // Synthesize Custom Route with Selected Must-Visit Spots + Complementary Real Venues
  buildCustomRouteItinerary(destination, days, transportMode, audience, mustVisitSpots, lang) {
    const destLower = destination.toLowerCase();
    const isCar = transportMode === 'car';

    const isParis = destLower.includes('paris');
    const isAmsterdam = destLower.includes('amsterdam');
    const isBrussels = destLower.includes('brussels') || destLower.includes('bruxelles');

    const mustNames = mustVisitSpots.map(s => s.name);

    let html = '';

    const transitNotice1 = isCar 
      ? '🚗 ドライブ: 近隣地下駐車場（Parking Indigo / Q-Park）利用。' 
      : '🚆 公共交通機関: メトロ/RER最寄り駅より徒歩3〜5分。';

    const transitNotice2 = isCar 
      ? '🚗 ドライブ: 環状道路経由。目的地の地下P直結。' 
      : '🚆 公共交通機関: トラム/バス直通アクセス。';

    if (lang === 'ja') {
      if (days === 0.5) {
        html += `
          <div style="background:#FFF; border:1.5px solid var(--border-ink); border-radius:14px; padding:1.25rem; margin-bottom:1.25rem;">
            <h4 style="color:var(--primary-forest); font-size:1.05rem; margin-bottom:0.5rem; font-family:var(--font-sans);">
              📍 半日カスタムコース: ${escapeHtml(destination)} 必訪スポット凝縮
            </h4>
            <ul style="font-size:0.92rem; color:var(--text-primary); line-height:1.85; padding-left:1.2rem;">
              <li><strong>09:00 AM — 【選択必訪スポット】:</strong> ${mustNames[0] ? this.createMapsLink(mustNames[0].split(' (')[0], destination.split(',')[0]) : (isParis ? this.createMapsLink('サント・シャペル教会', 'Paris', '★4.8') : this.createMapsLink('アムステルダム国立美術館', 'Amsterdam', '★4.7'))} （${transitNotice1}）。</li>
              <li><strong>11:30 AM — 名物スイーツ・カフェ:</strong> ${mustNames[1] ? this.createMapsLink(mustNames[1].split(' (')[0], destination.split(',')[0]) : (isParis ? this.createMapsLink('マルシェ・デ・ザンファン・ルージュ', 'Paris', '★4.5') : this.createMapsLink('ヴァン・スターペレ', 'Amsterdam', '★4.8'))}。</li>
              <li><strong>12:30 PM — 絶品ランチ:</strong> ${isParis ? this.createMapsLink('Le Petit Marché', 'Paris', '★4.6') + '（鴨コンフィ €18–€26）' : isAmsterdam ? this.createMapsLink('Café de Klos', 'Amsterdam', '★4.6') + '（スペアリブ €18–€26）' : this.createMapsLink('Fin de Siècle', 'Brussels', '★4.5')}。</li>
            </ul>
          </div>
        `;
      } else {
        // DAY 1
        html += `
          <div style="background:#FFF; border:1.5px solid var(--border-ink); border-radius:14px; padding:1.25rem; margin-bottom:1.25rem;">
            <h4 style="color:var(--primary-forest); font-size:1.05rem; margin-bottom:0.5rem; font-family:var(--font-sans);">
              📍 1日目: 【選択スポット組込】${escapeHtml(destination)} 中心部歴史名所
            </h4>
            <ul style="font-size:0.92rem; color:var(--text-primary); line-height:1.85; padding-left:1.2rem;">
              <li><strong>09:00 AM — 朝の必訪観覧:</strong> ${mustNames[0] ? this.createMapsLink(mustNames[0].split(' (')[0], destination.split(',')[0]) : (isParis ? this.createMapsLink('サント・シャペル教会', 'Paris', '★4.8') : this.createMapsLink('アムステルダム国立美術館', 'Amsterdam', '★4.7'))} （${transitNotice1}）。</li>
              <li><strong>11:30 AM — 名物スイーツ:</strong> ${mustNames[1] ? this.createMapsLink(mustNames[1].split(' (')[0], destination.split(',')[0]) : (isParis ? this.createMapsLink('マルシェ・デ・ザンファン・ルージュ', 'Paris', '★4.5') : this.createMapsLink('ヴァン・スターペレ', 'Amsterdam', '★4.8'))}。</li>
              <li><strong>12:30 PM — 1日目ランチ名店:</strong> ${isParis ? this.createMapsLink('Le Petit Marché', 'Paris', '★4.6') + '（マレ地区鴨コンフィ €18–€26）' : isAmsterdam ? this.createMapsLink('Café de Klos', 'Amsterdam', '★4.6') + '（スペアリブ €18–€26）' : this.createMapsLink('Fin de Siècle', 'Brussels', '★4.5')}。</li>
              <li><strong>03:00 PM — 午後散策:</strong> ${mustNames[2] ? this.createMapsLink(mustNames[2].split(' (')[0], destination.split(',')[0]) : (isParis ? this.createMapsLink('パレ・ロワイヤル庭園', 'Paris', '★4.7') : this.createMapsLink('九つの街', 'Amsterdam', '★4.8'))}。</li>
              <li><strong>07:00 PM — 夜の散歩:</strong> ${isParis ? this.createMapsLink('ポン・デ・ザール橋', 'Paris', '★4.7') : 'ライトアップ散策'}。</li>
            </ul>
          </div>
        `;

        // DAY 2
        if (days >= 2) {
          html += `
            <div style="background:#FFF; border:1.5px solid var(--border-ink); border-radius:14px; padding:1.25rem; margin-bottom:1.25rem;">
              <h4 style="color:var(--primary-wood); font-size:1.05rem; margin-bottom:0.5rem; font-family:var(--font-sans);">
                📍 2日目: 【全施設重複なし】${escapeHtml(destination)} オルセー/名店ルート
              </h4>
              <ul style="font-size:0.92rem; color:var(--text-primary); line-height:1.85; padding-left:1.2rem;">
                <li><strong>09:00 AM — 2日目必訪観覧:</strong> ${mustNames[3] ? this.createMapsLink(mustNames[3].split(' (')[0], destination.split(',')[0]) : (isParis ? this.createMapsLink('オルセー美術館', 'Musée d Orsay Paris', '★4.8') : this.createMapsLink('ゴッホ美術館', 'Amsterdam', '★4.8'))} （${transitNotice2}）。</li>
                <li><strong>11:30 AM — 2日目スイーツ:</strong> ${mustNames[4] ? this.createMapsLink(mustNames[4].split(' (')[0], destination.split(',')[0]) : (isParis ? this.createMapsLink('セドリック・グロレ', 'Paris', '★4.6') : this.createMapsLink('ウィンケル43', 'Amsterdam', '★4.6'))}。</li>
                <li><strong>12:30 PM — 2日目ランチ名店:</strong> ${isParis ? this.createMapsLink('ル・トレン・ブルー', 'Paris', '★4.5') + ' または ' + this.createMapsLink('シェ・ジャヌー', 'Paris', '★4.5') : isAmsterdam ? this.createMapsLink('Foodhallen Amsterdam', 'Amsterdam', '★4.5') : this.createMapsLink('Chez Léon', 'Brussels', '★4.6')}。</li>
                <li><strong>03:00 PM — 2日目午後散策:</strong> ${mustNames[5] ? this.createMapsLink(mustNames[5].split(' (')[0], destination.split(',')[0]) : (isParis ? this.createMapsLink('サクレ・クール寺院＆モンマルトルの丘', 'Paris', '★4.7') : this.createMapsLink('ザーンセ・スカンス風車村', 'Amsterdam', '★4.6'))}。</li>
                <li><strong>07:00 PM — 夕刻散歩:</strong> ゆったりとした夜の街並み散策。</li>
              </ul>
            </div>
          `;
        }
      }
    } else {
      // ENGLISH GENERATION
      html += `
        <div style="background:#FFF; border:1.5px solid var(--border-ink); border-radius:14px; padding:1.25rem; margin-bottom:1.25rem;">
          <h4 style="color:var(--primary-forest); font-size:1.05rem; margin-bottom:0.5rem; font-family:var(--font-sans);">
            📍 Custom Route: ${escapeHtml(destination)} (${days === 0.5 ? 'Half Day' : days + ' Day(s)'})
          </h4>
          <ul style="font-size:0.92rem; color:var(--text-primary); line-height:1.85; padding-left:1.2rem;">
            <li><strong>09:00 AM — Must-Visit Spot:</strong> ${mustNames[0] ? this.createMapsLink(mustNames[0], destination) : this.createMapsLink('Sainte-Chapelle', 'Paris', '★4.8')} (${transitNotice1}).</li>
            <li><strong>11:30 AM — Signature Bakery:</strong> ${mustNames[1] ? this.createMapsLink(mustNames[1], destination) : this.createMapsLink('Marché des Enfants Rouges', 'Paris', '★4.5')}.</li>
            <li><strong>12:30 PM — Recommended Restaurant:</strong> ${this.createMapsLink('Le Petit Marché', 'Paris', '★4.6')} (€18–€26).</li>
            <li><strong>03:00 PM — Afternoon Spot:</strong> ${mustNames[2] ? this.createMapsLink(mustNames[2], destination) : this.createMapsLink('Palais-Royal', 'Paris', '★4.7')}.</li>
          </ul>
        </div>
      `;
    }

    return html;
  },

  renderItineraryCard(destination, days, transportMode, audience, mustVisitSpots, itineraryHtml, engineTag) {
    const resultContainer = document.getElementById('aiPlanResult');
    if (!resultContainer) return;

    const isCar = transportMode === 'car';
    const mustCount = mustVisitSpots.length;

    resultContainer.innerHTML = `
      <div style="background:var(--bg-card-warm); border:2.5px solid var(--border-ink); border-radius:22px; padding:2rem; margin-top:1.5rem; box-shadow:var(--shadow-sketch); animation:fadeIn 0.3s ease;">
        
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem; margin-bottom:1.25rem;">
          <div>
            <span class="paper-tape">${engineTag}</span>
            <h3 style="font-size:1.65rem; margin-top:0.4rem; font-family:var(--font-serif);">
              ${escapeHtml(destination)} — ${days === 0.5 ? '半日' : days + '日'} カスタムルート（必訪 ${mustCount}箇所組込）
            </h3>
          </div>
          <span class="seed-points-badge">${isCar ? '🚗 車・駐車場案内' : '🚆 公共交通機関'}</span>
        </div>

        <!-- Google Maps Instruction Box -->
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

window.addEventListener('DOMContentLoaded', () => {
  if (typeof AITravelEngine !== 'undefined') {
    AITravelEngine.renderCandidateSpots();
  }
});
