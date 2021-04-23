import { _dir } from './store';
import findChildren from './util/fsFindChildren';
import {
  ls,
  cd,
  view,
  runFile
} from './util/fsCommands';
import {
  help
} from './util/infoCommands';

// directories are stored as an array of indexes, with an empty array being the root node in the file tree, and the indexes representing subsequent children
// for example, [0, 5] would be the child at index 5 of the first node in the root directory
let dir;
_dir.subscribe(v => dir = v);


// the clear command is handled in Terminal.svelte and this is not run if it's called
export default function run(command) {
  const base = command.split(' ')[0];
  const params = command.split(' ').slice(1);
  const children = findChildren(dir);

  switch (base) {
    case 'ls':
      return ls(children);

    case 'cd':
      return cd(children, params[0]);

    case 'view':
      return view(children, params[0]);

    case 'run':
      return runFile(children, params[0]);


    case 'help':
      return help(params[0]);


    default:
      return [`${base}: command not found`];
  }
}