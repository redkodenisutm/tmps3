import HR from "./HR.js";
import Manager from "./Manager.js";
import Workerr from "./Worker.js";

export default () => {
  var hr = new HR();
  var employee = new Workerr(hr, "Denis", "Developer", 1000);
  var manager = new Manager(hr, "Victor", "Team Lead", 2000);
  hr.scheduleRaise(250, employee, manager);
};
