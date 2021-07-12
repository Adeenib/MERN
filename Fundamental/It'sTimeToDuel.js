class Card {
    constructor(name, cost) {
        this.cost = cost;
        this.name = name;
    }
}
class Unit extends Card {
    constructor(name, cost, pow, res) {
        super(name, cost);
        this.pow = pow;
        this.res = res;
    }
    attack(target) {

    }
}
class Effect extends Card {
    constructor(name, cost, magnitude, stat) {
        super(name, cost);
        this.magnitude = magnitude;
        this.stat = stat;
    }
    text() {
        if (this.magnitude >= 0) {

            return (`Raise the target's ${this.res} by ${this.magnitude}`);
        }
        else if (this.magnitude < 0) {

            return (`Lower the target's ${this.res} by ${this.magnitude * (-1)}`);
        }
    }
    play(target) {
        if (target instanceof Unit) {
            if (this.stat == "power") {
                target.pow += this.magnitude;

                return target.pow;
            }
            else if (this.stat == "resilience") {
                target.res += this.magnitude;
                return target.res;
            }

        } else {
            throw new Error("Target must be a unit!");
        }
    }

}

//Unit Cards
const RedBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const BlackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);

//Effect Cards
const HardAlgorithm = new Effect("Hard Algorithm", 2, 3, "resilience");
const UnhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, -2, "resilience");
const PairProgramming = new Effect("Pair Programming", 3, 2, "power");

console.log(UnhandledPromiseRejection.play(RedBeltNinja));
console.log(PairProgramming.play(RedBeltNinja));
