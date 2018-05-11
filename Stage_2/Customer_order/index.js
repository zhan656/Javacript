// Getting references to the input fields, button, and lists
var $nameInput = document.querySelector("#name");
var $itemInput = document.querySelector("#item");
var $perishableInput = document.querySelector("#perishable");
var $submitBtn = document.querySelector("#submit");
var $priorityList = document.querySelector("#priority");
var $non_priorityList = document.querySelector("#non-priority");

$submitBtn.addEventListener("click", handleSubmitClick);

function handleSubmitClick(event) {
  console.log("botton work ok")
  // The default behavior of a button clicked inside of a form is to try to submit the form somewhere (which we don't want)
  event.preventDefault();

  // Create a new movie patron object that will hold the data used to populate the page
  var order = {
    name: $nameInput.value.trim(),
    item: $itemInput.value.trim(),
    perishable: $perishableInput.value.trim()
    
  };

  // Clearing the input fields
  $nameInput.value = "";
  $itemInput.value = "";
  $perishableInput.value = "";
  
    var $li = document.createElement("li");
    $li.className = "list-group-item";
    $li.innerText = order.name + ", " + order.item;
  if (order.perishable.toLowerCase() == "no") {
    $non_priorityList.appendChild($li);
  }
  else if (order.perishable.toLowerCase() == "yes") {
    $priorityList.appendChild($li);
  }
}
  
