import './scss/main.scss'
import { toggleClassWhenElementInViewport, toggleClassWhenYPosReached } from './js/utils/viewportScrolling.js'
import { initNavigation } from './js/navigation.js'

// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './js/counter.js'

//  document.querySelector('#app main .vite-content').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//      <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

initNavigation();
toggleClassWhenYPosReached(40);
toggleClassWhenElementInViewport();
