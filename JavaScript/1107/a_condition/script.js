// 자바스크립트의 구성 요소
// 조건문, 반복문, 함수, 이벤트 등

// 자바스크립트 조건문
// 종류 :  if, else, else if, switch

/*
1. if 문
  가장 기본적인 조건문 : 특정 조건이 참(true)이면 코드블럭이 실행
  if (조건) {
    조건이 참(true)일 경우 실행되는 코드
  }
    - 조건은 보통 비교 연산잔를 사용해 표현
    - 리턴 값은 boolean 타입
    - 조건이 false일 시 코드 블럭 무시
*/
let number = 10;
if (number > 0) {
  console.log('The number is positive');
}

/* 
2. if else 문
  : else문은 if문과 함께 사용
  : if의 조건이 거짓(false)일 경유 else 뒤의 코드 블럭이 실행
  if (조건) {
    조건이 참일 때 실행되는 코드
  } else {
    조건이 거짓일 때 실행되는 코드
  }

*/
number = -10;
if (number>0) {
  console.log("The number is positive");
} else {
  console.log("The number is negative");
}

/* 
3. else if 문
  : if와 else 사이에 여러 개의 조건을 추가
  : if문과 else문 사이에 위치, 여러 개의 조건을 확인할 수 있게 해주는 제어 구조
  if (조건1) {
    조건1일 참일 때 실행되는 코드
  } else if (조건2) {
    조건1이 거짓이고 조건2가 참일 때 실행되는 코드
  } else {
    모든 조건이 거짓일 때 실행되는 코드
  }
*/
number = 0;
if (number > 0) {
  console.log("The number is positive");
} else if ( number < 0) {
  console.log("The number is negative");
} else {
  console.log("The number is zero");
}

// 조건식에서 true와 false 값으로 인식되는 값
// : false, 0, '', nulll, undefined

/*
4. switch 문
  : 여러 가지 경우 중 하나를 선택하는 데 사용
  : 표현식의 값을 확인하고 해당 값과 일치하는 case문의 코드 블록 실행
  switch (식) {
    case 값1 :
      식이 값1과 일치할 때 실행되는 코드
      break;
    case 값2 :
      식이 값2과 일치할 때 실행되는 코드
      break;
    case 값3 :
      식이 값3과 일치할 때 실행되는 코드
      break;
    ...
    default:
      식이 어떤 값과도 일치하지 않을 때 실행되는 코드
  }
  - break문 (필수X)
  : 이전의 선택이 표현식이나 값과 일치한다면, 브라우저는 해당 코드 블록에서 실행을 멈추고
    switch문 아래에 있는 코드로 이동
*/
let fruit = 'apple';
switch(fruit) {
  case 'banana':
    console.log("I am a banana");
    break;
  case 'apple':
    console.log("I am a apple");
    break;
  case 'cherry':
    console.log("I am a cherry");
    break;
  default:
    console.log("I don't know");
}

//Example
const select = document.querySelector('select');
const para = document.querySelector('p');

select.onchange = setWeather;

function setWeater() {
  const choice = select.value;

  // else if문 작성

  // if (choice === 'sunny') {
  //   para.textContent = "It's sunny day";
  // } else if (choice === 'rainy') {
  //   para.textContent = "It's rainy day";
  // } else if (choice === 'snowing') {
  //   para.textContent = "It's snowing day";
  // } else if (choice === 'overcast') {
  //   para.textContent = "It's overcast day";
  // } else {
  //   para.textContent = 'Please select weather';
  // }

  // switch문으로 작성
  switch (choice) {
    case 'sunny':
      para.textContent = "It's sunny day";
      break;
    case 'rainy':
      para.textContent = "It's rainy day";
      break;
    case 'snowing':
      para.textContent = "It's snowing day";
      break;
    case 'overcast':
      para.textContent = "It's overcast day";
      break;
    default:
      para.textContent = 'Please select weather';
  }
}
/*
! 5. 삼항(조건) 연산자
조건에 따라 값을 반환하는 JS에서 세 개의 
피연산자를 가지는 유일한 연산자
: if-else문을 더 간결하게 표현

삼항 연산자의 기본적인 문법
조건 ? 표현식1 : 표현식2
*/
number = 15;
let message = number > 10 
  ? 'The number is greater than 10' 
  : 'The number is not greater than 10';

console.log(message);

/*
? 중첩된 if-else문
if (조건1) {
  조건1이 참일 때 실행될 코드
  if (조건2) {
    조건1과 조건2 모두 참일 때 실행될 코드
  } else {
    조건1은 참이지만, 조건2는 거짓일 때 실행될 코드
  }
} else {
  조건1이 거짓일 때 실행될 코드
}
*/
score = 35;

if (score >= 50) {
  console.log("Passed");

  if (score >= 90) {
    console.log("A");
  } else if (score >= 80) {
    console.log("B");
  } else if (score >= 70) {
    console.log("C");
  } else {
    console.log("D");
  }
} else {
  console.log("Failed");
}
// 위 중첩 if문을 삼항 연산자로 변환
score = 150;
let grade = 
  score > 100 || score < 0 ? 'Not existed' :
  score >= 90 ? 'A' :
  score >= 80 ? 'B' :
  score >= 70 ? 'C' :
  score >= 60 ? 'D' : 'Failed';

console.log(grade);

// OR 연산자
false || false == false;
false || true == true;
true || false == true;
true || true == true;

// AND 연산자
false && false == false;
false && true == false;
true && false == false;
true && true == true;