function ejercicio04(){
    let nombreUsuario = prompt("Escribe tu nombre");

    if (nombreUsuario === "" || nombreUsuario === null) {
        alert("Debes ingresar un nombre válido");
        nombreUsuario = prompt("Escribe tu nombre");
    }

    document.write("Hola ", nombreUsuario);
}