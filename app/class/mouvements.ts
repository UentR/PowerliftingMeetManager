export default class Mouvement {
    id: number;
    w1: number;
    w2: number=-1;
    w3: number=-1;
    l1: number=0;
    l2: number=0;
    l3: number=0;
    tries: number=0;


    constructor(id: number, w1: number) {
        this.id = id;
        this.w1 = w1;
    }

    public setLights(light: number) : void {
        switch (this.tries) {
            case 0:
                this.l1 = light;
                break;
            case 1:
                this.l2 = light;
                break;
            case 2:
                this.l3 = light;
                break;
        }
        this.tries++;
    }

    public getLastLight() : number {
        switch (this.tries) {
            case 1:
                return this.l1;
            case 2:
                return this.l2;
        }
        return -1;
    }


    public setWeight(weight: number) : void {
        switch (this.tries) {
            case 0:
                this.w2 = weight;
                break;
            case 1:
                this.w3 = weight;
                break;
        }
    }

    public getCurrentWeight() : number {
        switch (this.tries) {
            case 0:
                return this.w1;
            case 1:
                return this.w2;
            case 2:
                return this.w3;
        }
        return -1;
    }

    public getNextWeight() : number {
        switch (this.tries) {
            case 0:
                return this.w2;
            case 1:
                return this.w3;
        }
        return -1;
    }
}