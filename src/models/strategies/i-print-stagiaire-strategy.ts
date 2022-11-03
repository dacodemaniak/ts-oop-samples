import { StagiaireModel } from "../stagiaire-model";

export interface IPrintStagiaireStrategy {
    print(stagiaire: StagiaireModel): string;
}