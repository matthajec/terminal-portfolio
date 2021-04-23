export default class FSNode {
  constructor(
    name,
    func,
    contents,
    children
  ) {
    this.name = name;
    this.func = func;
    this.contents = contents;
    this.parent = null;

    this.children = [];
    if (children) {
      this.children = children;
    }

    switch (name.split('.')[1]) {
      case 'txt':
        this.type = 'text';
        break;

      case 'link':
        this.type = 'link';
        break;

      case 'exec':
        this.type = 'executable';
        break;

      default:
        this.type = 'dir';
        break;
    }

    return this;
  }

  addChild(node) {
    node.parent = this;

    if (this.type === 'dir') {
      return this.children.push(node);
    }
    throw new Error('this node does not support adding children');
  }

  getChildren() {
    if (this.type === 'dir') {
      return this.children;
    }
    throw new Error('this node does not support getting children');
  }

  getType() {
    return this.type;
  }

  getContents() {
    if (this.type === 'text' || this.type === 'link') {
      return this.contents;
    }
    throw new Error('this node does not support getting contents');
  }

  runFunc() {
    return this.func();
  }

  debugLog() {
    console.log(this);
  }
}