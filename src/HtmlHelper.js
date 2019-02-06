import {Vehicle} from  "./Vehicle";

/**
 * A Drone vehicle
 *
 * @export
 * @class Drone
 * @extends {Vehicle}
 */
export class Drone extends Vehicle {
    constructor(spec = {}) {
        super(spec);
        this.numPropellors = spec.numPropellors || 0;
        this.stable = makeStable();
    }


}

function makeStable(){
    return true;
}


