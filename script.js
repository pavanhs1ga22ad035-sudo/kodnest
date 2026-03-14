const profileToggle = document.getElementById('profileToggle');
const mobileProfileMenu = document.getElementById('mobileProfileMenu');
const playerCard = document.getElementById('videoPlayerCard');
const coursePlayer = document.getElementById('coursePlayer');
const videoTitle = document.getElementById('videoTitle');
const videoMeta = document.getElementById('videoMeta');
const closePlayer = document.getElementById('closePlayer');

let courses = [];

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
      (session) => `
      <article class="session-item ${session.accent}">
        <div class="session-top">
          <strong>${session.title}</strong>
          <span class="badge">${session.mode}</span>
        </div>
        <p class="session-meta">${session.mentor} • ${session.date} • ${session.time}</p>
        <div class="progress-track"><div class="progress" style="width:${session.progress}%"></div></div>
      </article>
    `
    )
    .join('');
}

function renderPaths(paths) {
  const container = document.getElementById('learningPaths');
  container.innerHTML = paths
    .map(
      (path) => `
      <article class="path-item">
        <h4>${path.name}</h4>
        <p>${path.modulesDone}/${path.totalModules} modules • ${path.level}</p>
      </article>
    `
    )
    .join('');
}

function renderTasks(tasks) {
  const container = document.getElementById('taskList');
  container.innerHTML = tasks
    .map(
      (task) => `
      <li class="task-item">
        <h4>${task.title}</h4>
        <p>Due: ${task.due}</p>
        ${priorityBadge(task.priority)}
      </li>
    `
    )
    .join('');
}

function renderAnnouncements(items) {
  const container = document.getElementById('announcements');
  container.innerHTML = items
    .map(
      (item) => `
      <article class="announcement-item">
        <h4>${item.title}</h4>
        <p>${item.description}</p>
        <span class="badge">${item.tag}</span>
      </article>
    `
    )
    .join('');
}

function renderLeaderboard(rows) {
  const container = document.getElementById('leaderboard');
  container.innerHTML = rows
    .map(
      (row) => `
      <li>
        <span>#${row.rank} ${row.name}</span>
        <small>${row.points} XP</small>
      </li>
    `
    )
    .join('');
}

function renderCourses(list) {
  const container = document.getElementById('courseGrid');
  container.innerHTML = list
    .map(
      (course) => `
      <article class="course-item">
        <h4>${course.title}</h4>
        <p>${course.description}</p>
        <div class="course-meta">
          <span>${course.level}</span>
          <span>${course.duration}</span>
          <span>${course.lessons} lessons</span>
        </div>
        <button class="btn btn-primary play-btn" data-course-id="${course.id}">▶ Play Class</button>
      </article>
    `
    )
    .join('');

  container.querySelectorAll('.play-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const selected = courses.find((course) => course.id === button.dataset.courseId);
      if (selected) {
        openPlayer(selected);
      }
    });
  });
}

function openPlayer(course) {
  videoTitle.textContent = course.title;
  videoMeta.textContent = `${course.mentor} • ${course.level} • ${course.duration} • ${course.lessons} lessons`;
  coursePlayer.src = `https://www.youtube.com/embed/${course.youtubeId}?autoplay=1&rel=0`;
  playerCard.classList.remove('hidden');
  playerCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function closeVideoPlayer() {
  coursePlayer.src = '';
  playerCard.classList.add('hidden');
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
  const [profileRes, dashboardRes, coursesRes] = await Promise.all([
    fetch('/api/profile'),
    fetch('/api/dashboard'),
    fetch('/api/courses')
  ]);

  if (!profileRes.ok || !dashboardRes.ok || !coursesRes.ok) {
    throw new Error('Failed to load LMS data');
  }

  const profile = await profileRes.json();
  const dashboard = await dashboardRes.json();
  courses = await coursesRes.json();

  renderProfile(profile);
  renderHero(dashboard.hero);
  renderQuickStats(dashboard.quickStats);
  renderSessions(dashboard.liveSessions);
  renderPaths(dashboard.learningPaths);
  renderCourses(courses);
  renderTasks(dashboard.tasks);
  renderAnnouncements(dashboard.announcements);
  renderLeaderboard(dashboard.leaderboard);

  if (courses.length > 0) {
    openPlayer(courses[0]);
  }
}

profileToggle.addEventListener('click', (event) => {
  event.stopPropagation();
  mobileProfileMenu.classList.toggle('hidden');
});

document.addEventListener('click', (event) => {
  if (!mobileProfileMenu.contains(event.target) && event.target !== profileToggle) {
    mobileProfileMenu.classList.add('hidden');
  }
});

closePlayer.addEventListener('click', closeVideoPlayer);

loadDashboard().catch((error) => {
  console.error(error);
});
