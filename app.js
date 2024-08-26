// 각 페이지의 HTML 템플릿을 모듈화
const templates = {
    home: `
        <nav>
            <a href="/" onclick="navigate(event, '/')">홈</a>
            <a href="/about" onclick="navigate(event, '/about')">소개</a>
            <a href="/students" onclick="navigate(event, '/students')">학생</a>
        </nav>
        <h1>홈페이지</h1>
        <p>안녕하세요! 여기는 홈 페이지입니다.</p>
    `,
    about: `
        <nav>
            <a href="/" onclick="navigate(event, '/')">홈</a>
            <a href="/about" onclick="navigate(event, '/about')">소개</a>
            <a href="/students" onclick="navigate(event, '/students')">학생</a>
        </nav>
        <h1>소개 페이지</h1>
        <p>이곳은 소개 페이지입니다.</p>
    `,
    students: `
        <nav>
            <a href="/" onclick="navigate(event, '/')">홈</a>
            <a href="/about" onclick="navigate(event, '/about')">소개</a>
            <a href="/students" onclick="navigate(event, '/students')">학생</a>
        </nav>
        <h1>학생 페이지</h1>
        <p>여기는 학생 목록입니다.</p>
    `
};

// 현재 URL에 따라 페이지를 렌더링하는 함수
function render() {
    const path = window.location.pathname;
    const page = path === '/' ? 'home' : path.replace('/', '');
    const template = templates[page] || templates.home; // 기본값으로 홈 페이지 설정
    document.getElementById('app').innerHTML = template;
}

// 페이지 네비게이션 함수
function navigate(event, path) {
    event.preventDefault(); // 기본 링크 작동 방지
    window.history.pushState({}, '', path); // URL 변경
    render(); // 새로운 페이지 렌더링
}

// 초기 렌더링
window.addEventListener('popstate', render); // 뒤로 가기/앞으로 가기 버튼 처리
document.addEventListener('DOMContentLoaded', render); // DOMContentLoaded 이벤트로 초기 렌더링
