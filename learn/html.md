## 1. HTML 설명서 (`index.html`)

HTML은 웹 페이지의 뼈대(구조)를 담당합니다. 이 코드는 모바일 화면에 최적화된 링크트리 스타일의 프로필 카드를 구성하고 있습니다.

* **`<head>` 영역 (문서 기본 설정)**

* `<meta name="viewport" ...>`: 스마트폰, 태블릿 등 모바일 기기 화면 비율에 맞게 크기를 자동 조절합니다.


* `Font Awesome CDN`: 외부 아이콘 폰트 라이브러리를 불러와 깃허브, 달, 공유 아이콘(`<i class="fa-...">`)을 쉽게 표시합니다.


* `<link rel="stylesheet" href="style.css">`: 디자인을 담당하는 CSS 파일을 연결합니다.




* **`<main class="profile-container">` (메인 카드 프레임)**

* 전체 프로필 요소를 감싸는 중심 컨테이너입니다.




* **`<header class="top-nav">` (상단 네비게이션)**

* 공유하기 버튼(`id="shareBtn"`)과 다크모드 전환 버튼(`id="themeToggleBtn"`)이 위치합니다. 자바스크립트에서 이 `id`를 통해 버튼 클릭 이벤트를 제어합니다.




* **`<section class="profile-header">` (프로필 정보 영역)**

* 원형 프로필 이미지(`avatar-img`), 이름(`<h1>`), 직무(`role`), 한 줄 소개(`bio`), SNS 이동 아이콘 링크 3종(`social-icons`)이 순서대로 배치됩니다.




* **`<section class="link-list">` (하단 링크 버튼 목록)**

* **썸네일 카드 (`highlight-card`)**: 썸네일 이미지, 제목, 보조 설명, 화살표 아이콘이 들어간 강조형 링크입니다.


* **일반 캡슐 링크**: 좌측 아이콘 + 중앙 텍스트 + 우측 꺾쇠 화살표로 구성된 포트폴리오, 노션, 이메일 문의 링크들입니다.