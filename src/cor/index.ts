import EasyLevelWorkHandler from "./EasyLevelWorkHandler.js";
import Employee from "./Employee.js";
import HardLevelWorkHandler from "./HardLevelWorkHandler.js";
import MediumLevelWorkHandler from "./MediumLevelWorkHandler.js";

export default () => {
  var w1 = new EasyLevelWorkHandler();
  var w2 = new MediumLevelWorkHandler();
  var w3 = new HardLevelWorkHandler();
  w1.setNextEmp(w2);
  w2.setNextEmp(w3);

  const emp1 = new Employee("Denis", "Easy");
  const emp2 = new Employee("Vlad", "Medium");
  const emp3 = new Employee("Victor", "Hard");

  w1.assignWork(emp1);
  w1.assignWork(emp2);
  w1.assignWork(emp3);
};
