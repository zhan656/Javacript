

var clickHere= document.querySelector("#clickHere");


clickHere.addEventListener("click", function show_color() {
    var Fcolor = prompt("What your favorite color: ");
    //Fcolor.push(Fcolor);
    color = document.querySelector("#color");
    // var todoList = document.querySelector("#todo-list");
    var todoHTML = "<li style = 'color : ${Fcolor}>'"+ "Your Favorite Color is: " + Fcolor +"</li>";
    color.innerHTML = todoHTML;
});