import { Model } from './model';
import { POETypeModel } from './poe-type-model';
import { StagiaireModel } from './stagiaire-model';
export class POEModel extends Model {
    public title: string = '';
    private beginDate: Date = new Date();
    private endDate: Date = new Date();

    private stagiaires: Array<StagiaireModel> = [];
    // private stagiaires: StagiaireModel[] = [];

    private poeType: POETypeModel | undefined = undefined;

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

    public add(stagiaire: StagiaireModel): void {
        if (this.stagiaires.includes(stagiaire) !== true) {
            this.stagiaires.push(stagiaire);
        }
    }

    public setPOEType(poeType: POETypeModel): void {
        if (this.poeType === undefined) {
            this.poeType = poeType;
        }
    }

    public getPOEType(): POETypeModel | undefined {
        return this.poeType;
    }

    public listStagiaires(): string {
        let output: string  = 'Liste des stagiaires de ' + this.title + '\n';
        if (this.stagiaires.length) {
            for (const stagiaire of this.stagiaires) {
                output += `${stagiaire.firstName} ${stagiaire.lastName}\n`;
            }
        } else {
            output = 'Any intern in ' + this.title;
        }

        return output;
    }

    public toString(): string {
        return `
            ${this.title} du ${this.beginDate} au ${this.endDate}
        `;
    }
}