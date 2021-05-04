"user-strict";
const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
var hexColor = "#";

function changeColor() {
  for (var i = 0; i < 6; i++) {
    var index = Math.floor(Math.random() * hexArray.length);
    hexColor = hexColor + hexArray[index];
  }
  var body = document.querySelector("body");
  body.style.backgroundColor = hexColor;
  var changeName = document.querySelector(".changeName");
  changeName.textContent = hexColor;
  hexColor = "#";
}
