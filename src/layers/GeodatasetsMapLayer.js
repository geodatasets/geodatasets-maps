

//var crypto = require('crypto');

export default class GeodatasetLayer {
    _olLayer=undefined
    _options=undefined
    _visible=undefined
    _opacity=undefined

    set olLayer(olLayer){
        this._olLayer = olLayer;
    }

    get olLayer(){
        return this._olLayer;
    }

    set visible(visible){
        this._visible = visible
        this._olLayer.setVisible(visible)
    }

    get visible(){
        return this._visible
    }

    set opacity(opacity){
        this._opacity = opacity
        this._olLayer.setOpacity(opacity)
    }

    get opacity(){
        return this._opacity
    }
    

    constructor(options){
        this._options = options || {}
        this._visible = options.visible ? true : false;
        this._opacity = options.opacity || 1
        //console.log(crypto.randomUUID(),    )
    }


    getBasePropertiesAsLiteralObject(){
        return {
            visible: this.visible,
            opacity: this.opacity,

        }
    }
}