// 반복문 연습 예제

let fruits = ['apple', 'banana', 'cherry'];

// 1. 배열의 모든 요소를 출력

// for문
console.log('---for문---');
for (let index = 0; index < fruits.length; index++) {
  console.log(fruits[index]);
}

// while문
console.log('---while문---');

let index = 0;

while (index < fruits.length) {
  console.log(fruits[index]);
  index++;
}

// do-while문
console.log('---do-while문---');

index = 0;

do {
  console.log(fruits[index]);
  index++;
} while (index < fruits.length);

// 사용자로부터 입력 받기(do while문)

// userInput 변수에 propmt('Enter a number greater than 10')
// userInput 변수가 10을 초과하는 수가 아닌 경우 반복
let userInput;
do {
  userInput = prompt('Enter a number greater than 10');
} while (userInput <= 10);

//! prompt창
// prompt 함수는 항상 /문자열/을 반환
 // 명시적으로 숫자로 변환
let input = prompt('Enter a number');
let numberInput = Number(input);

//! 반복문 실습
const inputNumber = document.querySelector('input');
const btn = document.querySelector('button');
const output = document. querySelector('p');

btn.onclick = () => {
  let num = inputNumber.value;
  console.log('ok');
  for (let i=0; i<=num; i++) {
    let sqRoot = Math.sqrt(i);
    if (sqRoot == Math.floor(sqRoot) && i>0) {
      console.log(i, "의 루트는 " + sqRoot);
      output.textContent += (i + ', ');
    }
  }
}