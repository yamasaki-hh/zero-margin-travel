/* ==========================================================================
   0 Margin Travel — Zero-Commission Local Companions Network
   Friend Introductions & Cultural Exchange (0% Platform Fee)
   ========================================================================== */

const defaultCompanions = [
  {
    id: 'comp_berlin_1',
    name: 'Lukas M.',
    city: 'Berlin',
    location: 'Berlin, Germany (Kreuzberg / Mitte)',
    role: 'Local University Fellow (Architecture Student)',
    languages: 'German, English, Basic Japanese',
    rate: 'Volunteer (Free Walk) or €15/hr (100% to Lukas)',
    bio: 'Architecture student living in Berlin for 5 years. Loves showing friends hidden coffee shops, museum island, and WWII history walks.',
    reviews: '⭐ 4.9 (24 friend walks)',
    specialty: 'Contemporary Art, Vintage Flea Markets, Local Bakeries'
  },
  {
    id: 'comp_tokyo_1',
    name: 'Kenji & Yuka',
    city: 'Tokyo',
    location: 'Tokyo & Okinawa, Japan',
    languages: 'Japanese, English, Korean',
    rate: 'Volunteer (Free Walk) or ¥2,000/hr (100% to Kenji & Yuka)',
    bio: 'Passionate about sharing authentic Okinawan history, Ryukyu cuisine, and hidden beach spots with international visitors.',
    reviews: '⭐ 4.95 (42 friend walks)',
    specialty: 'Okinawan Cuisine, Ryukyu History, Ocean Walks'
  },
  {
    id: 'comp_amsterdam_1',
    name: 'Hannah S.',
    city: 'Amsterdam',
    location: 'Amsterdam, Netherlands (Jordaan)',
    languages: 'Dutch, English, French',
    rate: 'Volunteer (Free Walk) or €18/hr (100% to Hannah)',
    bio: 'Researches urban sustainability and art history. Happy to bike together around canal loops and local organic cheese markets.',
    reviews: '⭐ 4.88 (18 friend walks)',
    specialty: 'Canal Bicycle Tours, Eco-Cafes, Museum District'
  },
  {
    id: 'comp_rome_1',
    name: 'Marco Rossi',
    city: 'Rome',
    location: 'Rome, Italy (Trastevere)',
    languages: 'Italian, English, Spanish',
    rate: 'Volunteer (Free Walk) or €15/hr (100% to Marco)',
    bio: 'Born and raised in Rome. Passionate about showing travelers crowd-free ancient ruins, authentic carbonara trattorias, and sunset viewpoints.',
    reviews: '⭐ 4.92 (31 friend walks)',
    specialty: 'Hidden Ancient Ruins, Authentic Trattorias, Espresso Spots'
  },
  {
    id: 'comp_paris_1',
    name: 'Camille Laurent',
    city: 'Paris',
    location: 'Paris, France (Le Marais)',
    languages: 'French, English, Italian',
    rate: 'Volunteer (Free Walk) or €18/hr (100% to Camille)',
    bio: 'Art history researcher and Marais resident. Happy to share secret courtyard gardens, organic wine bars, and bohemian bookshops.',
    reviews: '⭐ 4.96 (29 friend walks)',
    specialty: 'Art History, Marais Cafes, Vintage Fashion'
  },
  {
    id: 'comp_kyoto_1',
    name: 'Sora & Mai',
    city: 'Kyoto',
    location: 'Kyoto, Japan (Arashiyama / Gion)',
    languages: 'Japanese, English',
    rate: 'Volunteer (Free Walk) or ¥2,000/hr (100% to Sora & Mai)',
    bio: 'University students born in Kyoto. Showing international travelers quiet early-morning temple gardens and traditional matcha spots.',
    reviews: '⭐ 4.94 (36 friend walks)',
    specialty: 'Traditional Matcha, Early Temple Walks, Bamboo Groves'
  }
];

function getStoredCompanions() {
  try {
    const custom = JSON.parse(localStorage.getItem('zmt_local_companions') || '[]');
    return [...custom, ...defaultCompanions];
  } catch (e) {
    return defaultCompanions;
  }
}

const companionChatLogs = JSON.parse(localStorage.getItem('zmt_travel_chats') || '{}');

