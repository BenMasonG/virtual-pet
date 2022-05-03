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

describe('constructor', () => {
  it('tests that when the feed function is called on a pet it\'s hunger decreases by 3 without ever dropping below 0', () => {
    const pet = new Pet ('Bugs')
    pet.hunger = 5

    pet.feed()
    expect(pet.hunger).toBe(2);
    
    pet.feed()
    expect(pet.hunger).toBe(0);
  });
});

describe('constructor', () => {
  it('tests that when checkUp is called the pet provides the correct response based on their current fitness & hunger levels', () => {
    const pet = new Pet ('Bugs')
    expect(pet.checkUp()).toEqual('I feel great!');

    pet.fitness = 2
    expect(pet.checkUp()).toEqual('I need a walk.');

    pet.hunger = 5
    expect(pet.checkUp()).toEqual('I am hungry and I need a walk.');

    pet.fitness = 10
    expect(pet.checkUp()).toEqual('I am hungry.');
    
  });
});

describe('constructor', () => {
  it('tests that the checkHeath function tests if the Pet is alive', () => {
    const pet = new Pet ('Bugs')
    expect(pet.checkHealth()).toEqual(`${pet.name} has gotten a year older! Remember to keep them well fed and exercised to ensure they stay healthy.`);
  });
});

describe('constructor', () => {
  it('tests that the checkHeath function correctly identfies if the pet dies of stavation', () => {
    const pet = new Pet ('Bugs')
    pet.hunger = 10

    expect(pet.checkHealth()).toEqual(`Sorry, ${pet.name} has starved to death.`);
  });
});

describe('constructor', () => {
  it('tests that the checkHeath function correctly identfies if the pet dies of old age', () => {
    const pet = new Pet ('Bugs')
    pet.age = 31

    expect(pet.checkHealth()).toEqual(`Sorry, ${pet.name} has died of old age.`);
  });
});

describe('constructor', () => {
  it('tests that the checkHeath function correctly identfies if the pet dies due to poor fitness', () => {
    const pet = new Pet ('Bugs')
    pet.fitness = 0

    expect(pet.checkHealth()).toEqual(`Sorry, ${pet.name} has died due to poor fitness.`);
  });
});

describe('constructor', () => {
  it('tests that the adoptChild function allows the Pet to have a child', () => {
    const pet = new Pet ('Bugs')
    pet.adoptChild('Jr')
    pet.adoptChild('Matt')
  
    expect(pet.children[0]).toEqual({name: 'Jr', age: 0, hunger: 0, fitness: 10, isAlive: true, children: []});
    expect(pet.children[1]).toEqual({name: 'Matt', age: 0, hunger: 0, fitness: 10, isAlive: true, children: []});
  });
});

describe('constructor', () => {
  it('tests that methods can be called on the children of Pets', () => {
    const pet = new Pet ('Bugs')
    pet.adoptChild('Jr')
    pet.children[0].growUp()
  
    expect(pet.children[0].hunger).toEqual(5);
    expect(pet.children[0].fitness).toEqual(7);
  });
});

describe('constructor', () => {
  it('tests that the Pets children can have children', () => {
    const pet = new Pet ('Bugs')
    pet.adoptChild('Jr')
    pet.children[0].adoptChild('test')
  
    expect(pet.children[0].children[0]).toEqual({name: 'test', age: 0, hunger: 0, fitness: 10, isAlive: true, children: []});
  });
});