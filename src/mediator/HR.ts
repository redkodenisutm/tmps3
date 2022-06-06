import Employee from "./Employee.js";
import Manager from "./Manager.js";
import Workerr from "./Worker.js";

class HR {
  employeeList: Array<Employee> = [];
  constructor() {
    this.employeeList = [];
  }

  registerEmployee(employee: Employee) {
    this.employeeList[employee.name] = employee;
  }

  scheduleRaise(raise: number, worker: Workerr, manager: Manager) {
    manager.recieveMessage(worker, raise);
    const ans = manager.finalizeRaise(worker, raise);

    if (ans) {
      worker.recieveRaise(raise);
    }
  }
}

export default HR;
