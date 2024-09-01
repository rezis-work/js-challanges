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

  min() {
    if (this.length === 0) return undefined;
    if (this.length === 1) return this.first;

    let current = this.first;

    let minValue = current.value;

    while (current.next) {
      current = current.next;

      if (current.value < minValue) {
        minValue = current.value;
      }
    }

    return minValue;
  }
}

let theStack = new Stack();
theStack.push(1);
theStack.push(2);
theStack.push(3);
theStack.push(4);
console.log(theStack.min());
console.log(theStack);
