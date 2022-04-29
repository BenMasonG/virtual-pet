const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an instance of a new Pet', () => {
      expect(new Pet('Fido')).toEqual({name: 'Fido'});
      expect(new Pet('Bugs')).toEqual({name: 'Bugs'});
      expect(new Pet('Matt')).toEqual({name: 'Matt'});
    });
  });
  