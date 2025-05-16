class PetController {
    constructor(petModel) {
        this.petModel = petModel;
    }

    getAllPets(req, res) {
        const pets = this.petModel.getAllPets();
        res.json(pets);
    }

    getPetById(req, res) {
        const petId = req.params.id;
        const pet = this.petModel.findPetById(petId);
        if (pet) {
            res.json(pet);
        } else {
            res.status(404).send('Pet not found');
        }
    }
}

export default PetController;