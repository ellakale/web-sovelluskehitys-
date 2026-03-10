import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        bmi: resolve(__dirname, 'bmi.html'),
        formit: resolve(__dirname, 'formit.html'),
        login: resolve(__dirname, 'login.html'),
        päiväkirja: resolve(__dirname, 'paivakirja.html'),
        viikoteh: resolve(__dirname, 'viikkotehtavat.html'),

        //viikkoharjoitukset
        flexbox: resolve(__dirname, 'viikkoharjoitukset/flexbox.html'),
        flexboxlayout: resolve(__dirname, 'viikkoharjoitukset/flexbox-layout.html'),
        rajapinnat: resolve(__dirname, 'viikkoharjoitukset/rajapinnat.html'),
        rajapinnatv2: resolve(__dirname, 'viikkoharjoitukset/rajapinnat-v2.html'),
        responsiivisuus: resolve(__dirname, 'viikkoharjoitukset/responsiivisuus.html')

      },
    },
  },
  // Public base path could be set here too:
  //base: '/~ullamu/hyte/',
  base: './',
});
