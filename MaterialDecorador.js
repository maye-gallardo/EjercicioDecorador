import { Arma } from './Arma';

export class MaterialDecorador extends Arma {
    constructor(arma) {
        super();
        this.arma = arma;
    }

    caculadorPuntaje() {
        return this.daño + this.arma.caculadorPuntaje();
    }
}