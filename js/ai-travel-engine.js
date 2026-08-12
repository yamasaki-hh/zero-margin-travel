/* ==========================================================================
   0 Margin EU Travel — 100% English Interactive AI Route Planner
   Dynamic, Lightweight Spot Images + Fallback Handling + Google Maps Multi-Stop Navigation
   ========================================================================== */

const SVG_FALLBACK_IMAGE = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="340" viewBox="0 0 600 340"><rect width="600" height="340" fill="%23FAF7F2"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="22" fill="%2378350F">🗺️ European Landmark</text></svg>`;

const candidateSpotsDatabase = {
  'Paris, France': [
    { id: 'p_1', name: 'Sainte-Chapelle', category: 'Landmark', rating: '★4.8', desc: 'Breathtaking 13th-century Gothic chapel with 1,113 stained glass panels.', price: 'Entry: €11.50', image: 'https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=600&q=80', family: true, adult: true },
    { id: 'p_2', name: "Musée d'Orsay", category: 'Landmark', rating: '★4.8', desc: 'World-renowned Impressionist art museum in a restored Beaux-Arts railway station.', price: 'Entry: €16.00', image: 'https://images.unsplash.com/photo-1584024419139-34e3ead8f78a?auto=format&fit=crop&w=600&q=80', family: true, adult: true },
    { id: 'p_3', name: 'Palais-Royal Courtyard', category: 'Landmark', rating: '★4.7', desc: 'Historic palace gardens featuring Buren\'s iconic black-and-white striped columns.', price: 'Free Entry', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80', family: true, adult: true },
    { id: 'p_4', name: 'Sacré-Cœur Basilica', category: 'Landmark', rating: '★4.7', desc: 'White domed basilica perched atop Montmartre with panoramic city views.', price: 'Free Entry', image: 'https://images.unsplash.com/photo-1509299349698-dd22323b5963?auto=format&fit=crop&w=600&q=80', family: true, adult: true },
    { id: 'p_5', name: 'Le Petit Marché', category: 'Restaurant', rating: '★4.6', desc: 'Cozy Le Marais bistro famous for seared duck breast and organic wines.', price: 'Avg: €18–€26', image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=600&q=80', family: false, adult: true },
    { id: 'p_6', name: 'Le Train Bleu', category: 'Restaurant', rating: '★4.5', desc: 'Opulent palace restaurant inside Gare de Lyon with frescoed ceilings.', price: 'Avg: €25–€38', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80', family: true, adult: true },
    { id: 'p_7', name: 'Chez Janou', category: 'Restaurant', rating: '★4.5', desc: 'Lively Provençal bistro featuring bottomless homemade chocolate mousse.', price: 'Avg: €16–€25', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80', family: true, adult: true },
    { id: 'p_8', name: 'Marché des Enfants Rouges', category: 'Café & Bakery', rating: '★4.5', desc: 'Paris\'s oldest covered food market serving authentic fresh crêpes.', price: 'Crêpes: €5–€9', image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=600&q=80', family: true, adult: true },
    { id: 'p_9', name: 'Cédric Grolet Le Meurice', category: 'Café & Bakery', rating: '★4.6', desc: 'World-famous haute pâtisserie featuring sculpted fruit pastries.', price: 'Pastries: €12–€18', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80', family: true, adult: true }
  ],

  'Amsterdam, Netherlands': [
    { id: 'a_1', name: 'Rijksmuseum', category: 'Landmark', rating: '★4.7', desc: 'Dutch national museum displaying Rembrandt\'s The Night Watch and Vermeer.', price: 'Entry: €22.50', image: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=600&q=80', family: true, adult: true },
    { id: 'a_2', name: 'Van Gogh Museum', category: 'Landmark', rating: '★4.8', desc: 'The world\'s largest collection of artworks by Vincent van Gogh.', price: 'Entry: €20.00', image: 'https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?auto=format&fit=crop&w=600&q=80', family: true, adult: true },
    { id: 'a_3', name: 'Nine Streets (De Negen Straatjes)', category: 'Landmark', rating: '★4.8', desc: 'Picturesque canal-side neighborhood with vintage boutiques and art galleries.', price: 'Free Walk', image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=600&q=80', family: true, adult: true },
    { id: 'a_4', name: 'Zaanse Schans Windmills', category: 'Landmark', rating: '★4.6', desc: 'Historic windmill village featuring cheese making and wooden clog workshops.', price: 'Free Entry', image: 'https://images.unsplash.com/photo-1584003564911-a7a321c84e1c?auto=format&fit=crop&w=600&q=80', family: true, adult: true },
    { id: 'a_5', name: 'Café de Klos', category: 'Restaurant', rating: '★4.6', desc: 'Legendary local pub famous for wood-fired smoked ribs and craft beer.', price: 'Avg: €18–€26', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80', family: true, adult: true },
    { id: 'a_6', name: 'Foodhallen Amsterdam', category: 'Restaurant', rating: '★4.5', desc: 'Trendy indoor food hall located in a converted historic tram depot.', price: 'Avg: €15–€22', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80', family: true, adult: true },
    { id: 'a_7', name: 'Van Stapele Koekmakerij', category: 'Café & Bakery', rating: '★4.8', desc: 'Famous bakery serving fresh-baked Valrhona dark chocolate cookies.', price: 'Cookie: €3.00', image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=80', family: true, adult: true },
    { id: 'a_8', name: 'Winkel 43', category: 'Café & Bakery', rating: '★4.6', desc: 'Iconic café world-renowned for traditional Dutch warm apple pie.', price: 'Apple Pie: €5.00', image: 'https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?auto=format&fit=crop&w=600&q=80', family: true, adult: true },
    { id: 'a_9', name: 'Brouwerij \'t IJ', category: 'Café & Bakery', rating: '★4.6', desc: 'Artisanal organic craft brewery terrace right next to De Gooyer Windmill.', price: 'Beer: €5–€8', image: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=600&q=80', family: false, adult: true }
  ],

  'Brussels, Belgium': [
    { id: 'b_1', name: 'Grand-Place', category: 'Landmark', rating: '★4.7', desc: 'UNESCO world heritage central square enclosed by ornate guildhouses.', price: 'Free Entry', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80', family: true, adult: true },
    { id: 'b_2', name: 'Royal Gallery of Saint-Hubert', category: 'Landmark', rating: '★4.6', desc: 'Glazed 19th-century shopping arcade filled with master chocolatiers.', price: 'Free Walk', image: 'https://images.unsplash.com/photo-1574007557239-acf6863bc375?auto=format&fit=crop&w=600&q=80', family: true, adult: true },
    { id: 'b_3', name: 'Atomium', category: 'Landmark', rating: '★4.4', desc: 'Futuristic 102m-tall iron crystal structure offering panoramic city views.', price: 'Entry: €16.00', image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80', family: true, adult: true },
    { id: 'b_4', name: 'Fin de Siècle', category: 'Restaurant', rating: '★4.5', desc: 'Vibrant local tavern famous for Carbonnade Flamande (beer-braised beef stew).', price: 'Avg: €16–€24', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80', family: true, adult: true },
    { id: 'b_5', name: 'Chez Léon', category: 'Restaurant', rating: '★4.6', desc: 'Historic 1893 eatery serving traditional Belgian mussels and frites.', price: 'Avg: €18–€26', image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80', family: true, adult: true },
    { id: 'b_6', name: 'Maison Dandoy', category: 'Café & Bakery', rating: '★4.6', desc: 'Fresh-baked authentic Liège waffles served with warm chocolate sauce.', price: 'Waffles: €4.50–€7', image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=600&q=80', family: true, adult: true },
    { id: 'b_7', name: 'Pierre Marcolini', category: 'Café & Bakery', rating: '★4.7', desc: 'Flagship haute chocolaterie in Grand Sablon square.', price: 'Chocolates: €8–€15', image: 'https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?auto=format&fit=crop&w=600&q=80', family: true, adult: true }
  ],

  'Luxembourg City, Luxembourg': [
    { id: 'l_1', name: 'Bock Casemates', category: 'Landmark', rating: '★4.6', desc: 'Subterranean cliffside fortress passages carved into the rock face.', price: 'Entry: €8.00', image: 'https://images.unsplash.com/photo-1589708940348-18e388f8d672?auto=format&fit=crop&w=600&q=80', family: true, adult: true },
    { id: 'l_2', name: 'Chemin de la Corniche', category: 'Landmark', rating: '★4.8', desc: 'Scenic cliffside promenade dubbed "Europe\'s most beautiful balcony".', price: 'Free Walk', image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=600&q=80', family: true, adult: true },
    { id: 'l_3', name: 'Grund Historic Quarter', category: 'Landmark', rating: '★4.7', desc: 'Charming valley district accessed by elevator with cobblestone streets.', price: 'Free Walk', image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=600&q=80', family: true, adult: true },
    { id: 'l_4', name: 'Chocolate House Nathalie Bonn', category: 'Café & Bakery', rating: '★4.6', desc: 'Famous cafe opposite the Grand Ducal Palace serving hot chocolate spoons.', price: 'Avg: €14–€22', image: 'https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?auto=format&fit=crop&w=600&q=80', family: true, adult: true },
    { id: 'l_5', name: 'Brasserie du Cercle', category: 'Restaurant', rating: '★4.5', desc: 'Traditional Luxembourgish dining overlooking Place d\'Armes.', price: 'Avg: €18–€28', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80', family: true, adult: true }
  ],

  'Cologne, Germany': [
    { id: 'c_1', name: 'Cologne Cathedral (Kölner Dom)', category: 'Landmark', rating: '★4.8', desc: 'Colossal Twin-spired Gothic cathedral towering over the Rhine River.', price: 'Free (Tower: €6)', image: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=600&q=80', family: true, adult: true },
    { id: 'c_2', name: 'Museum Ludwig', category: 'Landmark', rating: '★4.6', desc: 'Modern art museum housing one of Europe\'s largest Picasso collections.', price: 'Entry: €11.00', image: 'https://images.unsplash.com/photo-1584024419139-34e3ead8f78a?auto=format&fit=crop&w=600&q=80', family: true, adult: true },
    { id: 'c_3', name: 'Hohenzollernbrücke', category: 'Landmark', rating: '★4.7', desc: 'Iconic railway bridge covered with thousands of love padlocks.', price: 'Free Walk', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80', family: true, adult: true },
    { id: 'c_4', name: 'Brauhaus Sion', category: 'Restaurant', rating: '★4.4', desc: 'Traditional Kölsch brewery house serving hearty Schweinshaxe roast pork.', price: 'Avg: €15–€24', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80', family: true, adult: true },
    { id: 'c_5', name: 'Café Reichard', category: 'Café & Bakery', rating: '★4.5', desc: 'Classic German pastry cafe featuring direct views of the Cathedral.', price: 'Avg: €8–€14', image: 'https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?auto=format&fit=crop&w=600&q=80', family: true, adult: true }
  ],

  'Munich, Germany': [
    { id: 'm_1', name: 'Marienplatz', category: 'Landmark', rating: '★4.7', desc: 'Central square famous for the New Town Hall Glockenspiel clock show.', price: 'Free View', image: 'https://images.unsplash.com/photo-1595867818082-083862f3d630?auto=format&fit=crop&w=600&q=80', family: true, adult: true },
    { id: 'm_2', name: 'Englischer Garten', category: 'Landmark', rating: '★4.8', desc: 'Sprawling urban park famous for river surfing on the Eisbach wave.', price: 'Free Walk', image: 'https://images.unsplash.com/photo-1584003564911-a7a321c84e1c?auto=format&fit=crop&w=600&q=80', family: true, adult: true },
    { id: 'm_3', name: 'Nymphenburg Palace', category: 'Landmark', rating: '★4.7', desc: 'Grand Baroque palace with extensive parklands and waterways.', price: 'Park: Free', image: 'https://images.unsplash.com/photo-1509299349698-dd22323b5963?auto=format&fit=crop&w=600&q=80', family: true, adult: true },
    { id: 'm_4', name: 'Augustiner-Keller', category: 'Restaurant', rating: '★4.6', desc: 'Historic chestnut-tree beer garden serving Weisswurst & pretzels.', price: 'Avg: €14–€22', image: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=600&q=80', family: true, adult: true },
    { id: 'm_5', name: 'Café Frischhut', category: 'Café & Bakery', rating: '★4.7', desc: 'Iconic bakery near Viktualienmarkt famous for Schmalznudel pastries.', price: 'Pastry: €3.00', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80', family: true, adult: true }
  ],

  'Berlin, Germany': [
    { id: 'b_b1', name: 'Brandenburg Gate', category: 'Landmark', rating: '★4.7', desc: '18th-century neoclassical monument and symbol of European unity.', price: 'Free View', image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=600&q=80', family: true, adult: true },
    { id: 'b_b2', name: 'Museum Island (Museumsinsel)', category: 'Landmark', rating: '★4.8', desc: 'UNESCO World Heritage complex housing world-famous antiquities.', price: 'Island: Free', image: 'https://images.unsplash.com/photo-1584024419139-34e3ead8f78a?auto=format&fit=crop&w=600&q=80', family: true, adult: true },
    { id: 'b_b3', name: 'East Side Gallery', category: 'Landmark', rating: '★4.6', desc: '1.3km open-air gallery painted directly on the historic Berlin Wall.', price: 'Free Walk', image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=600&q=80', family: true, adult: true },
    { id: 'b_b4', name: "Mustafa's Gemüse Kebab", category: 'Restaurant', rating: '★4.4', desc: 'Berlin\'s most famous street food stand for roasted vegetable kebabs.', price: 'Kebab: €7.00', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80', family: true, adult: true },
    { id: 'b_b5', name: 'Zeit für Brot', category: 'Café & Bakery', rating: '★4.7', desc: 'Organic bakery famous for warm, fluffy cinnamon rolls (Schnecken).', price: 'Cinnamon Roll: €4.50', image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=80', family: true, adult: true }
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

  // Helper to create single venue Google Maps live search link button
  createMapsLink(placeName, city, rating = '') {
    const query = encodeURIComponent(`${placeName} ${city}`);
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;
    const ratingTag = rating ? ` (${rating})` : '';
    return `<a href="${mapsUrl}" target="_blank" rel="noopener noreferrer" style="display:inline-flex; align-items:center; gap:0.25rem; background:#EFF6FF; color:#1D4ED8; border:1px solid #93C5FD; padding:0.15rem 0.55rem; border-radius:6px; font-weight:700; text-decoration:none; font-size:0.85rem;" title="View Live Google Maps Hours, Reviews & Photos">📍 ${escapeHtml(placeName)}${ratingTag} <span style="font-size:0.75rem;">↗</span></a>`;
  },

  // MASTER FEATURE: Generate Turn-by-Turn Multi-Stop Route Link for Google Maps
  generateMultiStopMapsLink(venueList, city, transportMode) {
    if (!venueList || venueList.length === 0) return '';

    const cleanCity = city.split(',')[0].trim();
    const cleanVenues = venueList.map(v => `${v.replace(/[()]/g, '').trim()}, ${cleanCity}`);

    const origin = cleanVenues[0];
    const destination = cleanVenues[cleanVenues.length - 1];
    const waypoints = cleanVenues.slice(1, -1).join('|');
    const travelmode = transportMode === 'car' ? 'driving' : 'transit';

    let multiStopUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&travelmode=${travelmode}`;
    if (waypoints) {
      multiStopUrl += `&waypoints=${encodeURIComponent(waypoints)}`;
    }

    return `
      <div style="background:linear-gradient(135deg, #FEF3C7, #D1FAE5); border:2.5px solid var(--border-ink); border-radius:18px; padding:1.75rem; text-align:center; margin-bottom:1.75rem; box-shadow:var(--shadow-sketch);">
        <div style="font-size:1.4rem; color:var(--primary-forest); font-family:var(--font-serif); margin-bottom:0.5rem;" class="font-serif">
          🗺️ Full Multi-Stop Google Maps Navigation Route
        </div>
        <p style="font-size:0.92rem; color:var(--text-secondary); max-width:680px; margin:0 auto 1.25rem;">
          Click the button below to load <strong>all ${cleanVenues.length} destinations in order</strong> directly into Google Maps! Hit <strong>"Start Navigation"</strong> to follow the turn-by-turn route on your phone.
        </p>
        <a href="${multiStopUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="padding:0.85rem 2rem; font-size:1.1rem; text-decoration:none;">
          📍 Open All ${cleanVenues.length} Destinations Route in Google Maps ↗
        </a>
      </div>
    `;
  },

  // Step 2: Render Interactive Candidate Spots with Selection Checkboxes & Lightweight Images
  renderCandidateSpots() {
    const city = document.getElementById('aiPlanDestination').value || 'Paris, France';
    const days = parseFloat(document.getElementById('aiPlanDays').value) || 1;
    const targetAudience = document.getElementById('aiPlanAudience').value || 'none';

    let maxCap = 4;
    if (days === 0.5) maxCap = 2;
    if (days === 2.0) maxCap = 7;

    const spots = candidateSpotsDatabase[city] || candidateSpotsDatabase['Paris, France'];
    const container = document.getElementById('candidateSpotsGrid');
    const counterBadge = document.getElementById('spotsCounterBadge');

    if (!container) return;

    let filteredSpots = spots;
    if (targetAudience === 'kids') {
      filteredSpots = spots.filter(s => s.family);
    } else if (targetAudience === 'adults') {
      filteredSpots = spots.filter(s => s.adult);
    }

    if (counterBadge) {
      const selectedCount = this.selectedMustVisitIds.size;
      counterBadge.innerHTML = `Selected: <strong>${selectedCount} / ${maxCap}</strong> (Max ${maxCap} Must-Visit Spots)`;
      counterBadge.style.color = selectedCount >= maxCap ? '#C2410C' : '#047857';
    }

    container.innerHTML = filteredSpots.map(s => {
      const isChecked = this.selectedMustVisitIds.has(s.id);
      const imgUrl = s.image || SVG_FALLBACK_IMAGE;

      return `
        <div class="card spot-candidate-card" style="border:2px solid ${isChecked ? 'var(--primary-gold)' : 'var(--border-ink)'}; background:${isChecked ? '#FEF3C7' : '#FFF'}; cursor:pointer; transition:all 0.2s ease; display:flex; flex-direction:column; justify-content:space-between;" onclick="AITravelEngine.toggleSpotSelection('${s.id}', ${maxCap})">
          <div>
            <!-- Lightweight Spot Thumbnail Image with Native Lazy Loading & SVG Fallback -->
            <div style="width:100%; height:150px; overflow:hidden; border-radius:12px; margin-bottom:0.75rem; background:#FAF7F2; position:relative;">
              <img src="${imgUrl}" alt="${escapeHtml(s.name)}" loading="lazy" decoding="async" style="width:100%; height:100%; object-fit:cover; display:block;" onerror="this.onerror=null; this.src='${SVG_FALLBACK_IMAGE}';">
              <span style="position:absolute; top:8px; right:8px; font-size:0.75rem; font-weight:800; background:rgba(255,255,255,0.92); color:#047857; padding:0.2rem 0.55rem; border-radius:6px; border:1px solid #047857; box-shadow:0 2px 4px rgba(0,0,0,0.1);">${s.rating}</span>
            </div>

            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem;">
              <span style="font-size:0.75rem; font-weight:700; background:#E0F2FE; color:#0369A1; padding:0.15rem 0.55rem; border-radius:6px; border:1px solid #0284C7;">${s.category}</span>
            </div>

            <h4 style="font-size:1.05rem; margin-bottom:0.3rem; font-family:var(--font-sans); color:var(--text-primary); display:flex; align-items:center; gap:0.4rem;">
              <input type="checkbox" id="chk_${s.id}" ${isChecked ? 'checked' : ''} onclick="event.stopPropagation(); AITravelEngine.toggleSpotSelection('${s.id}', ${maxCap})" style="width:18px; height:18px; cursor:pointer;">
              <span>${escapeHtml(s.name)}</span>
            </h4>

            <p style="font-size:0.85rem; color:var(--text-secondary); line-height:1.5; margin-bottom:0.75rem;">${escapeHtml(s.desc)}</p>
          </div>

          <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.8rem; border-top:1px dashed #EADEC9; padding-top:0.5rem; margin-top:auto;">
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
        alert(`Selection Limit Reached! You can select up to ${maxCap} spots for this duration. Change duration to 2 Days to select up to 7 spots.`);
        return;
      }
      this.selectedMustVisitIds.add(spotId);
    }
    this.renderCandidateSpots();
  },

  // Step 3: Generate Custom Route embedding Must-Visit spots + Multi-Stop Maps Link
  generateItinerary(event) {
    if (event) event.preventDefault();

    const destination = document.getElementById('aiPlanDestination').value.trim() || 'Paris, France';
    let days = parseFloat(document.getElementById('aiPlanDays').value) || 1;
    if (days > 2) days = 2;

    const transportMode = document.getElementById('aiPlanTransport').value || 'transit';
    const audience = document.getElementById('aiPlanAudience').value || 'none';

    const resultContainer = document.getElementById('aiPlanResult');
    if (!resultContainer) return;

    const isCar = transportMode === 'car';

    const allSpots = candidateSpotsDatabase[destination] || candidateSpotsDatabase['Paris, France'];
    const mustVisitSpots = allSpots.filter(s => this.selectedMustVisitIds.has(s.id));
    const mustVisitNames = mustVisitSpots.map(s => s.name).join(', ');

    resultContainer.style.display = 'block';
    resultContainer.innerHTML = `
      <div style="background:var(--bg-card-warm); border:2.5px solid var(--border-ink); border-radius:22px; padding:2.5rem; margin-top:1.5rem; box-shadow:var(--shadow-sketch); text-align:center;">
        <div style="font-size:1.5rem; color:var(--primary-gold); font-family:var(--font-serif);" class="font-serif">
          ⚡ Generating Custom Route & Pre-loading Google Maps Route...
        </div>
        <p style="font-size:0.95rem; color:var(--text-secondary); margin-top:0.5rem;">
          Synthesizing ${escapeHtml(destination)} (${days === 0.5 ? 'Half Day' : days + ' Day(s)'}) | Must-Visit: <strong>${escapeHtml(mustVisitNames || 'AI Top Curated Spots')}</strong>
        </p>
      </div>
    `;

    if (this.config.apiKey) {
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${this.config.apiKey}`;
      const systemPrompt = `You are an expert AI Travel Curator for 0 Margin EU Travel. Respond in English.
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
        const fallbackText = this.buildCustomRouteItinerary(destination, days, transportMode, audience, mustVisitSpots);
        this.renderItineraryCard(destination, days, transportMode, audience, mustVisitSpots, fallbackText, '⚡ AI Custom Route (Real Google Maps Spots)');
      });

    } else {
      setTimeout(() => {
        const fallbackText = this.buildCustomRouteItinerary(destination, days, transportMode, audience, mustVisitSpots);
        this.renderItineraryCard(destination, days, transportMode, audience, mustVisitSpots, fallbackText, '⚡ AI Custom Route (Real Google Maps Spots)');
      }, 350);
    }
  },

  // Synthesize Custom Route with Selected Must-Visit Spots
  buildCustomRouteItinerary(destination, days, transportMode, audience, mustVisitSpots) {
    const destLower = destination.toLowerCase();
    const isCar = transportMode === 'car';

    const isParis = destLower.includes('paris');
    const isAmsterdam = destLower.includes('amsterdam');
    const isBrussels = destLower.includes('brussels') || destLower.includes('bruxelles');

    const mustNames = mustVisitSpots.map(s => s.name);

    let html = '';

    const transitNotice1 = isCar 
      ? '🚗 Drive: A14 / Ring road. Underground parking at Parking Indigo Louvre (4 min walk).' 
      : '🚆 Public Transit: Metro Line 4 Cité Station (3 min walk).';

    const transitNotice2 = isCar 
      ? '🚗 Drive: Seine River road. Direct access to Parking Indigo Musée d\'Orsay.' 
      : '🚆 Public Transit: RER C Musée d\'Orsay Station direct.';

    if (days === 0.5) {
      html += `
        <div style="background:#FFF; border:1.5px solid var(--border-ink); border-radius:14px; padding:1.25rem; margin-bottom:1.25rem;">
          <h4 style="color:var(--primary-forest); font-size:1.05rem; margin-bottom:0.5rem; font-family:var(--font-sans);">
            📍 Half Day Custom Express Route (${escapeHtml(destination)})
          </h4>
          <ul style="font-size:0.92rem; color:var(--text-primary); line-height:1.85; padding-left:1.2rem;">
            <li><strong>09:00 AM — Must-Visit Landmark:</strong> ${mustNames[0] ? this.createMapsLink(mustNames[0].split(' (')[0], destination.split(',')[0]) : (isParis ? this.createMapsLink('Sainte-Chapelle', 'Paris', '★4.8') : this.createMapsLink('Rijksmuseum', 'Amsterdam', '★4.7'))} (${transitNotice1}).</li>
            <li><strong>11:30 AM — Signature Bakery & Café:</strong> ${mustNames[1] ? this.createMapsLink(mustNames[1].split(' (')[0], destination.split(',')[0]) : (isParis ? this.createMapsLink('Marché des Enfants Rouges', 'Paris', '★4.5') : this.createMapsLink('Van Stapele Koekmakerij', 'Amsterdam', '★4.8'))}.</li>
            <li><strong>12:30 PM — Recommended Dining:</strong> ${isParis ? this.createMapsLink('Le Petit Marché', 'Paris', '★4.6') + ' (Duck confit €18–€26)' : isAmsterdam ? this.createMapsLink('Café de Klos', 'Amsterdam', '★4.6') + ' (Smoked ribs €18–€26)' : this.createMapsLink('Fin de Siècle', 'Brussels', '★4.5')}.</li>
          </ul>
        </div>
      `;
    } else {
      // DAY 1
      html += `
        <div style="background:#FFF; border:1.5px solid var(--border-ink); border-radius:14px; padding:1.25rem; margin-bottom:1.25rem;">
          <h4 style="color:var(--primary-forest); font-size:1.05rem; margin-bottom:0.5rem; font-family:var(--font-sans);">
            📍 Day 1: ${escapeHtml(destination)} Historic Center & Selected Spots
          </h4>
          <ul style="font-size:0.92rem; color:var(--text-primary); line-height:1.85; padding-left:1.2rem;">
            <li><strong>09:00 AM — Morning Landmark:</strong> ${mustNames[0] ? this.createMapsLink(mustNames[0].split(' (')[0], destination.split(',')[0]) : (isParis ? this.createMapsLink('Sainte-Chapelle', 'Paris', '★4.8') : this.createMapsLink('Rijksmuseum', 'Amsterdam', '★4.7'))} (${transitNotice1}).</li>
            <li><strong>11:30 AM — Signature Bakery:</strong> ${mustNames[1] ? this.createMapsLink(mustNames[1].split(' (')[0], destination.split(',')[0]) : (isParis ? this.createMapsLink('Marché des Enfants Rouges', 'Paris', '★4.5') : this.createMapsLink('Van Stapele Koekmakerij', 'Amsterdam', '★4.8'))}.</li>
            <li><strong>12:30 PM — Day 1 Dining:</strong> ${isParis ? this.createMapsLink('Le Petit Marché', 'Paris', '★4.6') + ' (Le Marais duck confit €18–€26)' : isAmsterdam ? this.createMapsLink('Café de Klos', 'Amsterdam', '★4.6') + ' (Smoked ribs €18–€26)' : this.createMapsLink('Fin de Siècle', 'Brussels', '★4.5')}.</li>
            <li><strong>03:00 PM — Afternoon Spot:</strong> ${mustNames[2] ? this.createMapsLink(mustNames[2].split(' (')[0], destination.split(',')[0]) : (isParis ? this.createMapsLink('Palais-Royal Courtyard', 'Paris', '★4.7') : this.createMapsLink('Nine Streets', 'Amsterdam', '★4.8'))}.</li>
            <li><strong>07:00 PM — Evening Walk:</strong> ${isParis ? this.createMapsLink('Pont des Arts', 'Paris', '★4.7') : 'Historic promenade walk'}.</li>
          </ul>
        </div>
      `;

      // DAY 2
      if (days >= 2) {
        html += `
          <div style="background:#FFF; border:1.5px solid var(--border-ink); border-radius:14px; padding:1.25rem; margin-bottom:1.25rem;">
            <h4 style="color:var(--primary-wood); font-size:1.05rem; margin-bottom:0.5rem; font-family:var(--font-sans);">
              📍 Day 2: 【100% Unique Venues】 Musée d'Orsay & Montmartre
            </h4>
            <ul style="font-size:0.92rem; color:var(--text-primary); line-height:1.85; padding-left:1.2rem;">
              <li><strong>09:00 AM — Day 2 Landmark:</strong> ${mustNames[3] ? this.createMapsLink(mustNames[3].split(' (')[0], destination.split(',')[0]) : (isParis ? this.createMapsLink("Musée d'Orsay", "Musée d Orsay Paris", '★4.8') : this.createMapsLink('Van Gogh Museum', 'Amsterdam', '★4.8'))} (${transitNotice2}).</li>
              <li><strong>11:30 AM — Day 2 Pastry:</strong> ${mustNames[4] ? this.createMapsLink(mustNames[4].split(' (')[0], destination.split(',')[0]) : (isParis ? this.createMapsLink('Cédric Grolet Le Meurice', 'Paris', '★4.6') : this.createMapsLink('Winkel 43', 'Amsterdam', '★4.6'))}.</li>
              <li><strong>12:30 PM — Day 2 Dining:</strong> ${isParis ? this.createMapsLink('Le Train Bleu', 'Paris', '★4.5') + ' or ' + this.createMapsLink('Chez Janou', 'Paris', '★4.5') : isAmsterdam ? this.createMapsLink('Foodhallen Amsterdam', 'Amsterdam', '★4.5') : this.createMapsLink('Chez Léon', 'Brussels', '★4.6')}.</li>
              <li><strong>03:00 PM — Day 2 Afternoon Spot:</strong> ${mustNames[5] ? this.createMapsLink(mustNames[5].split(' (')[0], destination.split(',')[0]) : (isParis ? this.createMapsLink('Sacré-Cœur Basilica', 'Paris', '★4.7') : this.createMapsLink('Zaanse Schans Windmills', 'Amsterdam', '★4.6'))}.</li>
              <li><strong>07:00 PM — Farewell Walk:</strong> Relaxing evening promenade.</li>
            </ul>
          </div>
        `;
      }
    }

    return html;
  },

  renderItineraryCard(destination, days, transportMode, audience, mustVisitSpots, itineraryHtml, engineTag) {
    const resultContainer = document.getElementById('aiPlanResult');
    if (!resultContainer) return;

    const isCar = transportMode === 'car';

    let venueNames = [];
    if (mustVisitSpots && mustVisitSpots.length > 0) {
      venueNames = mustVisitSpots.map(s => s.name.split(' (')[0].trim());
    }

    if (venueNames.length === 0) {
      const destLower = destination.toLowerCase();
      if (destLower.includes('paris')) {
        venueNames = ['Sainte-Chapelle', 'Marché des Enfants Rouges', 'Le Petit Marché', 'Palais-Royal Courtyard', 'Pont des Arts'];
      } else if (destLower.includes('amsterdam')) {
        venueNames = ['Rijksmuseum', 'Van Stapele Koekmakerij', 'Café de Klos', 'Nine Streets', "Brouwerij 't IJ"];
      } else if (destLower.includes('brussels')) {
        venueNames = ['Grand-Place', 'Maison Dandoy', 'Fin de Siècle', 'Royal Gallery of Saint-Hubert'];
      } else {
        venueNames = ['Brandenburg Gate', 'Museum Island', "Mustafa's Gemüse Kebab", 'East Side Gallery'];
      }
    }

    const multiStopMapsHtml = this.generateMultiStopMapsLink(venueNames, destination, transportMode);

    resultContainer.innerHTML = `
      <div style="background:var(--bg-card-warm); border:2.5px solid var(--border-ink); border-radius:22px; padding:2rem; margin-top:1.5rem; box-shadow:var(--shadow-sketch); animation:fadeIn 0.3s ease;">
        
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem; margin-bottom:1.25rem;">
          <div>
            <span class="paper-tape">${engineTag}</span>
            <h3 style="font-size:1.65rem; margin-top:0.4rem; font-family:var(--font-serif);">
              ${escapeHtml(destination)} — ${days === 0.5 ? 'Half Day' : days + ' Day(s)'} Custom Route
            </h3>
          </div>
          <span class="seed-points-badge">${isCar ? '🚗 Car Mode with Parking' : '轨 Public Transit Mode'}</span>
        </div>

        <!-- MASTER MULTI-STOP GOOGLE MAPS ROUTE BUTTON -->
        ${multiStopMapsHtml}

        <!-- Single Spot Live Links Instruction Box -->
        <div style="background:#EFF6FF; border:1.5px solid #3B82F6; border-radius:12px; padding:0.85rem 1.25rem; margin-bottom:1.5rem; font-size:0.85rem; color:#1E40AF; display:flex; align-items:center; gap:0.5rem;">
          <span style="font-size:1.2rem;">🗺️</span>
          <span><strong>Pro-Tip:</strong> Tap individual venue buttons (e.g., <strong>📍 Sainte-Chapelle ↗</strong>) to view live operating hours, recent photos, and real-time reviews on Google Maps!</span>
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
