import Employee from "./Employee.js";
import HR from "./HR.js";
import Workerr from "./Worker.js";

class Manager extends Employee {
  constructor(hr: HR, name: string, position: string, pay: number) {
    super(hr, name, position, pay);
    this.hr.registerEmployee(this);
  }

  recieveMessage(worker: Workerr, raise: number) {
    console.log(`${worker.name} should get ${raise} dollar raise`);
  }

  finalizeRaise(worker: Workerr, raise: number) {
    const isApproved = Math.random() > 0.5;
    console.log(
      `${worker.name} ${raise} dollar raise is ${
        isApproved ? "approved" : "denied"
      }`
    );
    return isApproved;
  }
}

export default Manager;
