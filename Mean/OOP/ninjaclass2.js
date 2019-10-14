function Ninja(name) {
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;

    this.showStats = function() {
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength);
        return this;
    }

    this.kick = function(ninja) {
        const damage = strength * 5;
        ninja.health -= damage;
        console.log(this.name + "kicked" + ninja.name + "for" + damage + "points of damage!");
        return this;
    }
}

Ninja.prototype.sayName = function() {
    console.log("My name is " + this.name);
    return this;
}

Ninja.prototype.punch = function(ninja) {
    ninja.health -= 5;
    console.log(this.name + "punched" + ninja.name + "for 5 points of damage!");
    return this;
}

Ninja.prototype.drinkSake = function(){
    this.health += 10;
    return this;
}
const blueNinja = new Ninja("Goemon");
const redNinja = new Ninja("bob")

// blueNinja.punch(redNinja);
// redNinja.kick(blueNinja);

// blueNinja.showStats();
// redNinja.showStats();


// redNinja.drinkSake();
// redNinja.showStats();