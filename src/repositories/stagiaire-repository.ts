import { StagiaireModel } from "../models/stagiaire-model";
import { Repository } from "./repository"

export class StagiaireRepository extends Repository {
    /**
     * @override Repository::add() method
     * 
     * Add a Stagiaire object to the collection if not present
     * @param stagiaire Stagiaire to add to the collection if not present
     */
    public add(stagiaire: StagiaireModel): void {
        if (this.collection.includes(stagiaire) === false) {
            this.collection.push(stagiaire);
        }
    }
}