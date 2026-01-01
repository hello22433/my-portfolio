# 💻 Lee Se-jun | Backend Developer Portfolio

📚 Detail : https://www.notion.so/2dab333bc3738083b32dc28fb86ffe42

> **"Frameworks come and go, but Fundamentals remain."**
> 프레임워크(React, Vue) 없이 순수 HTML, CSS, JavaScript만으로 구축한 포트폴리오 사이트입니다.
> 웹의 동작 원리와 DOM 조작, 이벤트 처리의 기초를 확실히 다지기 위해 제작했습니다.

## 📖 Project Overview
백엔드 개발자 **이세준**의 이력과 프로젝트 경험을 소개하는 웹사이트입니다.
화려한 라이브러리에 의존하기보다, **가볍고(Lightweight)** **빠르며(Fast)** **유지보수 가능한(Maintainable)** 코드를 작성하는 데 집중했습니다.

* **개발 기간:** 2025.12 ~
* **개발 인원:** 1인 (Personal Project)
* **데모 사이트:** (GitHub Pages 배포 후 링크 추가 예정)

## 🛠 Tech Stack
* **Markup:** HTML5 (Semantic Tags)
* **Style:** CSS3 (Flexbox, Grid, CSS Variables)
* **Script:** Vanilla JavaScript (ES6+)

## 🚀 Key Features & Implementation Logic

이 프로젝트는 단순한 구현을 넘어 '**왜 이렇게 짰는가?**'에 대한 고민을 담았습니다.

### 1. 동적 데이터 렌더링 (Dynamic Rendering)
* **구현:** HTML에 프로젝트 내용을 하드코딩하지 않고, JavaScript 객체 배열(JSON 형태)로 데이터를 관리합니다.
* **이유:** 추후 백엔드 API와 연동하거나, 데이터가 변경될 때 유지보수를 용이하게 하기 위함입니다. React의 `map()` 함수가 내부적으로 어떻게 동작하는지 이해하며 구현했습니다.

### 2. 다크 모드 (Dark Mode)
* **구현:** CSS Variables(`:root`)와 JavaScript를 연동했습니다.
* **사용자 경험(UX):** `localStorage`를 활용하여 사용자가 새로고침을 하거나 재방문해도 선택한 테마가 유지되도록 했습니다.

### 3. 성능 최적화된 이벤트 처리 (Event Delegation)
* **구현:** 네비게이션 링크 각각에 이벤트를 걸지 않고, 부모 요소(`ul`)에 하나의 이벤트 리스너를 등록하여 버블링을 활용했습니다.
* **이유:** 메모리 누수를 방지하고, 향후 메뉴가 동적으로 추가되어도 코드를 수정할 필요가 없는 유연한 구조를 만들기 위함입니다.

### 4. 반응형 레이아웃 (Responsive Design)
* **구현:** `CSS Grid`의 `auto-fit`과 `minmax` 속성을 사용하여, 미디어 쿼리를 복잡하게 쓰지 않고도 모바일/PC 환경에 자동으로 대응하는 카드 레이아웃을 구현했습니다.

## 📂 Directory Structure

```text
.
├── index.html          # Semantic Markup 구조
├── css/
│   └── style.css       # CSS Variables, Grid/Flex Layout
├── js/
│   └── main.js         # DOM Manipulation, LocalStorage logic
└── README.md           # Project Documentation