function saveCompanionChatLogs() {
  try {
    localStorage.setItem('zmt_travel_chats', JSON.stringify(companionChatLogs));
  } catch (e) {
    console.warn('Chat save error:', e);
  }
}

// Render Local Companions Grid with Dynamic Filtering
function renderLocalCompanions(selectedCity = 'all') {
  const container = document.getElementById('companionsGrid');
  if (!container) return;

  const allCompanions = getStoredCompanions();
  const filtered = selectedCity === 'all' 
    ? allCompanions 
    : allCompanions.filter(c => (c.city && c.city.toLowerCase() === selectedCity.toLowerCase()) || (c.location && c.location.toLowerCase().includes(selectedCity.toLowerCase())));

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align:center; padding:3rem; background:var(--bg-card-warm); border:2px dashed var(--border-ink); border-radius:18px;">
        <h4 style="font-size:1.2rem; color:var(--primary-wood);">登録されている仲間が見つかりませんでした</h4>
        <p style="font-size:0.9rem; color:var(--text-secondary); margin-top:0.4rem;">
          まだ ${escapeHtml(selectedCity)} に登録しているローカル仲間がいません。あなたが最初のローカル仲間として登録しませんか？
        </p>
        <button class="btn btn-emerald" style="margin-top:1rem;" onclick="openRegisterCompanionModal()">
          👥 ${escapeHtml(selectedCity)} のローカル仲間として登録する (0% Margin)
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(c => `
    <div class="card" style="display:flex; flex-direction:column; justify-content:space-between;">
      <div>
        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.75rem;">
          <span class="verified-badge">🔵 Verified Companion</span>
          <span style="font-size:0.8rem; font-weight:700; color:#047857;">${c.reviews}</span>
        </div>
        
        <h3 style="font-size:1.2rem; margin-bottom:0.25rem; font-family:var(--font-sans);">${escapeHtml(c.name)}</h3>
        <p style="font-size:0.8rem; color:var(--primary-wood); font-weight:600; margin-bottom:0.5rem;">${escapeHtml(c.role)}</p>
        <p style="font-size:0.85rem; color:#57534E; margin-bottom:0.75rem;">📍 ${escapeHtml(c.location)} | 🗣️ ${escapeHtml(c.languages)}</p>
        
        <p style="font-size:0.9rem; color:#292524; line-height:1.55; margin-bottom:0.85rem;">${escapeHtml(c.bio)}</p>
        
        <div style="background:#FFFDF9; border:1px solid #D6C7B2; border-radius:10px; padding:0.65rem; font-size:0.8rem; color:#78350F; margin-bottom:1rem;">
          <strong>🎯 Specialties:</strong> ${escapeHtml(c.specialty)}<br>
          <strong style="color:#047857;">💰 Rate Policy:</strong> ${escapeHtml(c.rate)} <em>(0% Platform Commission)</em>
        </div>
      </div>

      <div>
        <button class="btn btn-primary" style="width:100%; justify-content:center; padding:0.65rem; font-size:0.9rem;" onclick="openCompanionChatModal('${c.id}', '${escapeHtml(c.name)}')">
          💬 ${escapeHtml(c.name.split(' ')[0])} さんにダイレクトメッセージを送る
        </button>
      </div>
    </div>
  `).join('');
}

function filterCompanionsByCity(city) {
  document.querySelectorAll('.filter-city-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.city === city);
  });
  renderLocalCompanions(city);
}

// Companion Registration Handlers (0% Fee)
function openRegisterCompanionModal() {
  const modal = document.getElementById('registerCompanionModal');
  if (modal) modal.classList.add('active');
}

function closeRegisterCompanionModal() {
  const modal = document.getElementById('registerCompanionModal');
  if (modal) modal.classList.remove('active');
}

