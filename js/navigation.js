function jumpBackToLastUrl(){
    history.back();
}

function getNameOfCurrentSite() {
    if (location.pathname.split('/')[2] == undefined) {
        return 'startseite';
    }
   return location.pathname.split('/')[2].split('.')[0];
}


function setSettingsDependingOnUrl() {
    const SELECTED = 'js-isSelected';
    const whereAmI = getNameOfCurrentSite();
    const allLinksFromMainNavigation = [];

    const angebote = document.querySelector('nav ul li.nav-item__angebote a');
    allLinksFromMainNavigation.push(angebote);
    const paedagogik = document.querySelector('nav ul li.nav-item__paedagogik a');
    allLinksFromMainNavigation.push(paedagogik);
    const ort = document.querySelector('nav ul li.nav-item__ort a');
    allLinksFromMainNavigation.push(ort);
    const uns = document.querySelector('nav ul li.nav-item__uns a');
    allLinksFromMainNavigation.push(uns);

    allLinksFromMainNavigation.forEach((url) => {
        url.classList.remove(SELECTED);
    });

    switch (whereAmI) {
        case 'uns':
            uns.classList.add(SELECTED);
            break;

        case 'paedagogik':
            paedagogik.classList.add(SELECTED);
            break;

        case 'ort':
            ort.classList.add(SELECTED);
            break;

        default: // Startseite sind die Angebote
            angebote.classList.add(SELECTED);
    }
}



function initNavigation(){
    setSettingsDependingOnUrl();

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