const Pet = require('../src/pet');

describe('constructor', () => {
  it('tests that I can name a new Pet', () => {
    const pet = new Pet ('Fido')

    expect(pet.name).toEqual('Fido');
  });
});

describe('constructor', () => {
  it('tests that I can name a new Pet', () => {
    const pet = new Pet ('Bugs')

    expect(pet.name).toEqual('Bugs');
  });
});

describe('constructor', () => {
  it('tests that when a new pet is created it has an age of 0', () => {
    const pet = new Pet ('Bugs')

    expect(pet.age).toEqual(0);
  });
});
  
describe('constructor', () => {
  it('tests that when the growUp function is called on a pet it\'s age increases by 1', () => {
    const pet = new Pet ('Bugs')
    pet.growUp()
    expect(pet.age).toBe(1);

    pet.growUp()
    expect(pet.age).toBe(2);
  });
});

describe('constructor', () => {
  it('tests that when a new pet is created it has a fitness of 10', () => {
    const pet = new Pet ('Bugs')

    expect(pet.fitness).toEqual(10);
  });
});

describe('constructor', () => {
  it('tests that when the growUp function is called on a pet it\'s fitness decreases by 3', () => {
    const pet = new Pet ('Bugs')
    pet.growUp()
    expect(pet.fitness).toBe(7);

    pet.growUp()
    expect(pet.fitness).toBe(4);
  });
});

describe('constructor', () => {
  it('tests that when a new pet is created it has a hunger of 0', () => {
    const pet = new Pet ('Bugs')

    expect(pet.hunger).toEqual(0);
  });
});

describe('constructor', () => {
  it('tests that when the growUp function is called on a pet it\'s hunger increases by 5', () => {
    const pet = new Pet ('Bugs')
    pet.growUp()
    expect(pet.hunger).toBe(5);

    pet.growUp()
    expect(pet.hunger).toBe(10);
  });
});

describe('constructor', () => {
  it('tests that when the walk function is called on a pet it\'s fitness increases by 4 without ever exceeding a fitness of 10', () => {
    const pet = new Pet ('Bugs')
    pet.fitness = 4

    pet.walk()
    expect(pet.fitness).toBe(8);
    
    pet.walk()
    expect(pet.fitness).toBe(10);
  });
});