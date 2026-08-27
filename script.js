document.addEventListener('DOMContentLoaded', () => {
  const shareBtn = document.getElementById('shareBtn');
  const bellBtn = document.getElementById('bellBtn');

  // 상단 공유 버튼 (Web Share API 지원 시 모바일 공유창 팝업)
  if (shareBtn) {
    shareBtn.addEventListener('click', async () => {
      if (navigator.share) {
        try {
          await navigator.share({
            title: '김하늘 프로필',
            text: '김하늘의 프로필 링크 및 최신 포트폴리오를 확인해보세요.',
            url: window.location.href,
          });
        } catch (err) {
          console.log('공유 취소 또는 에러:', err);
        }
      } else {
        // 클립보드 링크 복사
        navigator.clipboard.writeText(window.location.href).then(() => {
          alert('현재 프로필 링크가 클립보드에 복사되었습니다!');
        });
      }
    });
  }

  // 알림 버튼 클릭 인터랙션
  if (bellBtn) {
    bellBtn.addEventListener('click', () => {
      alert('새 소식 알림이 설정되었습니다.');
    });
  }
});