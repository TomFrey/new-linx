import { putGoogleMapScriptIntoHtml } from '/js/services/setMapsApiKey.js'

let map;
const mapDomElement = document.getElementById('map');

async function initMap() {
  // The location of mitLinXlernen
  const position = { lat: 46.80722791563473, lng: 9.312256329089417 }; 
  const { Map } = await google.maps.importLibrary('maps');
  const { AdvancedMarkerElement } = await google.maps.importLibrary('marker');

  // The map, centered at mitLinXlernen
  map = new Map(mapDomElement, {
    zoom: 9,
    center: position,
    mapId: '6432480babd2c364',
  });

  const marker = new google.maps.marker.AdvancedMarkerElement({
    map,
    position: position,
    title: 'mitLinXlernen',
  });
}


async function implementGoogleMaps() {
  if (mapDomElement !== null) {
    await putGoogleMapScriptIntoHtml();
    initMap();
  }
}


export {
    implementGoogleMaps
};
