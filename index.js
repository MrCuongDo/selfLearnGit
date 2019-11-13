var cat = require('./cat')

var mickey = new cat('Mickey')
var tom = new cat('Tommy')

tom.eat('jerry')
mickey.eat(tom)


console.log(tom)
