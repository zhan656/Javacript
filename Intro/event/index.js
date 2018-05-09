

var clickHere= document.querySelector("#clickHere");


clickHere.addEventListener("click", function show_color() {
    var Fcolor = prompt("What your favorite color: ");
    //Fcolor.push(Fcolor);
    color = document.querySelector("#color");
    // var todoList = document.querySelector("#todo-list");
    var todoHTML = "<li>"+ "Your Favorite Color is: " + Fcolor.repeat(2)+"</li>";
    color.innerHTML = todoHTML;
});