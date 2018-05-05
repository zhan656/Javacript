// @TODO: Uncomment the following file and complete the code  //
//        according to the instructions in README.md.

 var todos = [
   {
     complete: false,
     text: "Learn JavaScript"
   },
   {
     complete: false,
     text: "Learn JavaScript Charting"
   },
   {
     complete: false,
     text: "Make Awesome Front-End Projects"
   }
 ];

 function renderTodos() {
  // Write code here to:
  // 1. Get a reference to the element in the DOM with an id of todo-list using document.querySelector
  var todo_list = document.querySelector("#todo_list");
  for (var i = 0; i < todos.length; i++){
      //console.log("complete: " + todos[i].complete + ', text: ' + todos[i].text);
      todo_list_item = document.createElement("li");
  
      todo_list_item.innerHTML = todos[i].text;
      todo_list.appendChild(todo_list_item);
  };
  
  // 2. Using a for-loop, go through each element in the todos array and build a string containing an `li` element for each element in the todos array with the todo's text inside
 // 3. Using the innerHTML method, set the innerHTML of the todo-list element to the string created in the previous step
 }

 // running the renderTodos function once the page loads
renderTodos();
