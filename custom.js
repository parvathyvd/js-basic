function bulbon()
{
   document.getElementById('myImage').src='img/light-bulb.gif';
}
function bulboff()
{
   document.getElementById('myImage').src='img/light-bulb-off.png';
}


document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
    document.getElementById("demo1").innerHTML = Date();
}

function alertFn() {
  alert("Hey beware of me!");
}

function altertext()
{
document.getElementById("demo2").innerHTML = "This is the altered text"
}

function move() {
  var elem = document.getElementById("animation");
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 15) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'rem';
      elem.style.left = pos + 'rem';
    }
  }
}

var stopVar = setInterval( Time, 2);


  function Time() {

    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById('demo3').innerHTML = t;

  }

  function stopTime()
  {
    clearInterval(stopVar);
  }
