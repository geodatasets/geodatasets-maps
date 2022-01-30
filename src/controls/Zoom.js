import Control from 'ol/control/Control'

export default class ZoomControl extends Control{
    _options = undefined
    constructor(options){
        
        var button = document.createElement('button');
        button.className = "geods-zoom-button"
        button.innerHTML = '<span class="geods-icon-zoom-in"></span>'//'<img src="icons/acercar.svg" height="25px" width="25px"/>';

        var button2 = document.createElement('button');
        button2.className = "geods-zoom-button"
        button2.innerHTML = '<span class="geods-icon-zoom-out"></span>'

        var element = document.createElement('div');
        element.className = 'geods-zoom ol-unselectable ol-control';
        element.appendChild(button);
        element.appendChild(button2);

        super({element:element,target:undefined})
        this._options = options || {};
        button.addEventListener('click', this.handleZoomIn.bind(this), false);
        button2.addEventListener('click', this.handleZoomOut.bind(this), false);
    }

    handleZoomIn () {
        this.getMap().getView().animate({zoom:this.getMap().getView().getZoom()+1,duration:250})
        
    };

    handleZoomOut () {
        this.getMap().getView().animate({zoom:this.getMap().getView().getZoom()-1,duration:250})
        
    };
}