import { StagiaireModel } from "../stagiaire-model";
import { IPrintStagiaireStrategy } from "./i-print-stagiaire-strategy";

export class PrintNameLastnameStrategy implements IPrintStagiaireStrategy {
    public print(stagiaire: StagiaireModel): string {
        return `${stagiaire.firstName} ${stagiaire.lastName}`;
    }
    
}