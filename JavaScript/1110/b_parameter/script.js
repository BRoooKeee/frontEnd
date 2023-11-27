// 매개변수 (parameter)

/*
1. 가변 매개변수
  : 함수가 받을 수 있는 매개변수의 수가 변할 수 있다는 것을 의미
  : 함수를 호출할 때 인자의 수가 정해져 있지 않고, 함수 내부에서 유동적으로 처리

2. 나머지 매개변수 (Rest Parameters)
  : JS에서 나머지 매개변수를 사용하여 가변 매개변수를 구현
  : 매개변수에 ...을 사용하여 정의, 함수에 전달된 여분의 인자들을 배열로 받음.
  - 나머지 매개변수의 형태
    : 함수 선언 시 매개변수 목록의 마지막에 위치
    */
    function findMin(...numbers) {
      return Math.min(...numbers);
    }
    console.log(findMin(58, 35, 92, 10, 23, 77));
    /*
  - 나머지 매개변수와 일반 매개변수의 조합
  */
    function combinedExample(firstParam, ...restOfParams) {
      // firstParam은 첫 번째 인자를 받고
      // , restOfParams는 나머지 인자들을 배열의 형태로 받음.
    
      console.log(`첫 번째 매개변수는: ${firstParam}, 타입: ${typeof firstParam}`);
    
      // 배열의 형태 확인의 경우
      // JS 내장 함수인 Array.isArray()로 확인 가능
      console.log(`나머지 매개변수의 형태는 배열입니까?: ${Array.isArray(restOfParams)}`);
    
      console.log(restOfParams);
    }

    combinedExample(42, 'Hello', true, [1, 2, 3], null, undefined);

  /*

3. 기본 매개변수
  : 함수에 인자를 전달하지 않았을 때 사용되는 기본값을 정의
  : 함수의 매개변수가 undefined인 경우에도 함수가 정상적으로 동작하도록 구현
  - 기본 매개변수 사용법
    : 함수를 정의할 때 매개변수 뒤에 '=' 연산자를 이용하여 기본값을 할당
  */
    function isLeapYear(year = new Date().getFullYear()) {
      return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }
    console.log(isLeapYear()); //올해가 윤년인지 확인 (인자를 전달하지 않았으므로 기본값 사용)
    console.log(isLeapYear(2020)) // 2020년이 윤년인지 확인  (인자를 전달하였으므로 함수에서 파라미터로 사용)