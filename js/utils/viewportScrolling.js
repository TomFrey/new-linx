

function toggleClassWhenElementInViewport() {
    let elements = document.querySelectorAll('.animate-in-viewport');

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
      
    function toggleClasses() {
        elements.forEach((element) => {
            if (isElementInViewport(element)) {
                element.classList.add('visible');
            }
            /* Else-Bedinung entfernen, um .visible nicht wieder zu löschen, wenn das Element den Viewport verlässt. */
            else { 
                element.classList.remove('visible');
            }
        })
    }
        
    window.addEventListener('load', toggleClasses);
    window.addEventListener('scroll', toggleClasses);
}


function toggleClassWhenYPosReached(yPos){
    let scrolling = false;
    let elements = document.querySelectorAll('.squeeze-header-when-scrolled-down');

    function yPositionBiggerThen(yParameter) {
        if (window.scrollY > yParameter) {
            return true;
        }
        return false;
    }
    
    function toggleClasses(){
        elements.forEach(element => {
            if (yPositionBiggerThen(yPos)) {
                element.classList.add('animate');
            } else {
                element.classList.remove('animate');
            }
        });
    }
    
    // window.addEventListener('scroll', (event) => {
    //     scrolling = true;
    //     setInterval(() => {
    //         if (scrolling) {
    //             scrolling = false;
    //             toggleClasses();
    //         }
    //     },300);
    // });

    window.addEventListener('scroll', (event) => {
        toggleClasses();
    });
}



export {
    toggleClassWhenElementInViewport,
    toggleClassWhenYPosReached
};