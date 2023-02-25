function ejercicio07(el) {
    const articleEl = document.createElement("article");
    articleEl.innerHTML = `
    <h2>Ejercicio 7</h2>
    <form class="form">
        <label for="numero1">Numero 1</label>
        <input class="numero1" name="numero1" type="number">
        <label for="numero2">Numero 2</label>
        <input class="numero2" name="numero2" type="number">
        <label for="numero3">Numero 3</label>
        <input class="numero3" name="numero3" type="number">
        <button>Cual es mayor?</button>
    </form>
    <p class="resultado"></p>
    `;


    const form = articleEl.querySelector(".form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const num1 = articleEl.querySelector(".numero1").value;
        const num2 = articleEl.querySelector(".numero2").value;
        const num3 = articleEl.querySelector(".numero3").value;
        const resultadoEl = articleEl.querySelector(".resultado");
        const numero1 = parseInt(num1);
        const numero2 = parseInt(num2);
        const numero3 = parseInt(num3);

        let mayor = -999999999;
        
        if (numero1 == numero2 && numero2 == numero3) {
            resultadoEl.innerHTML = `Los numeros son iguales`;
        } else if (numero1 > numero2 && numero1 > numero3) {
            resultadoEl.innerHTML = `El numero 1 es el mayor: ${numero1}`;
        } else if (numero2 > numero1 && numero2 > numero3) {
            resultadoEl.innerHTML = `El numero 2 es el mayor: ${numero2}`;
        } else {
            resultadoEl.innerHTML = `El numero 3 es el mayor: ${numero3}`;
        }
    });

    el.append(articleEl);
}