import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import image from '@rollup/plugin-image';
import scss from 'rollup-plugin-scss';

function serve() {
  // Keep a reference to a spawned server process
  let server;

  function toExit() {
    // kill the server if it exists
    if (server) server.kill(0);
  }

  return {
    writeBundle() {
      if (server) return;
      // Spawn a child server process
      server = require('child_process').spawn(
        'npm',
        ['run', 'start', '--', '--dev'],
        {
          stdio: ['ignore', 'inherit', 'inherit'],
          shell: true,
        }
      );

      // Kill server on process termination or exit
      process.on('SIGTERM', toExit);
      process.on('exit', toExit);
    },
  };
}

export default {
  input: 'src/main.js',
  output: {
    file: 'public/build/bundle.js',
    format: 'iife',
    name: 'app',
  },
  plugins: [
    image(),
    svelte({
      include: 'src/**/*.svelte',
    }),
    resolve({ browser: true }),
    scss({ output: 'public/build/vendor.css' }),
    serve(),
    livereload('public'),
  ],
};