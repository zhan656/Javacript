// Getting references to the h1 tag that will display the count, the increment, and decrement buttons
var $count = document.getElementById("counter");
var $incrementBtn = document.querySelector(".panel .btn.btn-primary");
var $decrementBtn = document.querySelector(".panel .btn.btn-danger");

/*
// A callback function is called in response to a click of the increment button
$incrementBtn.addEventListener("click", function(event) {
  console.log(event);
});
// Likewise with the decrement button
$decrementBtn.addEventListener("click", function(event) {
  console.log(event);
});
*/

// Add click event listeners to the buttons, call the functions passed in
$incrementBtn.addEventListener("click", handleIncrementClick);
$decrementBtn.addEventListener("click", handleDecrementClick);

var count = 0;
var red = 0;
var green = 0;
var blue = 0;
var fontSize = 50;
renderCount();

function renderCount() {
    // Update the inner text of the $count element
    $count.innerText = count;
    $count.style.color = "rgb(" + red + ", 0, " + blue + ")";
    $count.style.fontSize = "" + fontSize + "px";
}


// // handleDecrementClick decreases count by 1 and re-renders the count to DOM
function handleDecrementClick() {
   count -= 1;
   red += 15;
   fontSize -= 2;
   renderCount();
 }

// // handleIncrementClick increases count by 1 and re-renders the count to DOM
function handleIncrementClick() {
   count += 1;
   green += 15;
   blue += 15;
   fontSize += 2;
   renderCount();
}

