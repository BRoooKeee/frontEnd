{
// 직원 관리 시스템

// Employee 기본 클래스 생성
class Employee {
  // 속성: name, id
  // 생성자를 사용하여 초기화
  constructor(public name: string, public id: number){}

  // 메서드: displayInfo() - 직원의 정보 출력
  displayInfo(): void {
    console.log(`Name: ${this.name}, ID: ${this.id}`);
  }
}

// Manager 클래스 생성 : Employee 클래스를 확장
class Manager extends Employee {
  // 추가 속성: subordinates
  private subordinates: Employee[] = [];

  // 부모 클래스의 생성자 호출
  constructor(name: string, id: number) {
    super(name, id);
  }

  // 메서드: addSubordinate(employee: Employee)
  addSubordinate(employee: Employee) {
    this.subordinates.push(employee);
  }

  // 메서드: listSubordinates()
  listSubordinates(): void {
    console.log(`Manager: ${this.name}`);
    this.subordinates.forEach(employee => employee.displayInfo());
  }
}

const manager = new Manager('lee', 1);
const emp1 = new Employee('kim', 2);
const emp2 = new Employee('park', 3);

manager.addSubordinate(emp1);
manager.addSubordinate(emp2);

manager.listSubordinates();
}