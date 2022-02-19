import Representation from "./superclasses/Representation";

export default class NormalRepresentation extends Representation{

    /**
     * La represntacion basica, o por defult, de las geometrias basicas
     * @param {*} options 
     */
    constructor(options){
        super(options)
        this.name = 'NORMAL'
        // si no se definen parametros, seran random
    }
}