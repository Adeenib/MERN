class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    SayName() {
        console.log(`${this.name}`);
    }
    showStatus() {
        console.log(`Ninja name is: ${this.name} , and his health :${this.health} ,and his speed :${this.speed},and his stength:${this.strength}`);
    }
    drinkSake() {
        this.health += 10;
    }

}