// 입력필드에서 '추가'버튼을 클릭하면 새로운 항목이 리스트에 추가되도록 구현

let addButton = document.getElementById('add-btn');
let todoInput = document.getElementById('todo-input');
let todoList = document.getElementById('todo-list');

addButton.addEventListener('click', function() {
  let newItem = document.createElement('li');
  newItem.textContent = todoInput.value;
  newItem.classList.add('todo-item');
  todoList.appendChild(newItem);
  todoInput.value = '';
});

todoList.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('completed');
  }
});