const themeToggle = document.getElementById('themeToggle');
const currentTheme = localStorage.getItem('theme') || 'dark';
const root = document.documentElement;

const applyTheme = (theme) => {
  root.setAttribute('data-theme', theme);
  themeToggle.textContent = theme === 'light' ? '🌙' : '☀️';
};

applyTheme(currentTheme);

themeToggle.addEventListener('click', () => {
  const nextTheme = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  applyTheme(nextTheme);
  localStorage.setItem('theme', nextTheme);
});
