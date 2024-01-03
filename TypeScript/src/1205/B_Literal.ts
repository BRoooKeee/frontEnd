//! 리터럴 타입(Literal)

/*
1. 리터럴 타입의 정의
  : 특정 문자열, 숫자 또는 불린 값을 정확히 지정하는 타입
  : 특정 값으로 제한된 타입
  
  : 해당 값만을 가지는 상수 또는 해당 값을 타입으로 지정한 변수
    -> 다른 값을 할당하려고 하면 타입 에러가 발생

  : 리터럴 타입은 특정 문자열, 숫자, 불린 값으로 변수를 '제한'
*/
  const exactString = 'hello';
  const exactNumber = 10;
  const exactBoolean = true;
/*
2. 리터럴 타입 활용
  - 리터럴과 원시 타입을 함께 사용 가능
  - 리터럴 타입은 구체적인 값을 강제하거나 특정 값들만 허용하는 로직 설계에 유용
  - 코드의 의도를 명확하게 표현, 오류 감소, 자동완성 및 리팩토링에 용이
  
  - 리터럴 타입의 한계성
    : 고정된 값에만 제한되기 때문에 유연성이 떨어짐
*/
  type Directions = 'up' | 'down' | 'left' | 'right' | boolean;
  let moveUp: Directions = 'up';
  let moveNot: Directions = false;
  // let moveBottom: Directions = 'bottom'; //Type Error
  
  function setAlignment(alignment: 'left' | 'right' | 'center'): void {
    // 함수 내용
  }