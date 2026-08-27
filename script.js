document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  const shareBtn = document.getElementById('shareBtn');

  // 1. 로컬스토리지 또는 시스템 테마 설정 불러오기
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.body.classList.add('dark-mode');
    updateThemeIcon(true);
  } else {
    document.body.classList.remove('dark-mode');
    updateThemeIcon(false);
  }

  // 2. 테마 전환 버튼 클릭 이벤트
  themeToggleBtn.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');
    updateThemeIcon(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  function updateThemeIcon(isDark) {
    if (isDark) {
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
    } else {
      themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');
    }
  }

  // 3. 상단 공유 버튼
  if (shareBtn) {
    shareBtn.addEventListener('click', async () => {
      if (navigator.share) {
        try {
          await navigator.share({
            title: '김하늘 프로필',
            text: '김하늘의 프로필 링크 및 포트폴리오를 확인해보세요.',
            url: window.location.href,
          });
        } catch (err) {
          console.log('공유 취소:', err);
        }
      } else {
        navigator.clipboard.writeText(window.location.href).then(() => {
          alert('프로필 링크가 클립보드에 복사되었습니다!');
        });
      }
    });
  }
});