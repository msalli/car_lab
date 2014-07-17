//only use this syntax when you are creating Constructors
//in the function() only include the properites you will let someone set

require('locus');


var Car = function(make, model, year, color){
  this.make = make;
  this.model = model
  this.year = year;
  this.color = color;
  
  //these will not be passed in.
  this.state = "off"
  this.previousOwners = [];
  this.currentOwner = "manufacturer";
   this.passengers = [];
//brace for the car function	
}

Car.prototype.sale = function(newOwner){
//practice putting your methods in your prototypes
	this.previousOwners.push(currentOwner);
	this.currentOwner = newOwner;
};

Car.prototype.paint = function(newColor){
	this.color = newColor;
	console.log("This car is " + newColor)
};

Car.prototype.start = function(state){
	this.state = "on";
};

Car.prototype.stop = function(state){
	this.state = "off";
};

// `Car#driveTo`, it should `console.log` `"driving to <destination>"`, 
// but only if the car `state` is `on`. 
// *Note: this method needs to take a `destination` param.*
Car.prototype.driveTo = function(destination){
	if (this.state === "on") {
		console.log("Driving to " + destination);
	};
};

// * `Car#park` only if the car is `off` and if it's 
// off console.log `parked!!`.
Car.prototype.park = function(){
	if (this.state === "off") {
		console.log("Parked!");
	};
};

Car.prototype.pickup = function(name){
	if (this.state === "on") {
	console.log("Driving to pick up " + name + "!");
	this.passengers.push(name);
	}
}

Car.prototype.dropoff = function(name){
	var remove = this.passengers.lastIndexOf(name);
	for (var i = 0; i < this.passengers.length; i++) {
		if (this.passengers[i] === name); 
			this.passengers.splice(remove, 1);
	};
};


var car1 = new Car("honda", "civic", "2007", "blue");

eval(locus)

// console.log(car1);