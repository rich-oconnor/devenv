
/**
 * Vehicle base class
 *
 * @export
 * @class Vehicle
 */
export  class Vehicle{
    constructor(spec = {}){
        this.numWheels = spec.numWheels || 0;
        this.rego = spec.rego || "";
        this.id = 0;
    }
}
