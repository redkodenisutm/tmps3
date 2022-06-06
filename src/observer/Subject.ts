import Observer from "./Observer";

class Subject {
  observerList: Observer[];
  newArticlePosted: boolean;
  articleName: string;

  constructor() {
    this.observerList = [];
    this.newArticlePosted = false;
    this.articleName = null;
  }
  subscribe(observer) {
    this.observerList.push(observer);
  }
  unsubscribe(observer) {
    this.observerList = this.observerList.filter((obs) => obs !== observer);
  }
  notify() {
    if (this.newArticlePosted) {
      this.observerList.forEach((subscriber) => subscriber.update());
    } else {
      return;
    }
  }
  getUpdate() {
    return this.articleName;
  }
  postNewArticle(articleName) {
    this.articleName = articleName;
    this.newArticlePosted = true;
    this.notify();
  }
}

export default Subject;