function submitCompanionRegistration(event) {
  event.preventDefault();
  const name = document.getElementById('compRegName').value.trim();
  const city = document.getElementById('compRegCity').value.trim();
  const specialty = document.getElementById('compRegSpecialty').value.trim();
  const bio = document.getElementById('compRegBio').value.trim();

  if (!name || !city) {
    alert('お名前と都市を入力してください。');
    return;
  }

  const newCompanion = {
    id: 'custom_' + Date.now(),
    name: name,
    city: city,
    role: '新規登録ローカル仲間 (0% Margin)',
    location: `${city}`,
    languages: '日本語, English',
    rate: 'ボランティア散歩 / 適正謝礼（100%あなたへ）',
    bio: bio || `地元の ${city} の魅力を旅行者に直接シェアしたいローカルメンバーです。`,
    reviews: '⭐ 新規登録メンバー',
    specialty: specialty || 'ローカルフード、穴場散策'
  };

  try {
    const existing = JSON.parse(localStorage.getItem('zmt_local_companions') || '[]');
    existing.unshift(newCompanion);
    localStorage.setItem('zmt_local_companions', JSON.stringify(existing));
  } catch (e) {
    console.warn('LocalStorage save error:', e);
  }

  renderLocalCompanions();
  closeRegisterCompanionModal();

  alert(`登録が完了しました！\n${name}さん、0 Margin Travelのローカル仲間として登録されました。手数料は一切かかりません。`);
}

// Direct In-Site Messaging Handlers
function openCompanionChatModal(companionId, companionName) {
  const modal = document.getElementById('companionChatModal');
  if (!modal) return;

  document.getElementById('companionChatTitle').innerText = `💬 ${companionName} さんとのダイレクトチャット`;
  document.getElementById('companionChatId').value = companionId;

  renderCompanionChatMessages(companionId, companionName);
  modal.classList.add('active');
}

function closeCompanionChatModal() {
  const modal = document.getElementById('companionChatModal');
  if (modal) modal.classList.remove('active');
}

function renderCompanionChatMessages(companionId, companionName) {
  const chatBox = document.getElementById('companionChatMessages');
  if (!chatBox) return;

  if (!companionChatLogs[companionId]) {
    companionChatLogs[companionId] = [
      { sender: companionName, text: `こんにちは！${companionName}です。地元の穴場スポットやおすすめの散歩コースなど、気軽にご質問ください！`, time: 'Just now' }
    ];
    saveCompanionChatLogs();
  }

  chatBox.innerHTML = companionChatLogs[companionId].map(m => `
    <div style="margin-bottom:0.85rem; text-align: ${m.sender === 'You' ? 'right' : 'left'};">
      <div style="display:inline-block; max-width:82%; padding:0.75rem 1rem; border-radius:14px; font-size:0.9rem; border:1.5px solid var(--border-ink); background: ${m.sender === 'You' ? 'var(--primary-gold)' : 'var(--bg-card-warm)'}; color: ${m.sender === 'You' ? '#FFF' : 'var(--text-primary)'}; text-align:left;">
        <strong style="font-size:0.8rem; display:block; margin-bottom:0.25rem; opacity:0.85;">${escapeHtml(m.sender)}</strong>
        ${escapeHtml(m.text)}
      </div>
      <span style="display:block; font-size:0.7rem; color:#78716C; margin-top:0.2rem;">${m.time}</span>
    </div>
  `).join('');

  chatBox.scrollTop = chatBox.scrollHeight;
}

function sendCompanionChatMessage(event) {
  event.preventDefault();
  const input = document.getElementById('companionChatInput');
  const text = input.value.trim();
  const companionId = document.getElementById('companionChatId').value;
  const companion = getStoredCompanions().find(c => String(c.id) === String(companionId));

  if (!text || !companion) return;

  if (!companionChatLogs[companionId]) companionChatLogs[companionId] = [];
  companionChatLogs[companionId].push({ sender: 'You', text: text, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) });
  saveCompanionChatLogs();

  input.value = '';
  renderCompanionChatMessages(companionId, companion.name);

  // Simulated Instant Companion Reply
  setTimeout(() => {
    companionChatLogs[companionId].push({
      sender: companion.name,
      text: `メッセージありがとうございます！${companion.location.split(',')[0]}での交流を楽しみにしております！詳細な待ち合わせやカフェについてお気軽にご連絡ください。`,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });
    saveCompanionChatLogs();
    renderCompanionChatMessages(companionId, companion.name);
  }, 500);
}

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str).replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[m]));
}

window.addEventListener('DOMContentLoaded', () => {
  renderLocalCompanions();
});
