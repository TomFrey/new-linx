function jumpBackToLastUrl(){
    history.back();
}


function initNavigation(){
    let overlayCloseButtons = document.querySelectorAll('.overlay-box-close');
   
    if (overlayCloseButtons !== null) {
        overlayCloseButtons.forEach((overlayCloseButton) => {
            overlayCloseButton.addEventListener('click', (event) => {
                jumpBackToLastUrl();
            });
        });
    }
}


export {
   initNavigation
};