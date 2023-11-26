// 자바 스크립트 함수

// 함수의 정의
//  : 특정 동작을 수행하는 코드의 묶음(집합)
//  : A-B-C 동작을 함수 'ABC'로 구현, 다른 위치(코드)에서 해당 절차(ABC)를 다시 사용 가능


/* 함수의 사용 용도와 예제
1. 코드의 재사용
  : 같은 코드를 여러 번 작성하는 대신 함수를 정의하고, 필요할 때마다 호출하여 사용
*/
function multiply(a,b) {
  return a*b;
}
console.log(multiply(2,3));

/*
2. 모듈화 및 추상화
  : 복잡한 작업을 수행하는 코드를 함수로 분리
  : 각 함수가 수행하는 작업에 집중
*/
function calculateDistance(x1, y1, x2, y2) {
  let dx = x2 - x1;
  let dy = y2 - y1;
  return Math.sqrt(dx*dx + dy*dy);
}

/*
3. 이벤트 처리
  : 웹 페이지에서 발생하는 다양한 이벤트(버튼클릭, 폼제출 등)를 처리하는데 사용
  : 문서를 로드 후 버튼을 선택하고 클릭 이벤트 리스너 추가
*/
let btn = document.querySelector('button');
btn.addEventListener('click', function() {
  console.log('Button was Clicked');
});

// 함수 정의 방법 (함수 생성)

/*
1. 함수 선언식(Function Declartion)
  : 가장 기본적인 함수 정의 방법
  : function 키워드로 시작, 함수의 이름이 필수적으로 명시
  : 호이스팅(즉, 함수가 정의되기 전에 호출 가능)
*/
sayHello(); //호이스팅 가능
function sayHello() {
  console.log("함수 선언식");
}

/*
2. 함수 표현식(Function Expression)
  : 함수를 변수에 할당하는 방식
  : 함수에 이름을 붙일 수도 있고, 붙이지 않을 수도 있다.
  : 호이스팅 되지 X (정의된 후에만 호출 가능)
  : 정의된 함수는 변수의 스코프 내에서만 사용 가능
*/
// greet(); //호이스팅 X
let greet = function() {
  console.log("함수 표현식");
}

/*
3. 화살표 함수(Array Function)
  : ES6에서 도입된 함수 정의 방식
  : 기존의 function 키워드를 화살표로 대체하여, 간결한 함수를 작성
  : 항상 익명함수로 사용
  : 'this'가 일반 함수와 다르게 바인딩 됨.
*/
const greeting = (arrow) => {
  console.log(`Hello, ${arrow} Function`);
}
greeting('Arrow');

// 함수 호출하기
// : 함수를 정의한 후에는 함수명과 괄호를 사용하여 함수 호출 가능
// 함수명(매개변수);

// 함수의 매개 변수
// : 함수를 정의하고 호출하는 과정에서 함수에 데이터 전달
// : 함수 호출 시 괄호 안에 인수(arguments)를 넣어서 전달
// : 해당 인수는 함수 내부로 전달되어 매개변수(parameters)라는 이름으로 사용

/*
- 인수(arguments)
  : 함수를 호출할 때 전달하는 실제 값
  : 함수 호출 시 괄호 안에 넣어 함수에 전달
- 파라미터(parameter)
  : 함수의 입력으로 사용되는 변수를 의미
  : 함수를 정의할 때 괄호 안에 선언
- 인수 VS 파라미터
function add(a,b) {return a+b;}  ->  소괄호 안의 a, b는 파라미터
add(3, 5);  ->  소괄호 안의 3, 5는 인수
*/

// 자바스크립트의 파라미터와 인수 사용
// : 함수 호출 시 전달되는 인수의 수와 함수 정의 시 선언된 파라미터의 수가 일치하지 않아도 가능

// 자바스크립트의 반환 값
// : 함수 내에서 return 키워드 사용 시, 함수의 실행을 즉시 중단하고 return값을 반환
// : 반환 값은 함수의 작업 결과를 함수 외부로 전달하는 방법
function subtract(a, b) { return a-b;}
let subtractResult = subtract(3, 5);
// return 키워드가 없는 함수는 undefined를 반환

// 함수 사용 시 지역변수와 전역변수
let name = 'ssb'; //global variable
function whoami() {
  let myName = 'ssb'; //local variable
  return myName;
}