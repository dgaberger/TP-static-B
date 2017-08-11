const mapboxgl = require("mapbox-gl");


function buildMarker(markerType, cordArr,map){
let markerDomEl = document.createElement('div')
markerDomEl.style.width = '32px';
markerDomEl.style.height = '39px';
console.log("HIT")
switch (markerType){
    case 'activity':
    markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)'
    break;

   case 'hotel':
    markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/D9574Cu.png)'
    break;

    case 'restaurant':
    markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/cqR6pUI.png)'
    
}

console.log(markerType)

new mapboxgl.Marker(markerDomEl).setLngLat(cordArr).addTo(map);
}

module.exports = {buildMarker}

