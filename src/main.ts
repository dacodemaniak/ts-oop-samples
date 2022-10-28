import { StagiaireModel } from "./models/stagiaire-model";

/**
 * main.ts : Entry point in oop-ts application
 * @author Aélion 2022-10
 * @version 1.0.0
 */
export class Main {
    public constructor() {
        const stagiaire: StagiaireModel = new StagiaireModel();
        stagiaire.setBirthDate(new Date(2042, 3, 30));
        console.log('Stagiaire : ' + stagiaire.getBirthDate());
    }
}

/// Je suis à l'extérieur de la classe
new Main();