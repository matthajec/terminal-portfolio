import TextLine from './TextLine';

export function help(command) {
  switch (command) {
    case 'help':
      return new TextLine('standard', ['seems like you got it']);

    case 'clear':
      return new TextLine('standard', [
        'clears the terminal',
        'expects 0 arguments'
      ]);
    case 'ls':
    case 'clear':
      return new TextLine('standard', [
        'lists the files in the current directory',
        'expects 0 arguments'
      ]);

    case 'cd':
      return new TextLine('standard', [
        'changes the current directory relatively, can only move to the immediate child or parent',
        'expects 1 argument:',
        '1: direct child directory name or "." to move up'
      ]);

    case 'view':
      return new TextLine('standard', [
        'displays the contents of a .txt file',
        'expects 1 argument:',
        '1: filename of .txt file in the current directory, including extension'
      ]);

    case 'run':
      return new TextLine('standard', [
        'runs a .exec file',
        'expects 1 argument:',
        '1: filename of a .exec file in the current directory, including extension'
      ]);

    default:
      return new TextLine('standard', [
        'porfolio terminal - version 1.0.0',
        'use "help command-name" for more info',
        'commands:',
        '',
        'help: show this menu',
        'clear: clear the terminal',
        'ls: list the files in the current directory',
        'cd: change the current directory',
        'view: view the contents of .txt files',
        'run: run a .exec file'
      ]);
  }
}