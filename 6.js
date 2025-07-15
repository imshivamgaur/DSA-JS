// const stringArr = ["a", "b", "c", "d", "e"];
// const numArr = [1, 2, 3, 4, 5, 6];
// const boolArr = [true, false];
// const mixedArr = ["a", 1, true, undefined, null, { a: "a", b: "b" }, ["b"]];

// console.log(mixedArr);

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    // console.log(this.data);
    return this.length;
  }
  get(index) {
    const item = this.data[index];
    return item;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  shift() {
    const firstItem = this.data[this.length - this.length];
    return console.log(this.data[firstItem]);
  }
}


const myNewArray = new MyArray();

myNewArray.push("apple");
myNewArray.push("orange");
myNewArray.push("mango");
myNewArray.push("banana");
// console.log(myNewArray);
// myNewArray.pop();
// console.log(myNewArray);
// console.log(myNewArray.get(2));

myNewArray.shift()

