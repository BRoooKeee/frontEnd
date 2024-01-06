{
// Car 클래스 생성
// 클래스는 model과 year 두 개의 멤버 변수
// 매개변수로 두 개의 멤버 변수를 받는 생성자 생성
// getModelAndYear라는 메서드포함
// "This car is a {model} from {year}."를 출력

class Car{
  constructor(public model: string, public year: number) {
  }
  getModelAndYear() {
    console.log(`This car is a ${this.model} from ${this.year}.`);
    }
}

let car1 = new Car('ferrari', 2023);
car1.getModelAndYear();
}