import EmployeeChain from "./EmployeeChain.js";

class MediumLevelWorkHandler extends EmployeeChain {
  nextEmpInChain: EmployeeChain;
  constructor() {
    super();
    this.nextEmpInChain = new EmployeeChain();
  }

  setNextEmp(nextEmpObj) {
    this.nextEmpInChain = nextEmpObj;
  }

  assignWork(req) {
    if (req.getLevel() == "Medium") {
      console.log("Medium work assigned to: " + req.getName());
    } else {
      this.nextEmpInChain.assignWork(req);
    }
  }
}

export default MediumLevelWorkHandler;
