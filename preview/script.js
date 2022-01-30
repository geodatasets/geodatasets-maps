import {GeodatasetsMap}  from "../src/index";
import XyzLayer from "../src/layers/XyzLayer"

let mapa1 = new GeodatasetsMap({target:"mapa-1"})
console.log(mapa1)
let osmlayer = new XyzLayer({
    url:'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    visible: true
})
mapa1.addGeodatasetsMapLayer(osmlayer)


