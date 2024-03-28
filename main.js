import './scss/main.scss'
import { toggleClassWhenElementInViewport, toggleClassWhenYPosReached } from './js/utils/viewportScrolling.js'
import { initNavigation } from './js/navigation.js'
import { implementGoogleMaps } from './js/modules/googleMaps.js'
//import { getEnviromentVariable } from './js/services/getEnvVariable.js'


//getEnviromentVariable('GOOGLE_MAPS_API_KEY');
initNavigation();
toggleClassWhenYPosReached(40);
toggleClassWhenElementInViewport();
implementGoogleMaps();
  

