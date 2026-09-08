const speakers = [
  { name: "Raju Kumar Matcha", initials: "RM", role: "Senior Software QA Engineer, Suse Software Solutions", topic: "15+ years in QA engineering", photo: "photos/speakers/raju-kumar-matcha.jpg", linkedin: "https://www.linkedin.com/in/rajukumar-macha/" },
  { name: "Nalinikanth Meesala", initials: "NM", role: "Speaker", topic: "QA + AI + Security", photo: "photos/speakers/nalinikanth-meesala.jpg" },
  { name: "Saravanan Paramasivan", initials: "SP", role: "Speaker", topic: "General session", photo: "photos/speakers/saravanan-paramasivan.jpg", linkedin: "https://www.linkedin.com/in/saravananp-qatechlead/" },
  { name: "Bharath Yarra", initials: "BY", role: "Speaker", topic: "General session", photo: "photos/speakers/bharath-yarra.jpg", linkedin: "https://www.linkedin.com/in/bharath-yarra-37898a205/" },
  { name: "Anirudh Konduri", initials: "AK", role: "Lead QA, FINT Solutions", topic: "10+ years of experience", photo: "photos/speakers/anirudh-konduri.jpg", linkedin: "https://www.linkedin.com/in/anirudh-konduri/" },
  { name: "Poornima Rengamurthy Angiya", initials: "PR", role: "Speaker", topic: "FINT Internal Tooling", photo: "photos/speakers/poornima-rengamurthy-angiya.jpg", linkedin: "https://www.linkedin.com/in/poornima-r-angiya-3197b526/" },
  { name: "Jayakumar Jayaraman", initials: "JJ", role: "Workshop Lead", topic: "Hands-on: MobileWright", photo: "photos/speakers/jayakumar-jayaraman.jpg", linkedin: "https://www.linkedin.com/in/jayakumar-j-2b5b5b20b/" },
  { name: "Hariharan Arumugam", initials: "HA", role: "Workshop Lead", topic: "Hands-on: MobileWright", photo: "photos/speakers/hariharan-arumugam.jpg", linkedin: "https://www.linkedin.com/in/hariharana1207/" }
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
  const linkedinIcon = '<svg class="linkedin-icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.1 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.83v2.05h.05c.53-1 1.84-2.05 3.79-2.05 4.06 0 4.81 2.67 4.81 6.14V23h-4v-6.87c0-1.64-.03-3.75-2.28-3.75-2.29 0-2.64 1.79-2.64 3.63V23h-4V8z"/></svg>';
  grid.innerHTML = speakers.map(s => `
    <div class="person-card">
      <div class="avatar">${avatarMarkup(s.photo, s.initials)}</div>
      <h4>${s.name}</h4>
      <div class="role">${s.role}</div>
      <div class="topic">${s.topic}</div>
      ${s.linkedin ? `<a class="linkedin-link" href="${s.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${linkedinIcon}</a>` : ''}
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
