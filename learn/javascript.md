## 3. JavaScript 설명서 (`script.js`)

JavaScript는 사용자의 클릭 동작을 감지하고 **다크모드 전환, 테마 저장, 모바일 공유 기능** 등의 동적 기능을 수행합니다.

* **`DOMContentLoaded` 이벤트**

* HTML 문서의 모든 요소가 다 로드된 뒤 스크립트가 안전하게 실행되도록 대기합니다.




* **초기 테마 감지 및 복원 (`localStorage` & `prefers-color-scheme`)**

* `localStorage.getItem('theme')`: 사용자가 이전에 선택한 테마 설정값을 브라우저 저장소에서 불러옵니다.


* `window.matchMedia('(prefers-color-scheme: dark)')`: 사용자가 처음 방문했을 때 스마트폰/PC의 OS 다크모드 설정을 자동으로 감지합니다.


* 조건에 맞춰 시작할 때 `.dark-mode` 클래스를 추가하거나 제거합니다.




* **다크/라이트 모드 토글 (`themeToggleBtn`)**

* 버튼을 클릭할 때마다 `document.body.classList.toggle('dark-mode')`를 통해 다크모드를 켜고 끕니다.


* 변경된 상태(`dark` 또는 `light`)를 `localStorage`에 즉시 저장하여 페이지를 새로고침하거나 다시 방문해도 설정이 유지됩니다.


* `updateThemeIcon()` 함수로 해 아이콘(`fa-sun`)과 달 아이콘(`fa-moon`)을 서로 교체합니다.




* **웹 공유 기능 (`shareBtn` & `navigator.share`)**

* 스마트폰 환경에서는 브라우저의 기본 공유 시트(카카오톡, 메시지 등)를 호출합니다.


* 공유 기능을 지원하지 않는 PC 브라우저 등에서는 `navigator.clipboard.writeText()`를 사용해 현재 페이지 URL을 클립보드에 복사해 줍니다.