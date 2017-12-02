var adam = [1500, 500, 1800, 700];
var ldn = [2500, 1500, 1000, 900];

var adav= (adam[0] + adam[1] + adam[2] + adam[3])/4;
var ldav= (ldn[0] + ldn[1] + ldn[2] + ldn[3])/4;

var diff= ldav-adav;

document.getElementById("apra").innerHTML = adav;
console.log (adav)