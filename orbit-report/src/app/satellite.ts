export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;

    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
		this.name = name;
        this.orbitType = orbitType;
		this.type = type;
		this.operational = operational;
        this.launchDate = launchDate;
   }

    shouldShowWarning (): boolean {
        let debris: string = "Space Debris"
        if (this.type.toLowerCase() === debris.toLocaleLowerCase()) {
            return true;
        } else {
        return false;
        }
    }

    stripes(arr): boolean {
    return arr.indexOf(this) % 2 === 0 && this.type.toLowerCase() !== 'space debris';
    }
}