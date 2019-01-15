var distance = 0;
var lastPos = [0, 0]
var el;
document.addEventListener("DOMContentLoaded", function(event) {
 
el = document.createElement("H1");
el.innerHTML = "distance traveled: 0 px";
document.body.style.backgroundColor = "#"+((1<<24)*Math.random()|0).toString(16);
el.style.color = "#"+((1<<24)*Math.random()|0).toString(16);
document.body.appendChild(el); 
  
document.addEventListener("mousemove", function(e){
  var res =  Math.pow(e.x - lastPos[0], 2) + Math.pow(e.y - lastPos[1], 2);
  var dist = Math.sqrt(res);
  distance +=  Math.round(dist);
  console.log("distance", distance)
  el.innerHTML = "distance traveled: " + distance + " px";
  document.body.style.backgroundColor = "#"+((1<<24)*Math.random()|0).toString(16);
  el.style.color = "#"+((1<<24)*Math.random()|0).toString(16);
  lastPos = [e.x, e.y]
});

});