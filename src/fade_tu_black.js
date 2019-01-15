import './index.css';

var distance = 0;
var lastPos = [0, 0]
var el;
var div;
document.addEventListener("DOMContentLoaded", function(event) {
 

const MAX = 100000;

div = document.createElement("DIV");
div.style.backgroundColor = "#000";
document.body.appendChild(div);
div.style.height= "100%";
div.style.width= "0";
div.style.position = "absolute";
div.style.left = "0";
div.style.top = "0";
div.style.zIndex = "0";

el = document.createElement("H4");
el.innerHTML = "distance traveled: 0 px";
el.style.color = "#000";
el.style.position = "relative";
el.style.backgroundColor = "#888";
el.style.zIndex = "1";
document.body.appendChild(el);


document.addEventListener("mousemove", function(e){
  var res =  Math.pow(e.x - lastPos[0], 2) + Math.pow(e.y - lastPos[1], 2);
  var dist = Math.sqrt(res);
  distance +=  Math.round(dist);
  el.innerHTML = "distance traveled: " + distance + " px";
  // document.body.style.backgroundColor = "#"+((1<<24)*Math.random()|0).toString(16);
  // el.style.color = "#"+((1<<24)*Math.random()|0).toString(16);
  div.style.width =  (distance / MAX) * 100 + '%';
  lastPos = [e.x, e.y]
});
});