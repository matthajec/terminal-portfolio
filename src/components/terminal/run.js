export default function run(command) {
  function handleHelp() {
    return [
      'portfolio terminal, version 1.0.0',
      'available commands:',
      '',
      'help: see this list'
    ];
  }

  switch (command) {
    case 'help':
      return handleHelp();
      break;
    default:
      return [`Command '${command}' not found. To see a list of commands, run 'help'`];
  }
}