/*
  ! 변수 (variable)
    : 변하는 수 (값이 달라질 수 있는 데이터)
      ex. 나이, 연도 등
    : 데이터를 저장하기 위한 '공간'
  
  ! 변수 선언
    : 변수를 사용하기 위해 변수를 다른 변수들과 구별하기 위해 이름을 붙여 주는 것, 값을 저장할 컴퓨터 메모리 공간에 이름을 붙이는 것

  ! 변수 명명 규칙
    - 첫 글자 : 영문자, 언더바, 달러만 사용 가능
    - 띄어쓰기 허용 X
    - 기호는 _,$만 사용 가능
    - camelCase 사용
    - 예약어 사용 X
  
  ! 자바 스크립트의 변수 선언
    : 2가지 키워드
    : let, var 키워드

    ? let
      : 블록 범위 변수(Block Scope)
      : 재할당 가능
    ? var
      : 함수 범위 변수(Function Scope)
      : 재할당 가능
      : 호이스팅 O (선언 부분이 상단으로 끌어올려짐)
*/

let letVariable;
var varVariable;
letVariable = 10;
varVariable = 'Hello World!';

letVariable2 = 20;
varVariable = "안녕 변수!";

// Practice
let currentYear = 2023;
let birthYear = prompt('출생년도 : ');
document.write(currentYear - birthYear);


/*
  ! 상수 (Constant)
    : 한 번 할당된 값을 변경할 수 X (재할당 불가)
    : 선언과 동시에 할당이 반드시 이루어져야 함 (초기화)
    : 과학적 공식에서 사용하는 숫자 값
  
  ! 상수 명명규칙
    UPPER_SNAKE_CASE
*/


/*
  ! 변수의 호이스팅

  - var의 호이스팅
    ex. console.log(a);
        var a = 5;
        => ERROR
    ex. var a = 5;
        console.log(a);
        => execute

  - let과 const의 호이스팅
    ex. console.log(b);
        let b = 5;
        => ERROR
    ex. 
*/

// var 키워드의 경우
//    : 변수를 중복해서 선언할 수 있다는 위험성, 변수가 속하는 범위가 애매하다는 점에서 코드에 혼란을 줄 수 있기 때문에 사용 X