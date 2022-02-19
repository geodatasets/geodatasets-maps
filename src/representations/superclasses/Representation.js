export default class Representation{
    _options = undefined;
    _name = undefined;
    constructor(options){
        this._options = options || {};
        
    }

    set name(name){
        this._name = name;
    }

    get name(){
        return this._name
    }
}