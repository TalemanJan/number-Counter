var counter=document.getElementById("counter").value
var increase=document.getElementById("increase")
var decrease=document.getElementById("derease")
var reset=document.getElementById("reset")


function increasee() {
  var counter = document.getElementById("counter");
  counter.innerHTML =parseInt(counter.innerHTML) + 1;
}



function decreasee() {
  var counter = document.getElementById("counter");
  counter.innerHTML =parseInt(counter.innerHTML) - 1;
}



