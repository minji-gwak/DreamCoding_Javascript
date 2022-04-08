// 정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어보자
// 직원들의 정보: 이름, 부서이름, 한 달 근무시간
// 매달 직원들의 정보를 이용해서 한 달 월급을 계산할 수 있다
// 정직원은 시간당 10,000원
// 파트타임 직원은 시간 당 8,000원

class Employee {
  constructor(name, department, dutyTime) {
    this.name = name;
    this.department = department;
    this.dutyTime = dutyTime;
  }
}

class FullTime extends Employee {
  #wage;
  constructor(name, department, dutyTime, wage) {
    super();
    this.#wage = wage;
  }
}

class PartTime extends Employee {
  #wage;
  constructor(name, department, dutyTime, wage) {
    super();
    this.#wage = wage;
  }
}

const fullTime = new FullTime('곽민지', '플랫폼개발', '140', '');
console.log();
