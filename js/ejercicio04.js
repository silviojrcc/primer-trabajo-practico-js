function ejercicio04(){
    let nombreUsuario = prompt("Escribe tu nombre");

    if (!(nombreUsuario === "")) {
        document.write("Hola ", nombreUsuario);
    } else {
        alert("Debes ingresar un nombre válido");
    }

}