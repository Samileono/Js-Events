// Events
// var button = document.getElementById("btn").addEventListener("click", buttonClick);
// function buttonClick(e) {
// console.log("button clicked");
// getting header title
// document.getElementById("header-title").textContent = "header changed";

// Event parameter
// console.log(e);


// console.log(e.target);               //this gonna give us the element from where that element is fired from!
// console.log(e.target.id);             //for getting the id
// console.log(e.target.className);    //for getting all the classes
// console.log(e.target.classList);      //for getting collection of all the classes that element have
// Displaying that elements id to the DOM!
var output = document.getElementById("output");

// for getting whatever type of events
// console.log(e.type);

// for getting position of mouse on X from browser window
// console.log(e.clientX);

// for getting position of mouse on Y from browser window
// console.log(e.clientY);

// for getting position of mouse on X from that element
// console.log(e.offsetX);

// for getting position of mouse on Y from that  element
// console.log(e.offsetY);

// we can test to see whether the user is holding down the ALT key or not when the button is clicked!
// console.log(e.altKey);

// we can test to see whether the user is holding down the CTRL key or not when the button is clicked!
// console.log(e.ctrlKey);

// we can test to see whether the user is holding down the shift key or not when the button is clicked!
// console.log(e.shiftKey);

// }

// var button = document.getElementById("btn");
// whenever i put the mouse key down!
// button.addEventListener("mousedown", runEvent);

// whenever i release the mouse button
// button.addEventListener("mouseup", runEvent);

var box = document.getElementById("box");

// whenever mosue enter from that specified area it gonna be triggered!
// box.addEventListener("mouseenter", runEvent);

// whenever the mouse leave from that specified area it gonna be triggered then!
// box.addEventListener("mouseleave", runEvent);

// for checking mouse hover when it hovers to some content inside that div! not when mouse enters that div like for some inner elements but the mouse enter will be for any parent element of that particular child!
// box.addEventListener("mouseover", runEvent);

// Mouse move event
// box.addEventListener("mousemove", runEvent);

// // Mouse events
// function runEvent(e) {
//     // checking event type
//     // console.log("EVENT TYPE: " + e.type);

//     // fun stuff
//     output.innerHTML = '<h3>Mouse X: ' + e.offsetX + '</h3>' + '<h3>Mouse Y: ' + e.offsetY + '</h3>'
//     document.body.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + ",40)";

// }

// Keyboard events
var itemInput = document.querySelector('input[type="text"]');

var form = document.querySelector("form");



// adding an event to itemInput
// itemInput.addEventListener("keydown", runEvent);

// // keyup event
// itemInput.addEventListener("keyup", runEvent);

// keypress
// itemInput.addEventListener("keypress", runEvent);

// // focus event
// itemInput.addEventListener("focus", runEvent);

// // blur event
// itemInput.addEventListener("blur", runEvent);

// cut event
// itemInput.addEventListener("cut", runEvent);

// copy event
// itemInput.addEventListener("copy", runEvent);

// paste event
// itemInput.addEventListener("paste", runEvent);

// input event
// itemInput.addEventListener("input", runEvent);

// Change event
// var select = document.querySelector("select");
// select.addEventListener("change", runEvent);

// Submit event
form.addEventListener("submit", runEvent);


function runEvent(e) {

    // prevent form from submission
    e.preventDefault();

    // checking event type
    console.log("EVENT TYPE: " + e.type);
    // getting user's value
    // console.log(e.target.value);

    // outing text
    // document.getElementById("output").innerHTML = "<h3>" + e.target.value + "</h3>";

    // some weirdo stuff ;) 
    // document.body.style.display = "none";
}
