export class POEModel {
    public title: string = '';
    private beginDate: Date = new Date();
    private endDate: Date = new Date();

    /**
     * Sets the beginning and the end of this POE
     *  - If param beginDate is after param endDate, dates will be switched
     * 
     * @param beginDate begin of this POE
     * @param endDate  end of this POE
     */
    public setDates(beginDate: Date, endDate: Date): void {
        if (beginDate > endDate) {
            this.beginDate = endDate;
            this.endDate = beginDate;
        } else {
            this.beginDate = beginDate;
            this.endDate = endDate;
        }
    }

    public getBeginDate(): Date {
        return this.beginDate;
    }

    public getEndDate(): Date {
        return this.endDate;
    }

    public toString(): string {
        return `
            ${this.title} du ${this.beginDate} au ${this.endDate}
        `;
    }
}