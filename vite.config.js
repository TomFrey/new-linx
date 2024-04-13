// vite.config.js
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

export default {
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'partials'),
    }),
  ],


  //Seiten die in der Input Option aufgeführt werden, werden in den Dist genommen und die Partials von Handlebar werden korrekt eingesetzt.
  //Ist eine Seite im public Ordner werden diese File auto. in den Dist genommen, aber die Partials werden nicht eingesetzt. Führt man die 
  //File im public Ordner in den Input Optionen auf 'd: resolve(__dirname, 'public/uns.html')' sind sie doppelt im Dist Ordner.
  build: {
    rollupOptions: {
      input: {
        a: resolve(__dirname, 'index.html'),
        b: resolve(__dirname, 'seite/paedagogik.html'),
        c: resolve(__dirname, 'seite/ort.html'),
        d: resolve(__dirname, 'seite/uns.html'),
        e: resolve(__dirname, 'seite/impressum.html'),
        f: resolve(__dirname, 'seite/datenschutz.html'),
        g: resolve(__dirname, 'seite/kontakt.html')
      }
    }
  }
};