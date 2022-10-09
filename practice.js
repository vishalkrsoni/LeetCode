const x=6%2
const y=x?'one':'two'
console.log(y)

class Storm {
  constructor() { }
}
Storm.prototype.precip = "rain";

class WinterStorm {
  constructor() { }
}
WinterStorm.prototype = new Storm();
WinterStorm.prototype.precip = "snow";
var bob = new WinterStorm();
console.log(bob.precip);