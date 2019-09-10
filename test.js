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

  mapInPlace = (callback) => {
    this.value = callback(this.value);

    for (let i = 0; i < this.children.length; i++) {
      this.children[i].mapInPlace(callback);
    }
  };

  
}