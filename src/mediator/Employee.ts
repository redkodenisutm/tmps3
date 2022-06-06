import HR from "./HR.js";

class Employee {
  name: string;
  hr: HR;
  position: string;
  pay: number;

  constructor(hr: HR, name: string, position: string, pay: number) {
    this.hr = hr;
    this.name = name;
    this.position = position;
    this.pay = pay;
  }
}
export default Employee;
