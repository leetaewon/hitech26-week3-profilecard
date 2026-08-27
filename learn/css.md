## 2. CSS 설명서 (`style.css`)

CSS는 HTML 뼈대에 **색상, 레이아웃, 반응형 디자인, 애니메이션 효과**를 입힙니다.

* **CSS 변수와 테마 시스템 (`:root` 및 `body.dark-mode`)**

* `--body-bg`, `--card-bg-gradient`, `--text-main` 등의 변수를 정의하여 색상 테마를 한곳에서 관리합니다.


* `body`에 `.dark-mode` 클래스가 붙으면 변수 값이 다크톤 보라색으로 일괄 변경되어 손쉽게 다크모드가 적용됩니다.




* **중앙 정렬 레이아웃 (`body`)**

* `display: flex`, `justify-content: center`, `align-items: center`를 사용해 화면 정중앙에 프로필 카드를 띄웁니다.




* **카드 디자인 (`.profile-container`)**

* 사선형 그라데이션(`linear-gradient`)과 둥근 모서리(`border-radius: 36px`), 부드러운 그림자(`box-shadow`)로 입체감을 줍니다.


* `max-width: 420px`를 주어 PC 화면에서도 스마트폰 앱을 보는 듯한 비율을 유지합니다.




* **버튼 및 인터랙션 디자인 (`.link-card`, `.icon-circle-btn`)**

* `.link-card`에 `backdrop-filter: blur(8px)`를 주어 반투명한 글래스모피즘(Glassmorphism) 효과를 냅니다.


* `:hover` 가상 클래스를 이용해 마우스를 올렸을 때 살짝 떠오르는(`transform: translateY(-2px)`) 애니메이션을 부여합니다.




* **반응형 미디어 쿼리 (`@media (max-width: 360px)`)**

* 가로 폭이 360px 이하인 초소형 스마트폰에서도 패딩과 폰트 크기를 줄여 UI가 깨지지 않도록 자동 조절합니다.