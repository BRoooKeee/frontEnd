const inputField = document.getElementById('inputField');
const itemList = document.getElementById('itemList');

function createItem() {
  let txt = inputField.value;
  itemList.innerHTML += `<li>${txt}</li>`;
  inputField.value = '';
}