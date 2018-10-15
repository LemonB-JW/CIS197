'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
var Planet = function () {
  function Planet(name, diameter) {
    var address = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Milky Way';

    _classCallCheck(this, Planet);

    this.name = name;
    this.diameter = diameter;
    this.address = address;
  }

  _createClass(Planet, [{
    key: 'getVolume',
    value: function getVolume() {
      return 4 / 3 * Math.PI * Math.pow(this.diameter / 2, 3);
    }
  }], [{
    key: 'isPlanet',
    value: function isPlanet(item) {
      return item instanceof Planet;
    }
  }]);

  return Planet;
}();

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

var Moon = function (_Planet) {
  _inherits(Moon, _Planet);

  function Moon() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Moon';
    var diameter = arguments[1];
    var address = arguments[2];
    var hostPlanet = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'Earth';

    _classCallCheck(this, Moon);

    var _this = _possibleConstructorReturn(this, (Moon.__proto__ || Object.getPrototypeOf(Moon)).call(this, name, diameter, address));

    _this.hostPlanet = hostPlanet;
    return _this;
  }

  _createClass(Moon, [{
    key: 'getHostPlanet',
    value: function getHostPlanet() {
      return this.hostPlanet;
    }
  }]);

  return Moon;
}(Planet);

// Implement a Moon class here! HINT: Use a call to super()
// These methods should all work
// console.log((new Moon()).getHostPlanet()); // 'Earth'
// console.log(Planet.isPlanet(new Moon())); // true (although not really true)

//Do not modify


module.exports = {
  Planet: Planet,
  Moon: Moon
};