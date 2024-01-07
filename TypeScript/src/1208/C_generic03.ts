{
//! 유니온 타입과 제네릭

// 유니온 타입: 여러 타입 중 하나가 될 수 있는 값을 의미
function processValue<T extends string | number>(value: T) {
  if (typeof value === 'string') {
    return value.toLowerCase();
  }
  return value;
}

const processString = processValue('string');
const processNumber = processValue(1234);
console.log(processString, processNumber);

//! 제네릭 유틸리티 타입
//  : 타입스크립트에 내장된 일련의 제네릭 타입
//  : 기존 타입을 변환하거나 조작하는데 사용

//? Partial: 모든 속성을 선택적으로 만들어줌

}