
const MAXIMUM_FITNESS = 10
const MINIMUM_FITNESS = 0
const MAXIMUM_HUNGER = 10
const MINIMUM_HUNGER = 0
const MAXIMUM_AGE = 30

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
    this.isAlive = true;
    this.children = [];
};

function Child(name) {
    Pet.call(this)

    this.name = name;
}

Pet.prototype.adoptChild = function (name) {
    const child = new Pet (name)
    this.children.push(child)
};

Pet.prototype.growUp = function () {
    if (this.isAlive === false) {
        return `Sorry, ${this.name} can't grow up as they are dead.`
    } else
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
    return this.checkHealth()
    };


Pet. prototype.walk = function () {
    if (this.isAlive === false) {
        return `Sorry, ${this.name} can't go for a walk as they are dead.`
    } else if (this.fitness + 4 <= MAXIMUM_FITNESS) {
        this.fitness += 4;
    } else {
        this.fitness = MAXIMUM_FITNESS;
    }
};

Pet.prototype.feed = function () {
    if (this.isAlive === false) {
        return `Sorry, ${this.name} can't be fed as they are dead.`
    } else if (this.hunger - 3 >= MINIMUM_HUNGER) {
        this.hunger -= 3;
    } else {
        this.hunger = MINIMUM_HUNGER;
    }
};

Pet.prototype.checkUp = function () {
    if (this.isAlive === false) {
        return `Sorry, ${this.name} is dead.`
    } else if (this.fitness <= 3 && this.hunger >= 5) {
        return 'I am hungry and I need a walk.'
    } else if (this.fitness <= 3) {
        return 'I need a walk.'
    } else if (this.hunger >= 5) {
        return 'I am hungry.'
    } else 
    return 'I feel great!'
}

Pet.prototype.checkHealth = function () {
    if (this.fitness <= MINIMUM_FITNESS) {
        this.isAlive = false;
        return `Sorry, ${this.name} has died due to poor fitness.`
    } else if (this.hunger >= MAXIMUM_HUNGER) {
        this.isAlive = false;
        return `Sorry, ${this.name} has starved to death.`
    } else if (this.age >= MAXIMUM_AGE) {
        this.isAlive = false;
        return `Sorry, ${this.name} has died of old age.`
    }
    this.isAlive = true;
    return `${this.name} has gotten a year older! Remember to keep them well fed and exercised to ensure they stay healthy.`
};




module.exports = Pet;