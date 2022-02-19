mouseEvent = "empty";
color = "black";
line_width = 5;
var last_x, last_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    color = document.getElementById("color").value;
    line_width = document.getElementById("width_of_line").value;
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = line_width;

        console.log("Last position of x and y coordinates:");
        console.log("x = " + last_x + " y = " + last_y);
        ctx.moveTo(last_x, last_y);

        console.log("Current position of x and y coordinates:");
        console.log("x = " + current_x + " y = " + current_y);
        ctx.lineTo(current_x, current_y);
        ctx.stroke();
    }

    last_x = current_x;
    last_y = current_y;
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){
    mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){
    mouseEvent = "mouseLeave";
}


var width = screen.width;
new_w = screen.width - 70;
new_h = screen.height - 300;

if (width < 992){
    document.getElementById("myCanvas").width = new_w;
    document.getElementById("myCanvas").height = new_h;

    document.body.style.overflow = "hidden";
}
canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e){
    current_x = e.touches[0].clientX - canvas.offsetLeft;
    current_y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = line_width;

    console.log("Last position of x and y coordinates:");
    console.log("x = " + last_x + " y = " + last_y);
    ctx.moveTo(last_x, last_y);

    console.log("Current position of x and y coordinates:");
    console.log("x = " + current_x + " y = " + current_y);
    ctx.lineTo(current_x, current_y);
    ctx.stroke();

    last_x = current_x;
    last_y = current_y;
}

canvas.addEventListener("touchstart", my_touchstart)

function my_touchstart(e){
    color = document.getElementById("color").value;
    line_width = document.getElementById("width_of_line").value;

    last_x = e.touches[0].clientX - canvas.offsetLeft;
    last_y = e.touches[0].clientY - canvas.offsetTop;
}

function ClearArea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}