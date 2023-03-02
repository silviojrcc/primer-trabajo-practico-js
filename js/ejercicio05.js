function ejercicio05(){
    const numero1 = prompt("Ingrese un numero");
    console.log(numero1);
    const numero2 = prompt("Ingrese otro numero");

    console.log(numero2);
    if (numero1 === "" || numero2 === "" || isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, ingrese números válidos");
    } else {
        const resultado = parseInt(numero1) + parseInt(numero2);
        document.write("La suma de los numeros ingresados es: ", resultado);
    }
}