{
// 타입스크립트의 타입 명시 방법
//  : 필수 사항 X
//  : 프로그램의 안정성과 가독성을 높이는 중요한 역할
//  타입 어노테이션(Type Annotation)
//    : 콜론을 이용하여 JS코드에 타입을 정의하는 방식

//! 기본 타입(원시 타입: string, number, boolean 등)
//  : 변수명 뒤에 콜론을 첨부하고 타입 명시
//  : typeof 연산자를 사용했을 때 나타나는 변환값과 동일한 이름을 가짐

//  : String, Number, Boolean과 같이 대문자로 시작하는 타입은 JS의 '특수 내장 타입'
//  : 소문자 형태의 타입 사용을 권장

let age: number = 30;
let name: string = 'LEE';
let isStudent: boolean = false;

//! Array
//  : 순서가 있는 요소의 모음을 나타내는 자료구조

//  type[]
//  Array<type> : Generic Type
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [4, 5, 6];

//! Tuple
//  : 고정된 수의 요소 타입 & 순서가 있는 타입
//  : 원소의 수와 각 원소의 타입이 정확히 지정된 배열의 타입을 정의
//  : 명시된 개수 만큼만 원소를 지정 가능

//  배열과의 차이점
//    : 튜플의 경우 Array 타입 지정 X

//  타입을 지정할 떄
//    : 원소 타입을 순서대로 작성
const namdAndHeight: [string, number] = ['Lee', 168];
//let tuple: [number, string, number] = [1, 2, '3']; //Error

// Array 객체의 메소드로 조작되는 요소의 변화 가능
namdAndHeight.push(1);
console.log(namdAndHeight); //[ 'Lee', 168, 1 ]


//! void 타입
//  : 아무런 값이 없다.
//  : 주로 함수에서 반환 값이 없거나 return이 있더라도 반환하는 값이 없을 때 사용되는 타입
function voidType(parameter: number): void {
  // 함수의 타입 정의
  // 파라미터와 반환값 정의가 가능
  // return parameter + 1;
  return;
}
console.log(voidType(3));

//! null & undefined
//  JS와 달리 TS에서 null과 undefined의 경우 각각의 값만을 가짐
//  : null과 undefined에 자기 자신의 타입 그리고 void 타입 외의 타입에 할당하는 경우 에러 발생
let undefinedType: undefined = undefined;
// undefinedType = 1;
// undefinedType = true;
let nullType: null = null;
// nullType = 'null type' //Error

// null과 undefined는 모든 다른 타입의 하위 타입이기 때문에 두 타입은 모든 타입에 할당 가능
let nullNumber: number = 1;
// nullNumber = null; //Error(왜?)

//! any
//  : 모든 타입에 대해서 허용하는 타입
//  : 타입 검사 오류가 발생하는 것을 방지
//  : 모든 타입과 호환 가능
let anyType: any = 3;
anyType = 'string';
anyType = {};

//  : any타입의 경우 사전에 타입 오류를 계산할 수 없기 때문에 예상치 못한 에러 발생 가능성이 높음

//  noImplicitAny
//  : 타입이 지정되지 않은 값은 TypeScript 컴파일러가 자동으로 any 타입을 부여하는 동작
//  : TS 컴파일러가 noImplicitAny를 활성화하는 경우 암묵적으로 any로 간주하는 모든 경우에 오류 발생
//    function any(para) {  }

//! never
//  : 절대 발생하지 않는 값의 타입
//  : 함수가 예외를 발생시키거나 끝나지 않을 때 사용
function error(message: string): never {
  throw new Error(message);
}

//! bigint
//  : 큰 정수를 다루기 위한 원시 타입
// Bigint함수를 사용하여 biging값을 생성
// const oneHundred: bigint = BigInt(100); //Error('lib' 컴파일러 옵션을 'es2020' 이상으로 변경해 보세요.)

//! symbol
//  : 전역적으로 고유한 참조값을 생성하는데에 사용하는 타입
//  : 유일하고 변경 불가능한 값으로 생성
//  : Symbol() 함수로 생성
const refer = Symbol('name'); //refer에 name이라는 설명을 가진 심볼을 생성
const symbol1 = refer;
const symbol2 = refer;
if (symbol1 === symbol2) {  }
}