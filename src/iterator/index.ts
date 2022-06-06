class Iterator {
  keys: string[];
  index: number;
  elements: any;

  constructor(elements) {
    this.keys = Object.keys(elements);
    this.index = 0;
    this.elements = elements;
  }

  hasNext() {
    return this.index < this.keys.length;
  }

  first() {
    this.index = 0;
    return this.elements[this.keys[this.index]];
  }

  next() {
    if (this.index < this.keys.length) {
      return this.elements[this.keys[++this.index]];
    } else {
      return null;
    }
  }

  each(callback) {
    for (var i = this.first(); this.hasNext(); i = this.next()) {
      callback(i);
    }
  }
}

export default () => {
  const object = {
    name: "Ana",
    age: "23",
    gender: "Female",
    Occupation: "Nurse",
  };

  var iter = new Iterator(object);

  for (var item = iter.first(); iter.hasNext(); item = iter.next()) {
    console.log(item);
  }
  console.log("");

  iter.each((item) => {
    console.log(item);
  });
};
