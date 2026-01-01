// 프로젝트 데이터 (나중에 이 부분만 API에서 가져오면 됨)
const projects = [
    {
        title: "Popcorn",
        desc: "고트래픽 환경에서 팝업 스토어 예약과 재고 정합성을 보장하는 예약 서비스",
        tech: ["Java 17",
            "Spring Boot",
            "Spring Data JPA",
            "MySQL",
            "Redis",
            "Apache Kafka"
        ]
    },

    {
        title: "Mini-SSEM",
        desc: "고가용성과 자기 보호(Self-Protection)를 목표로 한 세금 계산 백엔드 엔진",
        tech: [
            "Java 17",
            "Spring Boot 3.x",
            "Spring Data JPA",
            "MySQL 8.0",
            "Redis",
            "Flyway",
            "RabbitMQ",
            "Bucket4j",
            "Prometheus",
            "Grafana",
            "k6",
            "JUnit5",
            "Docker Compose"
        ]
    },

    {
        title: "Cargo",
        desc: "물류 관리 및 배송 시스템을 위한 MSA 기반 플랫폼",
        tech: [
            "Java 17",
            "Spring Boot 3.5.x",
            "Gradle",
            "PostgreSQL 17",
            "Redis",
            "QueryDSL 7.0",
            "Spring Cloud (Gateway, Eureka, OpenFeign)",
            "Resilience4j",
            "Docker",
            "Slack API"
        ]
    }
];

// DOM 요소 선택
const projectContainer = document.getElementById('project-list');

// 데이터를 기반으로 HTML 생성 (리액트의 map 함수 역할)
projects.forEach(project => {
    const card = document.createElement('article');
    card.className = 'project-card';

    card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.desc}</p>
        <small>${project.tech.join(', ')}</small>
    `;

    projectContainer.appendChild(card);
})

// --- 다크 모드 구현 ---

const toggleBtn = document.getElementById('theme-toggle');
const bodyEl = document.querySelector('body');
const htmlEl = document.documentElement; // <html> 태그 선택

// 1. 로드 시 저장된 테마 불러오기 (없으면 시스템 설정 따름)
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    htmlEl.setAttribute('date-theme', 'dark');
    toggleBtn.innerText = '☀️'; // 해 아이콘으로 변경;
}

// 2. 버튼 클릭 이벤트 리스너
toggleBtn.addEventListener('click', () => {
    // 현재 테마 확인
    const currentTheme = htmlEl.getAttribute('data-theme');

    if (currentTheme === 'dark') {
        // 라이트 모드로 전환
        htmlEl.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light'); // 설정 저장
        toggleBtn.innerText = '🌙';
    } else {
        // 다크 모드로 전환
        htmlEl.setAttribute('data-theme', 'dark'); // 설정 저장
        localStorage.setItem('theme',' dark'); // 설정 저장
        toggleBtn.innerText = '☀️';
    }
})


// --- 네비게이션 스크롤 이동 구현 ---

// 1. 네비게이션 링크들을 감사고 있는 부모 요소 선택
const navLinksContainer = document.querySelector('.nav-links');

navLinksContainer.addEventListener('click', (e) => {
    // 2. 클릭된 요소가 <a> 태그인지 확인
    // e.target은 실제 클릭된 요소를 의미함
    if (e.target.tagName === 'A') {
        // 3. <a> 태그의 기본 동작(순간 이동)을 막음
        e.preventDefault();

        // 4. 클릭된 링크의 href 속성값(#about, #projects 등)을 가져옴
        const targetId = e.target.getAttribute('href');

        // 5. 해당 ID를 가진 섹션 요소를 찾음
        const targetSection = document.querySelector(targetId);

        // 6. 부드럽게 스크롤 이동
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
    }
})

















