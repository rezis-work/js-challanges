class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
    }

    newNode.next = this.first;
    this.first = newNode;
    this.length++;
  }

  pop() {
    if (this.length === 0) return undefined;

    let temp = this.first;
    this.first = temp.next;
    temp = null;
    this.length--;
    return temp;
  }
}

let theStack = new Stack(0);
theStack.push(1);
theStack.push(2);
theStack.pop();

console.log(theStack);
