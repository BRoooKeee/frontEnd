//! 함수와 조건문 사용
// 윤년(Leap Year) 확인 함수
// 윤년: 4년에 한 번씩 2월이 29일까지 있는 해

// 4로 나누어 떨어지는 해는 윤년
// 그 중에서 100으로 나누어 떨어지는 해는 윤년이 아닙니다.
// 하지만 400으로 나누어 떨어지는 해는 윤년입니다.

function isLeapYear(year) {
  if (((year % 4 == 0)&&(year % 100 != 0))||(year % 400 == 0)) {
    return true;
  } else {
    return false;
  }
}

console.log(isLeapYear(2020));
console.log(isLeapYear(2023));
console.log(isLeapYear(2000));


//! 함수와 반복문 사용
// A부터 B까지 더하는 함수

// 시작 값(A)부터 끝 값(B)까지 반복문을 사용하여 계산

function sumFromAtoB(a, b) {
  let sum = 0;
  for (let i = a; i <= b; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumFromAtoB(1, 10));
console.log(sumFromAtoB(1, 100));
