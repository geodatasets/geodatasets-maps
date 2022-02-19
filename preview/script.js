import {GeodatasetsMap,XyzLayer,GeojsonLayer} from "../src";


import "../src/styles/all-with-ol.scss";

console.log("generando mapa 1")

let mapa1 = new GeodatasetsMap({target:"mapa-1"})
console.log(mapa1)
let osmlayer = new XyzLayer({
    url:'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    visible: true
})
mapa1.addGeodatasetsMapLayer(osmlayer)
mapa1.addGeodatasetsMapLayer(new GeojsonLayer({
    url:"assets/countries.geojson",
    visible:true,
    fastRender:true
}))

