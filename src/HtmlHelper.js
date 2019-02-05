import {Vehicle} from  "./Vehicle";

export class Drone extends Vehicle {
    constructor(spec = {}) {
        super(spec);
        this.numPropellors = spec.numPropellors || 0;
    }
}


