function ejercicio04(){
    let nombreUsuario = prompt("Escribe tu nombre");

    if (!(nombreUsuario === "")) {
        document.write("<h1>Hola " + nombreUsuario +"</h1>");
    } else {
        alert("Debes ingresar un nombre válido");
    }

}