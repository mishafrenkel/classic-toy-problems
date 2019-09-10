class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
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