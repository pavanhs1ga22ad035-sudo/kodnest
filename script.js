const profileToggle = document.getElementById('profileToggle');
const mobileProfileMenu = document.getElementById('mobileProfileMenu');

function priorityBadge(priority) {
  const color = priority === 'High' ? '#ffded8' : '#fff2ce';
  return `<span class="badge" style="background:${color}">${priority}</span>`;
}

function renderQuickStats(stats) {
  const container = document.getElementById('quickStats');
  container.innerHTML = stats
    .map(
      (item) => `
      <article class="stat-card ${item.tone}">
        <h4>${item.label}</h4>
        <p>${item.value}</p>
      </article>
    `
    )
    .join('');
}

function renderSessions(sessions) {
  const container = document.getElementById('liveSessions');
  container.innerHTML = sessions
    .map(
      (s) => `
      <article class="session-item ${s.accent}">
        <div class="session-top">
          <strong>${s.title}</strong>
          <span class="badge">${s.mode}</span>
        </div>
        <p class="session-meta">${s.mentor} • ${s.date} • ${s.time}</p>
        <div class="progress-track"><div class="progress" style="width:${s.progress}%"></div></div>
      </article>
    `
    )
    .join('');
}

function renderPaths(paths) {
  const container = document.getElementById('learningPaths');
  container.innerHTML = paths
    .map(
      (p) => `
      <article class="path-item">
        <h4>${p.name}</h4>
        <p>${p.modulesDone}/${p.totalModules} modules • ${p.level}</p>
      </article>
    `
    )
    .join('');
}

function renderTasks(tasks) {
  const container = document.getElementById('taskList');
  container.innerHTML = tasks
    .map(
      (t) => `
      <li class="task-item">
        <h4>${t.title}</h4>
        <p>Due: ${t.due}</p>
        ${priorityBadge(t.priority)}
      </li>
    `
    )
    .join('');
}

function renderAnnouncements(items) {
  const container = document.getElementById('announcements');
  container.innerHTML = items
    .map(
      (a) => `
      <article class="announcement-item">
        <h4>${a.title}</h4>
        <p>${a.description}</p>
        <span class="badge">${a.tag}</span>
      </article>
    `
    )
    .join('');
}

function renderLeaderboard(rows) {
  const container = document.getElementById('leaderboard');
  container.innerHTML = rows
    .map(
      (r) => `
      <li>
        <span>#${r.rank} ${r.name}</span>
        <small>${r.points} XP</small>
      </li>
    `
    )
    .join('');
}

function renderProfile(profile) {
  document.getElementById('profileAvatar').textContent = profile.avatar;
  document.getElementById('profileName').textContent = profile.name;
  document.getElementById('profileProgram').textContent = profile.program;
  document.getElementById('profileStatus').textContent = profile.status;
  document.getElementById('profileStreak').textContent = profile.streakDays;
  document.getElementById('profilePoints').textContent = profile.points;

  mobileProfileMenu.innerHTML = `
    <strong>${profile.name}</strong>
    <p>${profile.program}</p>
    <p>Status: ${profile.status}</p>
    <p>Streak: ${profile.streakDays} days</p>
    <p>XP: ${profile.points}</p>
  `;
}

function renderHero(hero) {
  document.getElementById('heroEyebrow').textContent = hero.eyebrow;
  document.getElementById('heroTitle').textContent = hero.title;
  document.getElementById('heroSubtitle').textContent = hero.subtitle;
  document.getElementById('heroPrimaryBtn').textContent = hero.ctaPrimary;
  document.getElementById('heroSecondaryBtn').textContent = hero.ctaSecondary;
}

async function loadDashboard() {
  const [profileRes, dashboardRes] = await Promise.all([fetch('/api/profile'), fetch('/api/dashboard')]);
  if (!profileRes.ok || !dashboardRes.ok) {
    throw new Error('Failed to load LMS data');
  }

  const profile = await profileRes.json();
  const dashboard = await dashboardRes.json();

  renderProfile(profile);
  renderHero(dashboard.hero);
  renderQuickStats(dashboard.quickStats);
  renderSessions(dashboard.liveSessions);
  renderPaths(dashboard.learningPaths);
  renderTasks(dashboard.tasks);
  renderAnnouncements(dashboard.announcements);
  renderLeaderboard(dashboard.leaderboard);
}

profileToggle.addEventListener('click', (event) => {
  event.stopPropagation();
  mobileProfileMenu.classList.toggle('hidden');
});

document.addEventListener('click', (event) => {
  if (!mobileProfileMenu.contains(event.target)) {
    mobileProfileMenu.classList.add('hidden');
  }
});

loadDashboard().catch((error) => {
  console.error(error);
});
