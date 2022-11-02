import { Repository } from "../src/repositories/repository";
import { StagiaireRepository } from "../src/repositories/stagiaire-repository"

describe(`StagiaireCollection`, () => {
    it(`Should instanciate a Collection Object`, () => {
        const stagiaireRepository: StagiaireRepository = new StagiaireRepository();
        expect(stagiaireRepository).toBeInstanceOf(Repository);
    })
})