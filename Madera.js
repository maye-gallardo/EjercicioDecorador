import { MaterialDecorador } from "./MaterialDecorador";

export class Madera extends MaterialDecorador {
    constructor(arma) {
        super(arma);
        this.daño = 5;
    }
}