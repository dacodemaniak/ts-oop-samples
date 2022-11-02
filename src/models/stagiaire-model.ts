import { Model } from "./model";
import { POEModel } from "./poe-model";

export class StagiaireModel extends Model {
    public firstName: string = '';
    public lastName: string = '';
    private birthDate: Date = new Date();
    private poe: POEModel = new POEModel();

    public setBirthDate(birthDate: Date): void {
        const today: Date = new Date();
        const birthDateYear: number = birthDate.getFullYear();

        if (today.getFullYear() > birthDateYear) {
            this.birthDate = birthDate;
        }
    }

    public getBirthDate(): Date {
        return this.birthDate;
    }

    public setPOE(poe: POEModel): void {
        this.poe = poe;
        this.poe.add(this);
    }
    
    /**
     * @override
     * @see Model::toString()
     * 
     * @returns string
     */
    public toString(): string {
        return `${this.firstName} ${this.lastName}
            ${this.birthDate.getDate()}-${this.birthDate.getMonth() + 1}-${this.birthDate.getFullYear()} 
            ${this.poe.toString()}
        `;
    }
}