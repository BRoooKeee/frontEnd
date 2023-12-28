// 사용자 목록을 보여주는 웹 페이지
// DOMContentLoaded : 문서의 초기 HTML이 완전히 로드되고 파싱 되었을 때 실행하는 이벤트
document.addEventListener("DOMContentLoaded", function() {
  let users= [
    {name:'사용자1', email: 'user1@example.com', age: 30},
    {name:'사용자2', email: 'user2@example.com', age: 20}
  ];

  let userList = document.getElementById('user-list');

  users.forEach((user) => {
    let userDiv = document.createElement('div');
    userDiv.className = 'user';
    userDiv.innerHTML = `
    <h2>이름 : ${user.name}</h2>
    <p>이메일 : ${user.email}</p>
    <p>나이 : ${user.age}</p>`;

    userList.appendChild(userDiv);
  });
})

// 최신 검색목록을 보여주는 검색창
document.addEventListener('DOMContentLoaded', function() {
  const searchBox = document.getElementById('search-box');
  const searchButton = document.getElementById('search-button');
  const searchList = document.getElementById('search-list');
  let recentSearches = [];

  searchButton.addEventListener('click', function() {
    const searchTerm = searchBox.value;

    // trim()
    //  : 문자열의 양 끝의 공백을 제거한 원본 문자열
    //  ex. ' 안녕하세요'.trim() >> '안녕하세요'
    if (searchTerm.trim() !== '') {
      recentSearches.unshift(searchTerm);
      if (recentSearches.length > 5) {
        recentSearches.pop();
      }
      updateSearchList();
    }
  });

  function updateSearchList() {
    searchList.innerHTML = '';
    recentSearches.forEach((term) =>{
      const listItem = document.createElement('li');
      listItem.textContent = term;
      searchList.appendChild(listItem);
    })
  }
})