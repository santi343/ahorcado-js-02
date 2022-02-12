let palabraR;
let contador = 1;
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
      console.log("feliz");
      document.querySelector(".feliz").style.display = "block";
      document.querySelector(".triste").style.display = "none";
      document.querySelector(".advertencia").style.display = "none";
    }
    if (cara === "triste") {
      console.log("triste");
      document.querySelector(".triste").style.display = "block";
      document.querySelector(".feliz").style.display = "none";
      document.querySelector(".advertencia").style.display = "none";
    }
    if (cara === "advertencia") {
      console.log("advertencia");
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
    console.log(palabras);
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
      this.reiniciarJuego();
    }
  },

  clearInput: function (text) {
    return (text.value = "");
  },
  reiniciarJuego: function () {
    console.log(" Voy a reiniciar el juego");
    stringLetrasIngresadas = "";
    contador = 1;
    console.log(stringLetrasIngresadas);
    document.removeEventListener("keydown",this.juego(), true);
    document.querySelector("#display-key").innerHTML = "";
    document.querySelector("#input-key-01").textContent = "";
    document.querySelector("#input-key-02").textContent = "";
    canvas.width = canvas.width;
  },
  iniciarJuego: function () {
    //document.querySelector("#nueva-palabra").style.display = "none";
    //document.querySelector("#input-nueva-palabra").style.display = "none";
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    cvs.tablado(arrayColores[0]);
    document.getElementById("display-key").focus();
    palabraR = this.palabraRandom();
    console.log(palabraR.split(""));
    this.rellenar(palabraR);
    this.juego();
  },
  juego: function () {
    document.addEventListener("keydown", (event) => {
      event.preventDefault();
      let nuevaLetra = event.key.toUpperCase();
      if (checkNuevaLetra(nuevaLetra)) {
        if (!checkEstaContenida(nuevaLetra)) {
          if (palabraR.includes(nuevaLetra)) {
            this.agregarCorrecto(nuevaLetra);
            this.mostrarCorrecto(nuevaLetra);
            //GANASTE
            //this.cargarModal2('"Felicidades"', "feliz");
          } else {
            this.agregarIncorrecto(nuevaLetra);
            dibujarCanva(contador, palabraR);
            contador++;
          }
        } else {
          this.cargarModal2('"Letra ya ingresada"', "advertencia");
          console.log("Todo Mal");
        }
      } else {
        this.cargarModal2(`"Caracter No Valido"`, "advertencia");
        console.log("MODAL A PONER");
      }

      const keyName = event.key.toUpperCase();
      console.log(keyName);
      //alert("keydown event\n\n" + "key: " + keyName);
    });
  },
  palabraRandom: function () {
    return palabras[Math.floor(Math.random() * palabras.length)];
  },

  rellenar: function (palabraR) {
    palabraR
      .split("")
      .forEach(() => (document.querySelector("#display-key").innerHTML += "_"));

    //if (document.querySelector("#display-key").textContent.length <= 0) {
    //for (let i = 0; i < palabra.length; i++) {
    //document.querySelector("#display-key").innerHTML += "_ ";
    //}
    //}
    //let submitKey2 = document.getElementById("submit-key2");

    //submitKey2.addEventListener("click", function (event) {
    //event.preventDefault();
    //let letra = document.getElementById("input-key2");
    //if (checkNuevaLetra(letra.value)) {
    //if (palabraR.includes(letra.value)) {
    //agregarCorrecto(letra.value);
    //mostrarCorrecto(letra.value);
    //} else {
    //agregarIncorrecto(letra.value);
    //}
    //}
    //clearInput(letra);
    //document.getElementById("input-key2").focus();
    //});
  },
};

iniciar_Juego.addEventListener("click", function (event) {
  event.preventDefault();
  aho.iniciarJuego();
  //// ctx.clearRect(0, 0, canvas.width, canvas.height);
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

