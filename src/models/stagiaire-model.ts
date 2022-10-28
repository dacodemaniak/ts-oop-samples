import { POEModel } from "./poe-model";

export class StagiaireModel {
    public firstName: string = '';
    public lastName: string = '';
    private birthDate: Date = new Date();
    public poe: POEModel = new POEModel();

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

    public toString(): string {
        return `${this.firstName} ${this.lastName}
            ${this.birthDate.getDate()}-${this.birthDate.getMonth() + 1}-${this.birthDate.getFullYear()} 
            ${this.poe.toString()}
        `;
    }

    public toString2(): string {
        return this.firstName + ' ' + this.lastName + '\n' +
            this.birthDate.getDate() + '/' + this.birthDate.getMonth() + 1 + '/' + this.birthDate.getFullYear() + '\n' +
            this.poe.toString();
    }
}