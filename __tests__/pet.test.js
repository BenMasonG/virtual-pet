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
  