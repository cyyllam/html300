// Create the Dog class constructor
// class Dog {
// 	// Give it expected parameters
// 	constructor(name, age, breed, color) {
// 		// Set those equal to the instance
// 		this.name = name;
// 		this.age = age;
// 		this.breed = breed;
// 		this.color = color;
// 		this.energyLevel = 0;
// 		this.barkLevel = 10;
// 	}
// 	// pat method
// 	pat() {
// 		this.energyLevel++
// 		this.barkLevel--;
// 		console.log(`This dog's name is ${this.name}, age is ${this.age}, current energy level is ${this.energyLevel} and current bark level is ${this.barkLevel}.`);
// 	}
// }

// // Create marty
// const marty = new Dog('Marty', 6, 'Mutt', 'Brown');

// // Pat him 5 times
// marty.pat();
// marty.pat();
// marty.pat();
// marty.pat();
// marty.pat();

//----------------------------------------
//video game character class constructor
class videoGameBoss {
	constructor(name, species, color, weapon) {
		this.name = name;
		this.species = species;
		this.color = color;
		this.weapon = weapon;
		this.attackPower = 5;
		this.healPower = 10;
	}
	//attack & heal
	fight() {
		this.attackPower++;
		this.healPower--;
		console.log(`This boss is ${this.name}, weapon is ${this.weapon}, attack power is ${this.attackPower}, healing power is ${this.healPower}.`)
	}
}

const attackTitan = new videoGameBoss("Eren", "Nine Titans", "Green", "Fists")

attackTitan.fight()
attackTitan.fight()
attackTitan.fight()
attackTitan.fight()
attackTitan.fight()
attackTitan.fight()
attackTitan.fight()
