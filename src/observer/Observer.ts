import Subject from "./Subject.js";

class Observer {
  subject: Subject;
  name: string;
  constructor(name: string) {
    this.subject = new Subject();
    this.name = name;
  }
  update() {
    if (this.subject.getUpdate() == null) {
      console.log(`Hello ${this.name}. No new article`);
    } else {
      console.log(
        `Hello ${
          this.name
        }. The new article ${this.subject.getUpdate()} is posted`
      );
    }
  }
  setSubject(subject) {
    this.subject = subject;
  }
}

export default Observer;
