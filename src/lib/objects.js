const createPerson = (name, age) => {
  // your code here
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  return new Person(name, age);
};

const getName = (object) => {
  // your code here
  return object.name;
};

const getProperty = (property, object) => {
  // your code here
  return object[property];
};

const hasProperty = (property, object) => {
  // your code here
  return !!object[property];
};

const isOver65 = (person) => {
  // your code here
  return person.age > 65;
};

const getAges = (people) => {
  // your code here
  const ages = [];
  people.map(person => ages.push(person.age));
  return ages;
};

const findByName = (name, people) => {
  // your code here
  return people.find(person => person.name === name);
};

const findHondas = (cars) => {
  // your code here
  return cars.filter(car => car.manufacturer === 'Honda');
};

const averageAge = (people) => {
  // your code here
  const ages = [];
  people.map(person => ages.push(person.age));
  return ages.reduce((a, b) => a + b) / people.length;
};

const createTalkingPerson = (name, age) => {
  // your code here
  function Person(name, age) {
    this.name = name;
    this.age = age;
    this.introduce = (name) => `Hi ${name}, my name is ${this.name} and I am ${this.age}!`; 
  }
  return new Person(name, age);
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson,
};
