import Athlete from "./athlete";


export default class Categories {
    
    private weightClass: string;
    private athletes: Array<Athlete>;
    private currentMouvement: number = 0;
    private waitingForValidation: Array<Athlete>;
    

    constructor(name: string) {
        this.weightClass = name;
        this.athletes = new Array<Athlete>();
        this.waitingForValidation = new Array<Athlete>();
    
    }

    public addAthlete(athlete: Athlete) : void {
        this.athletes.push(athlete);
        this.reorder();
    }

    public getAthletes() : Array<Athlete> {
        return this.athletes;
    }

    public getAthlete(id: number) : Athlete {
        return this.athletes[id];
    }

    public getMouvement() : number {
        return this.currentMouvement;
    }

    public getWaitingForValidation() : Array<Athlete> {
        return this.waitingForValidation;
    }

    public setLights(lights: number) : void {
        this.athletes[0].setLight(lights, this.currentMouvement);
        let a = this.athletes.shift();
        if (a != undefined) {
            this.waitingForValidation.push(a);
        }
    }

    private reorder() : void {
        this.athletes.sort((a, b) => {
            const keyA = a.order(this.currentMouvement);
            const keyB = b.order(this.currentMouvement);
            
            if (keyA[0] !== keyB[0]) {
                return keyA[0] - keyB[0];
            }

            if (keyA[1] !== keyB[1]) {
                return keyA[1] - keyB[1];
            }

            return keyA[2] - keyB[2];
        });
    }
}