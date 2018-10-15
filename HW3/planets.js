/*
 * Now we're going to go TWO steps further, and use inheritence with es6!
 * We'll be writing a series of classes representing planets.
 */

/*****************************************************************************
***************                Planets                     *******************
******************************************************************************/
/*
 * First you're going to define a Planet parent class, which you should use to create
 * planets from.  To do this, you should use the es6 `class` and `constructor` keywords.  Note that
 * nothing new is going on under the hood here; `class` is merely "syntactic sugar"
 * for what you have already learned.
 *
 * Planets will store name, diameter, and address properties.  Address will default
 * to "Milky Way", and to do this, you should use another es6 feature: default parameters.
 * Planet will have two functions: the first is getVolume, which will be called directly from any
 * object created from Planet.  The second function will be called isPlanet, but
 * this shouldn't be called from the object itself (because if the object has)
 * the function, chances are it's a planet).  Instead, we will put this function
 * on the Planet function itself, using the `static` keyword.
 */

// Write your planet class here!
class Planet {
  constructor (name, diameter, address = 'Milky Way') {
    this.name = name;
    this.diameter = diameter;
    this.address = address;
  }
  getVolume () {
    return 4 / 3 * Math.PI * Math.pow(this.diameter / 2, 3);
  }
  static isPlanet (item) {
    return item instanceof Planet;
  }
}



// These methods should all work
//  const Earth = new Planet('Earth', 1000);
//  console.log(Earth.getVolume()); // 523598775.5982988
//  console.log(Planet.isPlanet(Earth)); // true


/******************************************************************************
**********                         Moons                          *************
******************************************************************************/
/*
 * Now implement the class Moon, which extends Planet.
 * Ensure that you use the `extends` and `super` keywords here,
 * and that you avoid duplicating code in your new constructors.
 *
 * Moon: takes an additional parameter, hostPlanet, with a default value of
 * 'Earth', and a method, getHostPlanet(), which returns hostPlanet.
 */

class Moon extends Planet{
  constructor (name = 'Moon', diameter, address, hostPlanet = 'Earth') {
    super(name, diameter, address);
    this.hostPlanet = hostPlanet;
  }
  getHostPlanet() {
    return this.hostPlanet;
  }
}

// Implement a Moon class here! HINT: Use a call to super()
// These methods should all work
// console.log((new Moon()).getHostPlanet()); // 'Earth'
// console.log(Planet.isPlanet(new Moon())); // true (although not really true)

//Do not modify
module.exports = {
  Planet: Planet,
  Moon: Moon
};
