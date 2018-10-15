'use strict';

/*
 * Now we're going to go one step further and practice JS polymorphism.
 * We'll be writing a series of classes representing vehicles.
 */

/******************************************************************************
***************                Vehicle                      *******************
******************************************************************************/
/*
 * First, we'll be writing a Vehicle superclass for all of our subsequent
 * classes. A Vehicle has a distanceTraveled field, which is initially 0.
 * It also has a travel method, which takes in a distance argument and adds
 * it to the current distanceTraveled. Finally, a vehicle has a numWheels
 * method, which every Vehicle must override. However, since a Vehicle is
 * not meant to be used (rather, its subclasses are), the numWheels() method
 * should throw an Error('Vehicle class has no numWheels method').
 */

var Vehicle = function Vehicle() {
    this.distanceTraveled = 0;
};

Vehicle.prototype.travel = function (distance) {
    this.distanceTraveled += distance;
};

Vehicle.prototype.numWheels = function () {
    throw new Error('Vehicle class has no numWheels method');
};

// var vehicle = new Vehicle();
// console.log(vehicle.distanceTraveled); // 0
// vehicle.travel(15);
// console.log(vehicle.distanceTraveled); // 15
// This line should throw an error if uncommented
// vehicle.numWheels();


/******************************************************************************
**********            Cars, Trucks, Bicycles, Ships               *************
******************************************************************************/
/*
 * Now implement the following classes, each of which inherit from Vehicle.
 * You should use the call method in order to avoid rewriting the code from the
 * Vehicle constructor. You can use either syntax shown in class to set up the
 * prototype chain here.
 *
 * Car: four wheels
 * Truck: eighteen wheels
 * Bicycle: two wheels
 * Ship: zero wheels
 */

/*
 * Note that the travel() function should still work for these classes,
 * since they inherit from Vehicle!
 */

// Car
var Car = function Car() {
    Vehicle.call(this);
};

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.numWheels = function () {
    return 4;
};

// Truck
var Truck = function Truck() {
    Vehicle.call(this);
};
Truck.prototype = Object.create(Vehicle.prototype);
Truck.prototype.numWheels = function () {
    return 18;
};

// Truck
var Bicycle = function Bicycle() {
    Vehicle.call(this);
};
Bicycle.prototype = Object.create(Vehicle.prototype);
Bicycle.prototype.numWheels = function () {
    return 2;
};

// Truck
var Ship = function Ship() {
    Vehicle.call(this);
};
Ship.prototype = Object.create(Vehicle.prototype);
Ship.prototype.numWheels = function () {
    return 0;
};
//
//
// console.log(new Car().numWheels()); // 4
// console.log(new Truck().numWheels()); // 18
// console.log(new Bicycle().numWheels()); // 2
// console.log(new Ship().numWheels()); // 0

/******************************************************************************
**********************             Used Cars                  *****************
******************************************************************************/
/*
 * Finally, write a UsedCar class that inherits from Car. This time, the
 * constructor function will take in an argument corresponding to the number of
 * miles the car has already traveled. Thus, this passed-in value should be
 * the starting point for distanceTraveled, and subsequent calls to travel()
 * should increase it from there.
 */

// Your code goes here
var UsedCar = function UsedCar(distanceTraveled) {
    var car = new Car();
    car.distanceTraveled = distanceTraveled;
    return car;
};
UsedCar.prototype = Object.create(Car.prototype);

var usedCar = new UsedCar(1000);
// console.log(usedCar instanceof Car); // true
// console.log(usedCar.distanceTraveled); // 1000
// usedCar.travel(1000);
// console.log(usedCar.distanceTraveled); // 2000

module.exports = {
    Vehicle: Vehicle,
    Car: Car,
    Truck: Truck,
    Bicycle: Bicycle,
    Ship: Ship,
    UsedCar: UsedCar
};