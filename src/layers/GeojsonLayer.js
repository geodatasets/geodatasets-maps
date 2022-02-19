import ClasificableVectorClientLayer from "./clasificable-vector-client/ClasificableVectorClientLayer"
import VectorLayer from "ol/layer/Vector"
import VectorImageLayer from "ol/layer/VectorImage"
import GroupedRepresentation from "../representations/superclasses/GroupedRepresentation";
import NormalRepresentation from "../representations/Normal";
import VectorSource from "ol/source/Vector";
import GeoJSON from 'ol/format/GeoJSON';

/**
 * @classdesc
 * Hola mundo
 *
 * @api
 */
export default class GeojsonLayer extends ClasificableVectorClientLayer {
    _geojsonObject = undefined;
    _pathToFile = undefined;
    _representation = undefined;
    

    constructor(options){
        super(options)
        //primero se busca geojsonObject y si no lo hay se busca url
        this._geojsonObject = this._options.geojsonObject || undefined
        this._pathToFile = this._options.url || ""
        this._representation = this._options.representation || new NormalRepresentation({})

        const baseLayerParams =  this.getBasePropertiesAsLiteralObject()
        let LayerClassToInstance = this._fastRender ? VectorImageLayer : VectorLayer
        let source = this._createSource()
        let olLayer = new LayerClassToInstance({
            source: source,
            ...baseLayerParams
        })
        this.olLayer = olLayer


    }



    _createSource(){
        let source = this._geojsonObject !== undefined 
            ? new VectorSource({features:new GeoJSON().readFeatures({...this._geojsonObject})})
            : new VectorSource({ url: this._pathToFile,format:new GeoJSON()})
        //revisar si la representacion es agrupada
        if(this._representation instanceof GroupedRepresentation){
            const ClassSource = this._representation.sourceClass;
            const options = this._representation._options
            return new ClassSource({
                source: source,
                ...options,
            })
        }

        //guardar las cosas en el vector source (esto tambien debe pasar cuando se agregan features, y cuando se quitan)
        //(no es practico quitar y poner todo el source)


        return source;

        
    }
}