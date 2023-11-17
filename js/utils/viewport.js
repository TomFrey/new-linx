function listenToViewport() {

    //Die obere, linke Ecke ist im Viewport, nicht das ganze Element
    function isElementInViewport(element) {
        let rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.left <= (window.innerWidth || document.documentElement.clientWidth)
            // für das ganze Element innerhalb des Viewports
            // https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/
            // rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            // rect.right <= (window.innerWidth || document.documentElement.clientWidth);
        );
    }
       
    let elements = document.querySelectorAll(".animate-in-viewport");
        
    function toggleClassWhenElementInViewport() {
        for (let i = 0; i < elements.length; i++) {
            if (isElementInViewport(elements[i])) {
                elements[i].classList.add('visible');
            }
            /* Else-Bedinung entfernen, um .visible nicht wieder zu löschen, wenn das Element den Viewport verlässt. */
            else { 
                elements[i].classList.remove('visible');
            }
        }
    }
        
    window.addEventListener('load', toggleClassWhenElementInViewport);
    window.addEventListener('scroll', toggleClassWhenElementInViewport);
}



function positionYReached(yParameter) {
    let element = document.querySelector('header img');

    function toggleClassWhenPosReached() {
            if (window.scrollY > yParameter) {
                element.classList.add('scrolledDown');
            }
            else { 
                element.classList.remove('scrolledDown');
            }
    }
    
    window.addEventListener('load', toggleClassWhenPosReached);
    window.addEventListener('scroll', toggleClassWhenPosReached);
}


export {
    positionYReached,
    listenToViewport
};