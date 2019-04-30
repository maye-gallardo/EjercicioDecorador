import { MaterialDecorador } from "./MaterialDecorador";

export class Fuego extends MaterialDecorador {
    constructor(arma) {
        super(arma);
        this.daño = 15;
    }
}