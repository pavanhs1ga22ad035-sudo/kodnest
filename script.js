const profileToggle = document.getElementById('profileToggle');
const profileMenu = document.getElementById('profileMenu');

profileToggle.addEventListener('click', (event) => {
  event.stopPropagation();
  profileMenu.classList.toggle('hidden');
});

document.addEventListener('click', (event) => {
  if (!profileMenu.contains(event.target)) {
    profileMenu.classList.add('hidden');
  }
});
