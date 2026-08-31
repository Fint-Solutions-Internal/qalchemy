const speakers = [
  { name: "Raju Kumar Matcha", initials: "RM", role: "Speaker", topic: "QA + AI + Infra", photo: "photos/speakers/raju-kumar-matcha.jpg" },
  { name: "Nalinikanth Meesala", initials: "NM", role: "Speaker", topic: "QA + AI + Security", photo: "photos/speakers/nalinikanth-meesala.jpg" },
  { name: "Saravanan & Bharath", initials: "S&B", role: "Speakers", topic: "General session", photo: "photos/speakers/saravanan-bharath.jpg" },
  { name: "Anirudh & Poornima", initials: "A&P", role: "Speakers", topic: "FINT Internal Tooling", photo: "photos/speakers/anirudh-poornima.jpg" },
  { name: "Jayakumar & Hariharan", initials: "J&H", role: "Workshop Leads", topic: "Hands-on: MobileWright", photo: "photos/speakers/jayakumar-hariharan.jpg" }
];

const volunteers = [
  "Syam", "Supriya", "Dinesh", "Rajasheker", "Shravan", "Anurag", "Raviteja",
  "Naveen", "Lakshman", "Bharath", "Manoji", "Sushma", "Praveen"
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
    <div class="vol-chip">
      <div class="vol-avatar">${avatarMarkup(v.photo, v.name.slice(0, 2).toUpperCase())}</div>
      <span>${v.name}</span>
    </div>
  `).join('');
}

renderSpeakers();
renderVolunteers();
