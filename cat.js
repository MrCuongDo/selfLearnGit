var horse = require('./horse')

function Cat (name) {
	this.name = name;
	this.stomach = [];
}

Cat.prototype.eat = function(animal){
	if (animal instanceof horse) {
		throw new Error('Cat cannot eat Horse');
	}
	else {
		this.stomach.push(animal)
	}
}

module.exports = Cat
