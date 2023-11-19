// vite.config.js
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

export default {
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'partials'),
    }),
  ],

  build: {
    rollupOptions: {
      input: {
        a: resolve(__dirname, 'index.html'),
        b: resolve(__dirname, 'seite/paedagogik.html'),
        c: resolve(__dirname, 'seite/ort.html'),
        d: resolve(__dirname, 'seite/uns.html')
      }
    }
  }
};