import EmployeeChain from "./EmployeeChain.js";

class EasyLevelWorkHandler extends EmployeeChain {
  nextEmpInChain: EmployeeChain;

  constructor() {
    super();
    this.nextEmpInChain = new EmployeeChain();
  }

  setNextEmp(nextEmpObj) {
    this.nextEmpInChain = nextEmpObj;
  }

  assignWork(req) {
    if (req.getLevel() == "Easy") {
      console.log("Easy work assigned to: " + req.getName());
    } else {
      this.nextEmpInChain.assignWork(req);
    }
  }
}

export default EasyLevelWorkHandler;
