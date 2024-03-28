const mapDomElement = document.getElementById('map');

async function putGoogleMapScriptIntoHtml() {
    if (mapDomElement !== null) {
        try {
            // Lade die Konfigurationsdatei
            const response = await fetch('/config.json');
            const config = await response.json();

            // Setze den API-Schlüssel
            const apiKey = config.GOOGLE_MAPS_API_KEY;

            const script = document.createElement('script');
            script.innerText = '(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});' +
                               'var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));' +
                               'e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);' + 
                               'a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));' + 
                               'a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})(' +
                               '{' +
                                   ' key: "' + apiKey + '", ' +
                                '});';

            document.body.appendChild(script);
        } catch (error) {
            console.error('Fehler beim Laden der Konfigurationsdatei oder beim Hinzufügen des Google Maps API-Skripts:', error);
        }
    }
}


export {
    putGoogleMapScriptIntoHtml
};