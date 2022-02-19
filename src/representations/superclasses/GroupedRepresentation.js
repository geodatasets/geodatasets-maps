import Representation from "./Representation"

export default class GroupedRepresentation extends Representation{
    
    _sourceClass = undefined;

    constructor(options){
        super(options);
    }

    set sourceClass(sourceClass){
        this._sourceClass = sourceClass;
    }

    get sourceClass(){
        return this._sourceClass;
    }
    

}