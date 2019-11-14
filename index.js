var cat = require('./cat')
var horse = require('./horse')

var mickey = new cat('Mickey')
var tom = new cat('Tommy')
var ngua = new horse('kiki')

tom.eat('jerry')
mickey.eat(tom)

try{
	tom.eat(ngua);
}catch(error){
	console.log('error :' + error);
}

console.log(tom)
