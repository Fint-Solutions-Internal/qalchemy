const speakers = [
  { name: "Raju Kumar Matcha", initials: "RM", role: "Speaker", topic: "QA + AI + Infra", photo: "photos/speakers/raju-kumar-matcha.jpg" },
  { name: "Nalinikanth Meesala", initials: "NM", role: "Speaker", topic: "QA + AI + Security", photo: "photos/speakers/nalinikanth-meesala.jpg" },
  { name: "Saravanan & Bharath", initials: "S&B", role: "Speakers", topic: "General session", photo: "photos/speakers/saravanan-bharath.jpg" },
  { name: "Anirudh & Poornima", initials: "A&P", role: "Speakers", topic: "FINT Internal Tooling", photo: "photos/speakers/anirudh-poornima.jpg" },
  { name: "Jayakumar & Hariharan", initials: "J&H", role: "Workshop Leads", topic: "Hands-on: MobileWright", photo: "photos/speakers/jayakumar-hariharan.jpg" }
];

const volunteers = [
  { slug: "anurag", name: "Sai Anurag Rao Gandra" },
  { slug: "dinesh", name: "Dinesh Gattu" },
  { slug: "lakshman", name: "Lakshmana Vissarapu" },
  { slug: "manoji", name: "Manoji Konduru" },
  { slug: "naveen", name: "Naveen Reddy Mandati" },
  { slug: "praveen", name: "Praveen Lavisetti" },
  { slug: "rajasheker", name: "B Rajasheker Reddy" },
  { slug: "raviteja", name: "Raviteja Nalam" },
  { slug: "shravan", name: "Shravan Kumar Matla" },
  { slug: "supriya", name: "Supriya Mummadisetti" },
  { slug: "sushma", name: "Sushma Vejendla" },
  { slug: "syam", name: "Syamkumar Vanapalli" }
].map(v => ({
  name: v.name,
  photo: `photos/volunteers/${v.slug}.jpg`
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
  const units = document.getElementById('countdown-units');
  const label = document.querySelector('.countdown-label');
  if (!units) return;
  const eventDate = new Date('2026-10-10T09:30:00+05:30').getTime();
  const pad = n => String(n).padStart(2, '0');

  function tick() {
    const diff = eventDate - Date.now();
    if (diff <= 0) {
      if (label) label.textContent = "It's live!";
      units.style.display = 'none';
      return;
    }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    document.getElementById('cd-days').textContent = pad(d);
    document.getElementById('cd-hours').textContent = pad(h);
    document.getElementById('cd-mins').textContent = pad(m);
    document.getElementById('cd-secs').textContent = pad(s);
  }

  tick();
  setInterval(tick, 1000);
}

renderCountdown();
