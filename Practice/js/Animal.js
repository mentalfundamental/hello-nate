export default class Animal{
    constructor(name, species) {
        this.name = name;
        this.species = species;
        console.log('I am an animal');
    }
    getClassType() {
        return "animal";
    }
}