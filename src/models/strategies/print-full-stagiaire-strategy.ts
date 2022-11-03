import { DateHelper } from "../../helpers/date-helper";
import { StagiaireModel } from "../stagiaire-model";
import { IPrintStagiaireStrategy } from "./i-print-stagiaire-strategy";

export class PrintFullStagiaireStrategy implements IPrintStagiaireStrategy {
    public print(stagiaire: StagiaireModel): string {
        return `${stagiaire.firstName} ${stagiaire.lastName}
            Born at : ${DateHelper.toSlashEuropeanDate(stagiaire.getBirthDate())}
            Joined ${stagiaire.getPOE().title}
        `;
    }
    
}