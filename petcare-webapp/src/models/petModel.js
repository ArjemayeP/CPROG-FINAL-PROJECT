class PetModel {
    constructor(name, age, breed, owner) {
        this.name = name;
        this.age = age;
        this.breed = breed;
        this.owner = owner;
    }

    static createPet(name, age, breed, owner) {
        return new PetModel(name, age, breed, owner);
    }

    static findPetById(pets, id) {
        return pets.find(pet => pet.id === id);
    }
}

export default PetModel;