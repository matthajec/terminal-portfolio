import { _dir, strPath } from '../store';
import TextLine from './TextLine';

let dir;
_dir.set([]);
_dir.subscribe(v => dir = v);

export function ls(children) {
  return new TextLine('standard', children.map(child => child.name));
}

export function cd(children, to) {
  if (!to) {
    return new TextLine('error', ['command expects second argument, try "help command-name" for more info']);
  }

  if (to === '.') {
    if (dir.length !== 0) {
      // remove the last item in the directory array
      _dir.update(d => d.slice(0, d.length - 1));
      strPath.update(d => d.slice(0, d.length - 1));
      return new TextLine('standard', ['changed directory']);
    } else {
      return new TextLine('error', ['cannot move up past the root directory']);
    }

  }

  const index = children.findIndex(c => c.name === to);

  if (index === -1) {
    return new TextLine('error', ['no directory found with that name']);
  }

  const type = children[index].type;

  if (type !== 'dir') {
    return new TextLine('error', ['no directory found with that name']);
  }

  _dir.update(d => [...d, index]);
  strPath.update(d => [...d, children[index].name]);
  return new TextLine('standard', ['changed directory']);
}

export function view(children, filename) {
  if (!filename) {
    return new TextLine('error', ['command expects second argument, try "help command-name" for more info']);
  }

  const index = children.findIndex(c => c.name === filename);

  if (index === -1) {
    return new TextLine('error', ['no text file found with that name']);
  }

  const type = children[index].type;

  if (type !== 'text') {
    return new TextLine('error', ['no text file found with that name']);
  }

  return children[index].getContents();
}

export function runFile(children, filename) {
  if (!filename) {
    return new TextLine('error', ['command expects second argument, try "help command-name" for more info']);
  }

  const index = children.findIndex(c => c.name === filename);

  if (index === -1) {
    return new TextLine('error', ['no executable file found with that name']);
  }

  const type = children[index].type;

  if (type !== 'executable') {
    return new TextLine('error', ['no executable file found with that name']);
  }

  return children[index].runFunc();
}