import Observer from "./Observer.js";
import Subject from "./Subject.js";

export default () => {
  var subject = new Subject();
  var observer1 = new Observer("Denis");
  var observer2 = new Observer("Victor");
  observer1.setSubject(subject);
  observer2.setSubject(subject);

  subject.subscribe(observer1);
  subject.subscribe(observer2);
  observer1.update();
  observer2.update();
  subject.postNewArticle("Casino 777");
  subject.unsubscribe(observer1);
  subject.postNewArticle("New Article");
};
