// დავალება 8
//პრომტით შემოვიტანოთ სტრინგი(წინადადება). დავითვალოთ რამდენი სიტყვისსგან 
//შედგება ეს წინადადება და მათგან რომელის არის ყველაზე გრძელი სტრინგი 

var str = prompt("");
var prom = (str.split(" "));
var max = prom[0];

for(var i of prom){
if(i.length > max.length){max = i}}
console.log(max)