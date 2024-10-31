//PART I

const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion:{
            name: "Frank",
            type: "Flea",
            inventory:["Hat", "Sunglasses"]
        }
    },
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        }
    }

    adventurer.roll(3)


    //PART II
    class Character {
        static MAX_HEALTH = 100;
        constructor (name) {
          this.name = name;
          this.health = 100;
          this.inventory = [];
          this.roll = function (mod = 0) {
            const result = Math.floor(Math.random() * 20) + 1 + mod;
            console.log(`${this.name} rolled a ${result}.`)
          }
        }
      }

const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

robin.roll(3)
robin.companion.roll(3)
robin.companion.companion.roll(3)


// PART III and PART IV

class Adventurer extends Character {
    static ROLES = ["Fighter","Healer", "Wizard"]
    constructor (name, role) {
      super(name);
      // Adventurers have specialized roles.
      this.role = role;
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");

        if(!adventurer.ROLES.includes(role)) {
            throw new Error(`Invalid role: ${role}`);
        }
    }

    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
    // Ability to pick up items.
    pickup (item) {
      console.log(`${this.name} picked up ${item}.`);
      this.inventory.push(item);
    }
    //PART VI
    duel(adventurer) {
        if(adventurer.roll() < this.roll()) {
            console.log(adventurer.roll());
            console.log(this.roll());
            console.log(adventurer.health - 1)
            console.log(this.health) 
        } else if (adventurer.roll() > this.roll()) {
            console.log(adventurer.roll());
            console.log(this.roll());
            console.log(adventurer.health)
            console.log(this.health - 1)
        }
        if(adventurer.health <= 50) {
            console.log(`${this.name} Is the winner!`)
    } else (this.health <= 50){
        console.log(`${adventurer.name} Is the winner!`)
    }
    
  }
}

  const Robin = new Adventurer("Robin", "Explorer");
  Robin.scout();
  Robin.pickup("potion");

class companion {
    constructor (name, type) {
      super(name);
      this.type = type;
      this.inventory = [];
    }
}

const leo = new companion("Leo", "Cat");
leo.inventory = ["small hat", "sunglasses"];
const frank = new companion("Frank", "Flea");


//PART V

class AdventurerFactory {  
    constructor (role) {
      this.role = role;
      this.adventurers = [];
    }
    generate (name) {
      const newAdventurer = new Adventurer(name, this.role);
      this.adventurers.push(newAdventurer);
    }
    findByIndex (index) {
      return this.adventurers[index];
    }
    findByName (name) {
      return this.adventurers.find((a) => a.name === name);
    }
  }
  
  const healers = new AdventurerFactory("Healer");
  const robin = healers.generate("Robin");


  //PART VI
  // added to part IV


  //PART VII
  const Tom = new Character("Tom", "Fighter");
  Tom.duel(Robin);
  const Sam = new Character("Sam", "Healer");
  




