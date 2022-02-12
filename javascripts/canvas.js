let canvas = document.getElementById("ahorcado");
let ctx = canvas.getContext("2d");

const cvs = {
    tablado: function (color) {
        ctx.fillStyle = color;
        ctx.fillRect(95, 145, 35, 5);
    },
    posteVertical: function (color) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.fillRect(110, 30, 5, 115);
    },
    posteHorizontal: function (color) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.fillRect(110, 25, 55, 5);
    },
    soga: function (color) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.fillRect(160, 25, 5, 20);
    },
    cabeza: function (color) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(163, 55, 10, 0, 2 * 3.14);
        ctx.fill();
    },
    cuerpo: function (color) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.fillRect(162, 60, 3, 35);
    },
    brazoDerecho: function (color) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(165, 70);
        ctx.lineTo(175, 80);
        ctx.lineTo(175, 85);
        ctx.lineTo(165, 75);
        ctx.fill();
    },
    brazoIzquierdo: function (color) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(162, 70);
        ctx.lineTo(152, 80);
        ctx.lineTo(152, 85);
        ctx.lineTo(162, 75);
        ctx.fill();
    },
    piernaDerecha: function (color) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(165, 90);
        ctx.lineTo(175, 100);
        ctx.lineTo(175, 105);
        ctx.lineTo(165, 95);
        ctx.fill();
    },
    piernaIzquierda: function (color) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(162, 90);
        ctx.lineTo(152, 100);
        ctx.lineTo(152, 105);
        ctx.lineTo(162, 95);
        ctx.fill();
    },
};

const arrayFunciones = [
    cvs.tablado,
    cvs.posteVertical,
    cvs.posteHorizontal,
    cvs.soga,
    cvs.cabeza,
    cvs.cuerpo,
    cvs.brazoDerecho,
    cvs.brazoIzquierdo,
    cvs.piernaDerecha,
    cvs.piernaIzquierda,
];

const arrayColores = [
    "#00FF40",
    "#00ff00",
    "#40FF00",
    "#80FF00",
    "#BFFF00",
    "#FFFF00",
    "#FFBF00",
    "#FF8000",
    "#FF4000",
    "#FF0000",
];

const dibujarCanva = (contador, palabraR) => {
    for (let i = 0; i <= contador; i++) {
        arrayFunciones[i](arrayColores[contador]);
    }
    if (contador + 1 === arrayColores.length) {
        aho.cargarModal2(`"Fin del Juego" => ${palabraR}`,"triste");
        aho.reiniciarJuego();
    }
};
