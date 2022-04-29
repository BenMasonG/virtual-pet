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