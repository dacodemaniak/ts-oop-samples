import { Printable } from "../interfaces/printable";
import { StagiaireModel } from "../models/stagiaire-model";
import { Repository } from "./repository"

export class StagiaireRepository extends Repository<StagiaireModel> implements Printable {
    /**
     * @override Repository::add() method
     * 
     * Add a Stagiaire object to the collection if not present
     * @param stagiaire Stagiaire to add to the collection if not present
     */
    public add(stagiaire: StagiaireModel): void {
        if (this.collection.includes(stagiaire) === false) {
            super.add(stagiaire);
        }
    }

    /**
     * @see Printable interface
     * @returns string as "Items : 999, firstElement is: {}"
     */
    public toString(): string {
        let output: string = `Items : ${this.getSize()}\n`;
        if (this.getSize()) {
            const firstItem: StagiaireModel = this.findFirst()!; // ! means required not null
            output += 'First item : ' + firstItem.toString();
        }
        return output;
    }
}