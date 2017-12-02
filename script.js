var adam = [1500, 500, 1800, 700, 'Netherlands', 'Amsterdam'];
var ldn = [2500, 1500, 1000, 900, 'United Kingdom', 'London'];

var adav= (adam[0] + adam[1] + adam[2] + adam[3])/4;
var ldav= (ldn[0] + ldn[1] + ldn[2] + ldn[3])/4;

var diff= ldav-adav;

document.getElementById ('citya').innerHTML= adam[5];
document.getElementById ('apra').innerHTML= adav;
document.getElementById ('countrya').innerHTML= adam[4];
document.getElementById ('cityb').innerHTML= ldn[5];
document.getElementById ('aprb').innerHTML= ldav;
document.getElementById ('countryb').innerHTML= ldn[4];
document.getElementById ('res').innerHTML= diff+("€");
document.getElementById ('cita').innerHTML= adam[5];
document.getElementById ('citb').innerHTML= ldn[5];