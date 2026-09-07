const speakers = [
  { name: "Raju Kumar Matcha", initials: "RM", role: "Speaker", topic: "QA + AI + Infra", photo: "photos/speakers/raju-kumar-matcha.jpg" },
  { name: "Nalinikanth Meesala", initials: "NM", role: "Speaker", topic: "QA + AI + Security", photo: "photos/speakers/nalinikanth-meesala.jpg" },
  { name: "Saravanan & Bharath", initials: "S&B", role: "Speakers", topic: "General session", photo: "photos/speakers/saravanan-bharath.jpg" },
  { name: "Anirudh & Poornima", initials: "A&P", role: "Speakers", topic: "FINT Internal Tooling", photo: "photos/speakers/anirudh-poornima.jpg" },
  { name: "Jayakumar & Hariharan", initials: "J&H", role: "Workshop Leads", topic: "Hands-on: MobileWright", photo: "photos/speakers/jayakumar-hariharan.jpg" }
];

const volunteers = [
  "Anurag", "Dinesh", "Lakshman", "Manoji", "Naveen", "Praveen",
  "Rajasheker", "Raviteja", "Shravan", "Supriya", "Sushma", "Syam"
].map(name => ({
  name,
  photo: `photos/volunteers/${name.toLowerCase()}.jpg`
}));

function avatarMarkup(photoPath, initials, sizeClass) {
  return `
    <img src="${photoPath}" alt="" loading="lazy"
      onerror="this.replaceWith(Object.assign(document.createElement('span'), {textContent:'${initials}'}))">
  `;
}

function renderSpeakers() {
  const grid = document.getElementById('speakers-grid');
  if (!grid) return;
  grid.innerHTML = speakers.map(s => `
    <div class="person-card">
      <div class="avatar">${avatarMarkup(s.photo, s.initials)}</div>
      <h4>${s.name}</h4>
      <div class="role">${s.role}</div>
      <div class="topic">${s.topic}</div>
    </div>
  `).join('');
}

function renderVolunteers() {
  const grid = document.getElementById('volunteers-grid');
  if (!grid) return;
  grid.innerHTML = volunteers.map(v => `
    <div class="person-card vol-card">
      <div class="avatar avatar-sm">${avatarMarkup(v.photo, v.name.slice(0, 2).toUpperCase())}</div>
      <h4>${v.name}</h4>
    </div>
  `).join('');
}

renderSpeakers();
renderVolunteers();

function renderCountdown() {
  const el = document.getElementById('countdown-bar');
  if (!el) return;
  const eventDate = new Date('2026-10-10T09:30:00+05:30').getTime();

  function tick() {
    const diff = eventDate - Date.now();
    if (diff <= 0) {
      el.textContent = "QAlchemy Expo is live!";
      return;
    }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    el.innerHTML = `QAlchemy Expo starts in <strong>${d}d ${h}h ${m}m ${s}s</strong>`;
  }

  tick();
  setInterval(tick, 1000);
}

renderCountdown();
