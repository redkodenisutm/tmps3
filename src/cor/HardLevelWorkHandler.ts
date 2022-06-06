import EmployeeChain from "./EmployeeChain.js";

class HardLevelWorkHandler extends EmployeeChain {
  nextEmpInChain: EmployeeChain;
  constructor() {
    super();
    this.nextEmpInChain = new EmployeeChain();
  }

  setNextEmp(nextEmpObj) {
    this.nextEmpInChain = nextEmpObj;
  }

  assignWork(req) {
    if (req.getLevel() == "Hard") {
      console.log("Hard work assigned to: " + req.getName());
    } else {
      this.nextEmpInChain.assignWork(req);
    }
  }
}

export default HardLevelWorkHandler;
