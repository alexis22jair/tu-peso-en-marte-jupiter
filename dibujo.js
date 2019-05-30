var d = document.getElementById("dibujito");
var lienzo = d.getcontext("2d");
var lineas = 30;
var 1 = 0;

while(1 <lineas)
{
    dibujarLinea("#AAF", 0, 0, 10, 300);
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)

lienzo.beginpath();
lienzo.strokeStyle = "green";
lienzo.moveTo(100, 100);
lienzo.lineTo("200, 200");
lienzo.stroke();
lienzo.closepath();
