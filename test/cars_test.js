var expect = require('chai').expect,
Car = require('../src/car.js');

describe('#dropoff', function(){
	it('should remove the name specified from the array', function() {
		var array = ["one", "two", "three"];
		Car.dropoff(array, function(name) {
			if (name === "one") {
				array.splice(0, 1);
			}
		});
		expect(Car.dropoff(["one", "two", "three"])).to.deep.equal(["two", "three"]);
	});
});