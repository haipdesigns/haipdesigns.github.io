function getOnload(el) {
  return function() {
    el.className += " loaded";
  }
}

var elements = document.getElementsByClassName("image");
for (var i = 0; i < elements.length; i += 1) {
  elements[i].onload = getOnload(elements[i]);
  if (elements[i].complete) {
    elements[i].className += " loaded";
  }
}