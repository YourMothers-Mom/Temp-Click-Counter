//this is single line comment in JavaScript

/*this is a 
multi-line
comment in JavaScript*/

var temp = 80;

console.log("What outerwear do I need?")
console.log("I need...")

if (temp > 60){
  console.log("No Jacket");
// Check if temp is less than 40F
}else if (temp < 40){
  console.log("A heavy Jacket");
}else{
  console.log("A light Jacket");
}

function addNumbers(){
  var num1 = 5;
  var num2 = 6;
  var sum = num1 + num2;
  return sum;
}
console.log(addNumbers())
//Write the variables
var clickCount = 0;
var countButton = document.getElementById('countButton');
var countDisplay = document.getElementById('countDisplay');
//Write the event listener
countButton.addEventListener('click', increaseCount);
//Write the function
function increaseCount(){
        clickCount = clickCount + 1;
        countDisplay.innerHTML = clickCount;
        console.log("Times Clicked:", clickCount);
}
