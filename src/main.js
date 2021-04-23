import App from './App.svelte';
import './global.scss';

const app = new App({
  target: document.body,
  props: {
    name: 'Daffodil',
  },
});

export default app;