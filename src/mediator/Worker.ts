import Employee from "./Employee.js";
import HR from "./HR.js";

class Workerr extends Employee {
  constructor(hr: HR, name: string, position: string, pay: number) {
    super(hr, name, position, pay);
    this.hr.registerEmployee(this);
  }

  recieveRaise(raise: number) {
    this.pay += raise;
    console.log(`${this.name} new pay is ${this.pay} dollars`);
  }
}

export default Workerr;
