import { _dir } from '../store';

let dir;
_dir.set([]);
_dir.subscribe(v => dir = v);

export function ls(children) {
  return children.map(child => child.name);
}

export function cd(children, to) {
  if (!to) {
    return ['command must be provided with a second argument'];
  }

  if (to === '.') {
    if (dir.length !== 0) {
      // remove the last item in the directory array
      _dir.update(d => d.slice(0, d.length - 1));
      return ['changed directory'];
    } else {
      return ['cannot move up past the root directory'];
    }

  }

  const index = children.findIndex(c => c.name === to);

  if (index === -1) {
    return ['no directory found with that name'];
  }

  const type = children[index].type;

  if (type !== 'dir') {
    return ['no directory found with that name'];
  }

  _dir.update(d => [...d, index]);
  return ['changed directory'];
}

export function view(children, filename) {
  const index = children.findIndex(c => c.name === filename);

  if (index === -1) {
    return ['no text file found with that name'];
  }

  const type = children[index].type;

  if (type !== 'text') {
    return ['no text file found with that name'];
  }

  return children[index].getContents();
}

export function runFile(children, filename) {
  const index = children.findIndex(c => c.name === filename);

  if (index === -1) {
    return ['no executable file found with that name'];
  }

  const type = children[index].type;

  if (type !== 'executable') {
    return ['no executable file found with that name'];
  }

  return children[index].runFunc();
}