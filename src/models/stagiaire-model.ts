export class StagiaireModel {
    public firstName: string = '';
    public lastName: string = '';
    private birthDate: Date = new Date();
    public poe: string = '';

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

    public setLastName(lastName: string): void {
        this.lastName = lastName;
    }

    public getLastName(): string {
        return this.lastName;
    }
}