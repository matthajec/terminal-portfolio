import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import css from 'rollup-plugin-css-only';
import image from '@rollup/plugin-image';
import { generateSW } from 'rollup-plugin-workbox';

export default {
  input: 'src/main.js',
  output: {
    file: 'public/build/bundle.js',
    format: 'iife',
    name: 'app',
  },
  plugins: [
    css({ output: 'vendor.css' }),
    image(),
    svelte({
      include: 'src/**/*.svelte',
    }),
    resolve({ browser: true }),
    generateSW({
      swDest: 'public/build/service-worker.js',
      globDirectory: 'public'
    })
  ],
};