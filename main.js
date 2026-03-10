function toggleTheme() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const newTheme = isDark ? 'light' : 'dark';

  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);

  document.getElementById('theme-icon').textContent = newTheme === 'dark' ? '☀️' : '🌙';
  document.getElementById('theme-label').textContent = newTheme === 'dark' ? '화이트 모드' : '다크 모드';
}

// 저장된 테마 또는 시스템 설정 적용
(function () {
  const saved = localStorage.getItem('theme');
  const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const theme = saved || preferred;

  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.getElementById('theme-icon').textContent = '☀️';
    document.getElementById('theme-label').textContent = '화이트 모드';
  }
})();
