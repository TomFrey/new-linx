import './scss/main.scss'
import { toggleClassWhenElementInViewport, toggleClassWhenYPosReached } from './js/utils/viewportScrolling.js'
import { initNavigation } from './js/navigation.js'

initNavigation();
toggleClassWhenYPosReached(40);
toggleClassWhenElementInViewport();
