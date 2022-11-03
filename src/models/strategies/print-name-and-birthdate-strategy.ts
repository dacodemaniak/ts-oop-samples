import { StagiaireModel } from "../stagiaire-model";
import { IPrintStagiaireStrategy } from "./i-print-stagiaire-strategy";

export class PrintNameAndBirthdateStrategy implements IPrintStagiaireStrategy {
    public print(stagiaire: StagiaireModel): string {
        return `${stagiaire.lastName} born ${stagiaire.getBirthDate().getFullYear()}`;
    }
    
}