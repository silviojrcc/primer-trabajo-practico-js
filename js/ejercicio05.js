function ejercicio05(){
    const numero1 = prompt("Ingrese un numero");
    const numero2 = prompt("Ingrese otro numero");

    if (!(numero1 == "") && !(numero2 == "") && !isNaN(numero1) && !isNaN(numero2)) {
        const resultado = parseInt(numero1) + parseInt(numero2);
        document.write("<h1>La suma de los numeros ingresados es: " + resultado + "</h1>");
    } else {
        alert("Por favor, ingrese números válidos");
    }
}