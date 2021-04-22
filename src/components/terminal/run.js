import { _dir } from './store';

let dir;

_dir.subscribe(value => dir = value);


export default function run(command) {
  function handleHelp() {
    return [
      'portfolio terminal, version 1.0.0',
      'available commands:',
      '',
      'help: see this list',
      'ls: see the files in the current directory'
    ];
  }

  function handleLs() {
    switch (dir) {
      case '/':
        return [
          'about',
          'projects',
          'resume'
        ];
    }
  }

  function handleCd() {
    _dir.update(() => command.split(' ')[1]);
    return [];
  }

  console.log(command.substring(0, 2));

  const base = command.split(' ')[0];

  switch (base) {
    case 'help':
      return handleHelp();

    case 'ls':
      return handleLs();

    case 'cd':
      return handleCd();

    default:
      return [`Command '${command}' not found. To see a list of commands, run 'help'`];
  }
}