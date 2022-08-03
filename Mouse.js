var canvas = document.getElementById("Cursor");
var color = document.getElementById("color")
var papel = canvas.getContext("2d");
canvas.addEventListener("mousedown", pulsarMouse);
canvas.addEventListener("mouseup", levantarMouse);
canvas.addEventListener("mousemove", moverMouse);

//variables del programa
var x ;
var y ;


function dibujarLineas (color, xinicial, yinicial, xfinal, yfinal){
    papel.beginPath();
    papel.strokeStyle = color;
    papel.lineWidth = 3;
    papel.moveTo(xinicial, yinicial);
    papel.lineTo(xfinal,yfinal);
    papel.stroke();
    papel.closePath();
}

function moverMouse(evento){
    if (estado == 1){
        dibujarLineas(color.value, x, y, evento.layerX, evento.layerY)
    }
    else {
        x = evento.layerX
        y = evento.layerY
    }
}

function pulsarMouse(evento)
{
    estado = 1;
    x = evento.layerX;
    y = evento.layerY;
}

function levantarMouse(evento)
{
    estado = 0;
}