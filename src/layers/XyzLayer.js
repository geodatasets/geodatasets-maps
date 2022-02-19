import GeodatasetsMapLayer  from "./geodatasets-map/GeodatasetsMapLayer";
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';

/**
 * @classdesc
 * Hola mundo2
 *
 * @api
 */
export default class XyzLayer extends GeodatasetsMapLayer{
    
    constructor(options){
        super(options)
        const baseLayerParams =  this.getBasePropertiesAsLiteralObject()
        let olLayer = new TileLayer({
            source: new XYZ({
                ...this._options
            }),
            ...baseLayerParams
        })
        this.olLayer = olLayer
    }
}