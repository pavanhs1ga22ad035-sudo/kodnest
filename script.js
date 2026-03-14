const profileToggle = document.getElementById('profileToggle');
const profileMenu = document.getElementById('profileMenu');

function createCourseCard(course, isSelfPaced = false) {
  const statusClass = isSelfPaced ? 'status alt' : 'status';
  return `
    <article class="course-card ${course.color}">
      <div class="card-main">
        <div class="title-row">
          <div class="letter">${course.code}</div>
          <div>
            <h4>${course.title}</h4>
            <p>Mentor: ${course.mentor}</p>
          </div>
          <span class="${statusClass}">${isSelfPaced ? course.status : `✓ ${course.status}`}</span>
        </div>
        ${
          isSelfPaced
            ? ''
            : `<div class="timing"><span>Class Time</span><span>${course.time}</span></div>`
        }
      </div>
      ${
        isSelfPaced
          ? ''
          : '<div class="card-footer"><span>Get Subscription</span><div>✎ ↻ 🎥</div></div>'
      }
    </article>
  `;
}

async function loadData() {
  const [profileRes, dashboardRes] = await Promise.all([
    fetch('/api/profile'),
    fetch('/api/dashboard')
  ]);

  if (!profileRes.ok || !dashboardRes.ok) {
    throw new Error('Unable to load dashboard data');
  }

  const profile = await profileRes.json();
  const dashboard = await dashboardRes.json();

  document.getElementById('profileAvatar').textContent = profile.avatar;
  document.getElementById('profileName').textContent = profile.name;
  document.getElementById('profileBatch').textContent = profile.batch;
  document.getElementById('profileStatus').textContent = profile.status;
  document.getElementById('profileLinks').innerHTML = profile.menu
    .map((item) => `<li>${item}</li>`)
    .join('');

  document.getElementById('heroTagline').textContent = dashboard.hero.tagline;
  document.getElementById('heroTitle').textContent = dashboard.hero.title;
  document.getElementById('heroSubtitle').textContent = dashboard.hero.subtitle;
  document.getElementById('assistantTitle').textContent = dashboard.hero.assistantTitle;
  document.getElementById('assistantSubtitle').textContent = dashboard.hero.assistantSubtitle;
  document.getElementById('heroChips').innerHTML = dashboard.hero.chips
    .map((chip) => `<span>${chip}</span>`)
    .join('');

  document.getElementById('liveSessions').innerHTML = dashboard.liveSessions
    .map((course) => createCourseCard(course))
    .join('');

  document.getElementById('selfPacedCard').innerHTML = createCourseCard(dashboard.selfPaced, true);
}

profileToggle.addEventListener('click', (event) => {
  event.stopPropagation();
  profileMenu.classList.toggle('hidden');
});

document.addEventListener('click', (event) => {
  if (!profileMenu.contains(event.target)) {
    profileMenu.classList.add('hidden');
  }
});

loadData().catch((error) => {
  console.error(error);
});
