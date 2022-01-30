import { Object } from "ol"
import Map from 'ol/Map';
import View from 'ol/View';
import ZoomControl from '../controls/Zoom'

export default class GeodatasetsMap extends Object {
    _olMap = undefined
    _options ={}
    /**
     * 
     * @param {Map} map - openlayers map
     */
    constructor(options ,map ){
        super()
        this._options = options || {}
        //aqui empezar a modificarle algunas cosas al mapa, si es que viene uno ya hecho, si no definirlo de este lado
        if(map === undefined){
            this._olMap = new Map({
                target: this._options.target || 'ol-map1',
                view: new View({
                    center: this._options.center || [0, 0],
                    zoom: this._options.zoom || 2,
                    projection: this._options.projection || 'EPSG:4326',
                }),
                controls:[new ZoomControl()]
            })
        }else{
            this._olMap = map
        }
        
        this._olMap.getTargetElement().classList.add('geods-map')
        //console.log(this._olMap.getTargetElement().classList)
        
    }

    getMap(){
        return this._olMap;
    }

    addGeodatasetsMapLayer(layer){
        this._olMap.addLayer(layer.olLayer)
    }
}

/**
 * Parametros sugerencia
 * permitir el scroll
 * agregar algun estilo a controles
 * get, set cosas de leyendas y datos
 */