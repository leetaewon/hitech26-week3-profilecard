document.addEventListener('DOMContentLoaded', () => {
  const contactBtn = document.getElementById('contactBtn');

  // 연락하기 버튼 클릭 인터랙션
  contactBtn.addEventListener('click', () => {
    const email = 'user@example.com';
    
    // 클립보드 복사 API
    navigator.clipboard.writeText(email)
      .then(() => {
        const originalText = contactBtn.textContent;
        contactBtn.textContent = '이메일 주소 복사 완료!';
        contactBtn.style.background = '#28a745';

        setTimeout(() => {
          contactBtn.textContent = originalText;
          contactBtn.style.background = '';
        }, 2000);
      })
      .catch(() => {
        alert('이메일: ' + email);
      });
  });
});