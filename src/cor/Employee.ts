class Employee {
  name: string;
  level: string;

  constructor(name, level) {
    this.name = name;
    this.level = level;
  }

  getLevel() {
    return this.level;
  }

  getName() {
    return this.name;
  }
}

export default Employee;
