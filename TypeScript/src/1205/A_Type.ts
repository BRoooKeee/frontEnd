{
//! Union Type, Intersection Type

//? Union Type
// 사용자가 string 또는 number 또는 boolean 타입의 데이터를 입력 후
// 입력된 데이터 타입에 따라 다른 처리

type inputType = string | number | boolean;

function processInput(input: inputType): inputType {
  // 유니언타입 사용 시 타입 제한을 하지 않은 경우에는
  // 유니언타입으로 지정된 모든 타입에서 중복되는 속성만 사용가능
  // input.toLocaleString | input.toString | input.valueOf
  if (typeof input === 'string'){
    return input.toUpperCase();
  } else if (typeof input === 'number') {
    return input * input;
  } else {
    return !input;
  }
}

let input1 = 'input one';
let input2 = 2;
let input3 = false;
console.log(processInput(input1));
console.log(processInput(input2));
console.log(processInput(input3));

//? Intersection Type
// 타입 속성을 사용하여 User타입, Permissions타입 정의
// User는 name: string과 age: number 속성
// Permissions는 role: string, permissions: string[] 속성
// 두 타입 속성의 인터섹션을 사용하여 EnhancedUser 타입을 생성

type User = {
  name: string;
  // 필수값 X
  age?: number;
}
type Permissions = {
  readonly role: string;
  permmision: string[];
}
type EnhancedUser = User & Permissions;

const user1: EnhancedUser = {
  name: 'Kim',
  age: 30,
  role: 'developer',
  permmision: ['frontend', 'backend']
}

}