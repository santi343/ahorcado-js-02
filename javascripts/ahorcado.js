var partidaInicial = true;
let palabraR;
let contador = 1;
let nuevaLetra = "";
const botonNuevaPalabra = document.getElementById("nueva-palabra");
const iniciar_Juego = document.getElementById("iniciar-juego");

const aho = {
  cargarModal: function (texto) {
    const modalAtraccionCuerpo = document.getElementById("modalBody");
    modalAtraccionCuerpo.innerHTML = texto;
    let modal = new bootstrap.Modal(modalA);
    modal.show();
  },

  cargarModal2: function (texto, cara) {
    const modalAtraccionCuerpo2 = document.getElementById("modalBodyB");
    if (cara === "feliz") {
      document.querySelector(".feliz").style.display = "block";
      document.querySelector(".triste").style.display = "none";
      document.querySelector(".advertencia").style.display = "none";
    }
    if (cara === "triste") {
      document.querySelector(".triste").style.display = "block";
      document.querySelector(".feliz").style.display = "none";
      document.querySelector(".advertencia").style.display = "none";
    }
    if (cara === "advertencia") {
      document.querySelector(".advertencia").style.display = "block";
      document.querySelector(".feliz").style.display = "none";
      document.querySelector(".triste").style.display = "none";
    }
    modalAtraccionCuerpo2.innerHTML = texto;
    let modal = new bootstrap.Modal(modalB);
    modal.show();
  },

  agregarPalabra: function (palabra) {
    palabras.push(palabra);
  },

  agregarCorrecto: function (letra) {
    document.querySelector("#input-key-01").innerHTML += letra;
  },

  agregarIncorrecto: function (letra) {
    document.querySelector("#input-key-02").innerHTML += letra;
  },

  mostrarCorrecto: function (letra) {
    let reemplazar = document
      .querySelector("#display-key")
      .textContent.split("");
    let idx = palabraR.indexOf(letra);
    reemplazar.splice(idx, 1, letra);
    while (idx != -1) {
      reemplazar.splice(idx, 1, letra);
      idx = palabraR.indexOf(letra, idx + 1);
    }
    document.querySelector("#display-key").innerHTML = reemplazar.join("");
    if (!document.querySelector("#display-key").textContent.includes("_")) {
      this.cargarModal2(`"Ganaste, Felicidades" => ${palabraR}`, "feliz");
      contador = 10;
      this.reiniciarJuego();
    }
  },

  clearInput: function (text) {
    return (text.value = "");
  },

  reiniciarJuego: function () {
    partidaInicial = false;
    stringLetrasIngresadas = "";
    document.querySelector("#display-key").innerHTML = "";
    document.querySelector("#input-key-01").textContent = "";
    document.querySelector("#input-key-02").textContent = "";
    canvas.width = canvas.width;
    document.removeEventListener("keydown", this.juego());
    document.getElementById("iniciar-juego").focus();
    nuevaLetra = "";
    return;
  },

  iniciarJuego: function () {
    contador = 1;
    cvs.tablado(arrayColores[0]);
    document.getElementById("footer").focus();
    palabraR = this.palabraRandom();
    this.rellenar(palabraR);
    this.juego();
  },

  juego: function () {
    if (partidaInicial) {
      document.addEventListener("keydown", (event) => {
        if (contador === 10) return;
        event.preventDefault();
        nuevaLetra = event.key.toUpperCase();
        if (checkNuevaLetra(nuevaLetra)) {
          if (!checkEstaContenida(nuevaLetra)) {
            if (palabraR.includes(nuevaLetra)) {
              this.agregarCorrecto(nuevaLetra);
              this.mostrarCorrecto(nuevaLetra);
              event.preventDefault();
              return;
            } else {
              this.agregarIncorrecto(nuevaLetra);
              dibujarCanva(contador, palabraR);
              contador++;
              return;
            }
          } else {
            this.cargarModal2('"Letra ya ingresada"', "advertencia");
          }
        } else {
          this.cargarModal2(`"Caracter No Valido"`, "advertencia");
        }
      });
    }
  },

  palabraRandom: function () {
    return palabras[Math.floor(Math.random() * palabras.length)];
  },

  rellenar: function (palabraR) {
    palabraR
      .split("")
      .forEach(() => (document.querySelector("#display-key").innerHTML += "_"));
  },
};

iniciar_Juego.addEventListener("click", function (event) {
  event.preventDefault();
  aho.iniciarJuego();
});

botonNuevaPalabra.addEventListener("click", function (event) {
  event.preventDefault();
  let textBox = document.getElementById("input-nueva-palabra");
  if (checkNuevaPalabra(textBox.value)) {
    if (!palabras.includes(textBox.value)) {
      aho.agregarPalabra(textBox.value);
      aho.cargarModal("Palabra Agregada con Éxito");
      aho.clearInput(textBox);
    } else {
      aho.cargarModal("Palabra existente en la lista");
    }
  }
});
