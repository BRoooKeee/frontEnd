// 객체

/*
1. 객체의 정의
  : 관련된 데이터와 함수의 집합
  : 객체 내부에서는 데이터와 함수를 프로퍼티(속성)와 메소드라고 불림.
  - JS는 '객체'지향 프로그래밍 언어
    : 실세계에 존재하고 인지하는 모든 것을 객체로 표현
  : 객체는 데이터 타입 중 하나, 다양한 값을 담을 수 있는 컨테이너
  : 따라서 배열도 여러 타입의 자료를 담는 것이 가능한 객체의 일부
  - 객체는 다른 이름 값을 갖는 복수 개의 멤버로 구성 (키와 값는 : 으로 분리, 쌍은 , 로 분리)
  - 객체의 값으로는 JS의 모든 데이터 값 사용 가능 (배열, 또 다른 객체, 함수 등)

  - 객체
    : 고유한 특성과 동작을 가지는 것
*/
console.log(typeof([])); // Object

// 객체를 생성하기 위해서는 JS의 다른 요소들과 마찬가지로 변수를 정의하고 초기화하여 시작
let person = {
  name : ['Lee', 'SeungAh'],
  age : 27,
  gender: 'female',
  interests: ['develope', 'music'],
  bio : function() {
    alert(this.name[0] + " " +
    this.name[1] + " is " +
    this.age + " years old. She likes " +
    this.interests[0] + " and " + 
    this.interests[1] + ".");
  },
  greeting : function() {
    alert(
      "Hi, I'm " + this.name[0] + "."
    );
  }
};

/*
2. 객체 리터럴 (Object Literal)
  : 프로퍼티(속성)와 메소드를 통해서 구현한느 객체
  : 중괄호를 사용하여 그 안에 키(이름)과 값이 콜론으로 구분되는 속성
  : 객체를 생성할 때 컨텐츠(데이터)를 그대로 대입
*/

/*
3. 점 표기법
  : 객체에서 프로퍼티와 메소드에 접근하기 위해서 점 표기법 사용
  - 객체 내에서 캡슐화되어 있는 것에 접근하려면 '객체명.하위항목'으로 접근
*/
console.log(person.age);
console.log(person.interests[1]);
// 하위 namespaces : 다른 객체를 객체의 멤버값으로 갖는 것
console.log(person.name[0]); //Lee
console.log(person.name.last); //Undefined... wtf?

/*
4. 괄호 표기법
  : 객체의 프로퍼티에 접근하는 방법
  : 배열의 요소 값에 접근하는 것과 동일하게 인덱스 숫자를 대신하여 각 멤버의 값들과 연결된 이름을 이용하여 접근
  : 객체를 '연관배열'이라고도 불림
  - 객체명['프로퍼티명']
    예) person['age']
*/

/*
6. 객체 멤버 설정
  : 객체 멤버 가져오기(반환)방법과 동일하게 점 표기법과 대과호 표기법을 사용
  - 객체 멤버를 설정하는 것은 기존의 존재하는 프로퍼티나 메소들르 새롭게 정의하는 것 뿐만 아니라 완전히 새로운 멤버 생성도 가능
*/
person['job'] = 'developer';
person.work = function() {
  console.log('work hard!');
}