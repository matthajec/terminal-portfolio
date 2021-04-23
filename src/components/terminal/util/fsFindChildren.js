import rootFs from './fsInit';

export default function fsFindChildren(dir) {
  let currentNode = rootFs;
  let children = rootFs.children;

  dir.forEach((nextNode) => {
    currentNode = currentNode.children[nextNode];
    children = currentNode.children;
  });

  return children;
}
