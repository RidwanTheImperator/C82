canvas = document.getElementById("Canva");

ctx = canvas.getContext("2d");

var lpx, lpy;
var mouseEvent = "Empty"

color = "blue"
var line_width = 1

canvas.addEventListener("mousedown", md)
canvas.addEventListener("mouseup", mo)
canvas.addEventListener("mouseleave", ml)
canvas.addEventListener("mousemove", mm)

function mo(e) {
    mouseEvent = "mouseup";
}

function ml(e) {
    mouseEvent = "mouseleave";
}

function md(e) {
    mouseEvent = "mousedown"

    color=document.getElementById("colori").value;
    line_width=document.getElementById("widtha").value;
}

function mm(e) {
     cpx=e.clientX-canvas.offsetleft;
     cpy=e.clientY-canvas.offsetTop;
    
    if (mouseEvent=="mousedown") {
     ctx.beginPath();
     ctx.strokeStyle=color;
     ctx.lineWidth=line_width;
    ctx.moveTo(lpx, lpy);
    ctx.lineTo(cpx, cpy);
    ctx.stroke();
    }
    lpx=cpx;
    lpy=cpy;
}

