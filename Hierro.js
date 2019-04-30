import { MaterialDecorador } from "./MaterialDecorador";

export class Hierro extends MaterialDecorador {
    constructor(arma) {
        super(arma);
        this.daño = 10;
    }
}