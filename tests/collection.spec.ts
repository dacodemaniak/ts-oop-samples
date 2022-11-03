import { StagiaireModel } from "../src/models/stagiaire-model";
import { Repository } from "../src/repositories/repository";
import { StagiaireRepository } from "../src/repositories/stagiaire-repository"

describe(`StagiaireCollection`, () => {
    it(`Should instanciate a Collection Object`, () => {
        const stagiaireRepository: StagiaireRepository = new StagiaireRepository();
        expect(stagiaireRepository).toBeInstanceOf(Repository);
    });

    it (`getSize() should return one after using add method`, () => {
        const repository: StagiaireRepository = new StagiaireRepository();
        const stagiaire = new StagiaireModel();
        repository.add(stagiaire);
        expect(repository.getSize()).toBe(1);
    })

    it(`getSize() should return one even if add called twice with same Item`, () => {
        const repository: StagiaireRepository = new StagiaireRepository();
        const stagiaire = new StagiaireModel();
        repository.add(stagiaire);
        repository.add(stagiaire);
        expect(repository.getSize()).toBe(1);
    })
})