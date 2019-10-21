// class Node {
//   constructor(data, next = null) {
//     this.data = data;
//     this.next = next;
//   }
// }

// class Queue {
//   constructor(front = null, back = null) {
//     this.front = front;
//     this.back = back;
//   }


//   enqueue() {
//     const node = new Node(element, null);
//     if (!this.back) {
//       this.front = node;
//       this.back = node;
//     } else {
//       this.back.next = node;
//       this.back = this.back.next;
//     }
//   }

//   dequeue() {
//     if (this.front) {
//       this.front = this.front.next;
//       return this.front.data;
//     } else {
//       if (this.back) {
//         this.back = null;
//       }
//       return 'Cannot dequeue because queue is empty';
//     }
//   }

// }

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Queue {
  constructor(front = null, back = null) {
    this.front = front;
    this.back = back;
  }

  enqueue(element) {
    const node = new Node(element, null);

    if (!this.back) {
      this.front = n;
      this.back = n;
    } else {
      this.back.next = n;
      this.back = this.back.next;
    }
  }

  dequeue() {
    if (this.front) {
      const front = this.front;
      this.front = this.front.next;
      return front.data;
    } else {
      if (this.back) {
        this.back = null;
      }
      return 'Cannot dequeue because queue is empty';
    }
  }
}