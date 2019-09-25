/**
  *
  * Implement a `DFSelect` method on this Tree class.
  *
  * DFSelect accepts a filter function, calls that function on each of the nodes
  * in Depth First order, and returns a flat array of node values of the tree
  * for which the filter returns true.
  *
  * Example:
  *   var root1 = new Tree(1);
  *   var branch2 = root1.addChild(2);
  *   var branch3 = root1.addChild(3);
  *   var leaf4 = branch2.addChild(4);
  *   var leaf5 = branch2.addChild(5);
  *   var leaf6 = branch3.addChild(6);
  *   var leaf7 = branch3.addChild(7);
  *   root1.DFSelect(function (value, depth) {
  *     return value % 2;
  *   })
  *   // [1, 5, 3, 7]
  *
  *   root1.DFSelect(function (value, depth) {
  *     return depth === 1;
  *   })
  *   // [2, 3]
  *
  */

class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  DFSelect(filter, depth, results) {
    results = results || [];
    depth = depth || 0;

    if (filter(this.value, depth)) {
      results.push(this.value);
    }

    for (let i = 0; i < this.children.length; i++) {
      const child = this.children[i];
      child.DFSelect(filter, depth + 1, results);
    }
    return results;
  }

  map(callback) {
    const output = new Tree(callback(this.value));

    for (let i = 0; i < this.children.length; i++) {
      output.addChild(this.children[i].map(callback));
    }
    return output;
  };

  mapInPlace(callback) {
    this.value = callback(this.value);

    for (let i = 0; i < this.children.length; i++) {
      this.children[i].mapInPlace(callback);
    }
  };

  addChild(child) {
    if (!child || !(child instanceof Tree)) {
      child = new Tree(child);
    }

    if (!this.isDescendant(child)) {
      this.children.push(child);
    } else {
      throw new Error('That child is already ')
    }
    return child;
  }

  isDescendant(child) {
    if (this.children.indexOf(child) !== -1) {
      return true;
    } else {
      for (let i = 0; i < this.children.length; i++) {
        if (this.children[i].isDescendant(child)) {
          return true;
        }
      }
      return false;
    }
  }

  removeChild(child) {
    const index = this.children.indexOf(child);
    if (index !== -1) {
      this.children.splice(index, 1);
    } else {
      throw new Error('That node is not an immediate child of tree');
    }
  }
}