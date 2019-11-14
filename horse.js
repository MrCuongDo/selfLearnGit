function Horse (name) {
	this.name = name;
}

Horse.prototype.say = function() {
	console.log = 'hi hi hi';
}

module.exports = Horse