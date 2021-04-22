import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import image from '@rollup/plugin-image';
import scss from 'rollup-plugin-scss';

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
  ],
};