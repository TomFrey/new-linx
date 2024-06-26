import './scss/main.scss'
import { toggleClassWhenElementInViewport, toggleClassWhenYPosReached } from './js/utils/viewportScrolling.js'
import { initNavigation } from './js/navigation.js'
import { initContact } from './js/modules/handleContact.js'
import { implementGoogleMaps } from './js/modules/googleMaps.js'
import '@material/web/checkbox/checkbox.js';
import '@material/web/textfield/outlined-text-field.js';
import '@material/web/button/outlined-button.js';

initNavigation();
toggleClassWhenYPosReached(40);
toggleClassWhenElementInViewport();
initContact();
implementGoogleMaps();