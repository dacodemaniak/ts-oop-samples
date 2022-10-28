import { POEModel } from "./models/poe-model";
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
        stagiaire.lastName = 'Aubert';
        stagiaire.firstName = 'Jean-Luc';
        console.log('Stagiaire : ' + stagiaire.getBirthDate());

        const poe: POEModel = new POEModel();
        poe.title = 'Fullstack Java Angular';
        poe.setDates(new Date(2023, 0, 27), new Date(2022, 9, 24));

        stagiaire.poe = poe;

        const bond: StagiaireModel = new StagiaireModel();
        bond.firstName = 'James';
        bond.lastName = 'Bond';
        bond.setBirthDate(new Date(1900, 0, 7));
        bond.poe = poe;

        console.log(stagiaire.toString());
        console.log(bond.toString());
    }
}

/// Je suis à l'extérieur de la classe
new Main();