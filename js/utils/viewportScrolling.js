/**
 * Jedes Element das die css Klasse 'animate-in-vieport' hat. Erhält, wenn das Element im Viewport ist die Klasse 'visible'.
 * 
 * Mögliche Konfigurationen:
 * - Wenn zusätzlich die Klasse 'whole-element-in-viewport' am Element hängt, dann wird 'visible' erst gesetzt, wenn das 
 *   ganze Element im viewport ist, sonst reicht die obere, linke Ecke.
 * 
 * - Wenn zusätzlich die Klasse 'animate-just-once' am Element hängt, dann wird 'visible' gesetzt, wenn das Element
 *   im Viewport ist, die Klasse wird aber nie mehr entfernt. Somit wird das Element nur einmal animiert.
 */
function toggleClassWhenElementInViewport() {
    let elements = document.querySelectorAll('.animate-in-viewport');

    //Die obere, linke Ecke ist im Viewport, nicht das ganze Element
    function isUpperLeftCornerInViewport(element) {
        let rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.left <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Das ganze Element innerhalb des Viewports
    // https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/
    function isWholeElementInViewport(element) {
        let rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function viewportCondition (element){
        if(element.classList.contains('whole-element-in-viewport')){
            return isWholeElementInViewport(element);
        } else {
            return isUpperLeftCornerInViewport(element);
        }
    }

    function toggleClasses() {
        elements.forEach((element) => {
            //Wenn Element im Viewport ist, 'visible' hinzufügen.
            if (viewportCondition(element)) {
                element.classList.add('visible');
            }

            //Wenn das Element mehrmals animiert werden soll, 'visible' wieder entfernen.
            if (!element.classList.contains('animate-just-once')) {
                if (!viewportCondition(element)) {
                    element.classList.remove('visible');
                }
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