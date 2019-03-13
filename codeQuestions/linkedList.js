class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.insertFirst = function (data) {
      let node1 = new Node(data);
      if (this.head) node1.next = this.head;
      this.head = node1;
    };
    this.size = function () {
      let count = 0;
      while (this.head) {
        count += 1;
        this.head = this.head.next;
      }

      return count;
    }
  }
}

module.exports = { Node, LinkedList };