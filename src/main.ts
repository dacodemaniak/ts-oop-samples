import { POEModel } from "./models/poe-model";
import { POETypeModel } from "./models/poe-type-model";
import { StagiaireModel } from "./models/stagiaire-model";

/**
 * main.ts : Entry point in oop-ts application
 * @author Aélion 2022-10
 * @version 1.0.0
 */
export class Main {
    public constructor() { 
        
        const poei: POETypeModel = new POETypeModel();
        poei.title = 'POEI';

        const poec: POETypeModel = new POETypeModel();
        poec.title = 'POEC';
        console.log(poec.toString());

        const poe: POEModel = new POEModel();
        poe.title = 'Fullstack Java Angular';
        poe.setDates(new Date(2023, 0, 27), new Date(2022, 9, 24));
        poe.setPOEType(poei);
        poe.setPOEType(poec); // Will not override previous type
        
        console.log(poe.getPOEType()?.title);

        const stagiaire: StagiaireModel = new StagiaireModel();
        stagiaire.setBirthDate(new Date(2042, 3, 30));
        stagiaire.lastName = 'Aubert';
        stagiaire.firstName = 'Jean-Luc';
        stagiaire.setPOE(poe);

        console.log('Stagiaire : ' + stagiaire.toString());
        
        const bond: StagiaireModel = new StagiaireModel();
        bond.firstName = 'James';
        bond.lastName = 'Bond';
        bond.setBirthDate(new Date(1900, 0, 7));
        bond.setPOE(poe);

        console.log(poe.listStagiaires());
    }
}

/// Je suis à l'extérieur de la classe
new Main();