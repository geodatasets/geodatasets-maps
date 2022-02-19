import GeodatasetsMapLayer from "../geodatasets-map/GeodatasetsMapLayer"
export default class ClasificableVectorClientLayer extends GeodatasetsMapLayer {

    _fastRender=undefined
    _columnId = undefined
    _allFeatures =undefined
    _allFeaturesById =undefined


    constructor(options){
        super(options)
        this._fastRender = options.fastRender ? true : false;
        this._columnId = options.columnId || ""

    }

    
}