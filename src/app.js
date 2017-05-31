var _ = require('lodash');
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);


var body = document.querySelector('body');
// body.style.backgroundColor = "green";
console.log(other); //[1, 2, 3, [4]]

other.forEach( (item, index) => {
	body.innerHTML = body.innerHTML + "index[" + index + "]: " + item + "<br>";

});
console.log('ok');
// debugger;