import Mouvement from "./mouvements";


export default class Athlete {
    nom: string;
    weight: number;
    squat: Mouvement;
    bench: Mouvement;
    deadlift: Mouvement;
    id: number;
    

    constructor(name: string, weight: number, s1:number, b1:number, d1:number, id:number) {
        this.nom = name;
        this.weight = weight;
        this.id = id;
        this.squat = new Mouvement(1, s1);
        this.bench = new Mouvement(2, b1);
        this.deadlift = new Mouvement(3, d1);
    }

    public getName() : string {
        return this.nom;
    }

    public getBodyWeight() : number {
        return this.weight;
    }

    public order(mouv: number) : [number, number, number] {
        switch (mouv) {
            case 0:
                return [this.squat.tries, this.squat.getNextWeight(), this.id];
            case 1:
                return [this.bench.tries, this.bench.getNextWeight(), this.id];
            case 2:
                return [this.deadlift.tries, this.deadlift.getNextWeight(), this.id];
        }
        return [-1, -1, -1];
    }

    public waitingForNewWeight(mouv: number) : boolean {
        switch (mouv) {
            case 0:
                return this.squat.getNextWeight() == -1;
            case 1:
                return this.bench.getNextWeight() == -1;
            case 2:
                return this.deadlift.getNextWeight() == -1;
        }
        return false;
    }

    public setNewWeight(weight: number, mouv: number) : void {
        switch (mouv) {
            case 0:
                this.squat.setWeight(weight);
                break;
            case 1:
                this.bench.setWeight(weight);
                break;
            case 2:
                this.deadlift.setWeight(weight);
                break;
        }
    }

    public setLight(light: number, mouv: number) : void {
        switch (mouv) {
            case 0:
                this.squat.setLights(light);
                break;
            case 1:
                this.bench.setLights(light);
                break;
            case 2:
                this.deadlift.setLights(light);
                break;
        }
    }

    public getLastLight(mouv: number) : number {
        switch (mouv) {
            case 0:
                return this.squat.getLastLight();
            case 1:
                return this.bench.getLastLight();
            case 2:
                return this.deadlift.getLastLight();
        }
        return -1;
    }

    public getNextWeight(mouv: number) : number {
        switch (mouv) {
            case 0:
                return this.squat.getNextWeight();
            case 1:
                return this.bench.getNextWeight();
            case 2:
                return this.deadlift.getNextWeight();
        }
        return -1;
    }

    public getCurrentWeight(mouv: number) : number {
        switch (mouv) {
            case 0:
                return this.squat.getCurrentWeight();
            case 1:
                return this.bench.getCurrentWeight();
            case 2:
                return this.deadlift.getCurrentWeight();
        }
        return -1;
    }
        
}