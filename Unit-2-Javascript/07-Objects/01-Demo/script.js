// Objects are a collection of properties
const planet = {
  // Properties are made up of key-value pairs
  name: "Earth",
  age: "4.543 billion years",
  moons: 1,
  isPopulated: true,
  population: "7.594 billion"
};

// To access a property's value that is a string, number or booleean, use the object's name and the associated key	
// Uses dot notation and logs "Earth"	
console.log(planet.name);
	
// Uses bracket notation and logs "Earth"
console.log(planet["name"]);

// Returns keys of an object
console.log(Object.keys(planet));

// Returns values of an object
console.log(Object.values(planet));

// Loops through keys of an object
for(const key in planet){
  console.log(planet[key]);
}
