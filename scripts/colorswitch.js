var mode = 0

function triggerColors() {
  if (mode == 0) {mode = 1} else {mode = 0}
  if (mode == 0) {
    document.body.style = 'color:black;background-color:white;';
    document.querySelector("a").style='color:yellow;';
    document.querySelector("a").onmouseover=`document.querySelector('a').style.color = 'gray'`;
  } else {
    document.body.style = 'color:white;background-color:black;';
    document.querySelector("a").style='color:blue;';
    document.querySelector("a").onmouseover=`document.querySelector('a').style.color = 'yellow'`;
  }
}
