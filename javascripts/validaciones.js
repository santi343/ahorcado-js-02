let stringLetrasIngresadas = "";
// Validaciones de Nueva Palabra

const checkNuevaPalabra = (text) => {
    return !text
        ? aho.cargarModal("El Campo No puede estar vacio.")
        : /(\s{1})/.test(text)
        ? aho.cargarModal("La Palabra No debe tener espacios en blanco")
        : /^[abcdefghijklmñnopqrstuvwxyz]*$/.test(text)
        ? aho.cargarModal(
              "La Palabra debe estar escrito en Mayúscula (sin acento)"
          )
        : !/^[ABCDEFGHIJKLMÑNOPQRSTUVWXYZ]*$/.test(text)
        ? aho.cargarModal("Ingreso caracteres No validos.")
        : /^[ABCDEFGHIJKLMÑNOPQRSTUVWXYZ]{0,2}$/.test(text)
        ? aho.cargarModal("Ingreso caracteres No validos.")
        : true;
};

// Validaciones de Ingreso de letras

const checkNuevaLetra = (letra) =>
    /^([ABCDEFGHIJKLMÑNOPQRSTUVWXYZ]){0,1}$/.test(letra);

const checkEstaContenida = (letra) => {
    if (stringLetrasIngresadas.includes(letra)) return true;
    stringLetrasIngresadas += letra;
};
