function ejercicio06(el){
    const articleEl = document.createElement("article");
    articleEl.innerHTML = `
    <h2>Ejercicio 6</h2>
    <form class="form">
        <div class="">
            <label for="numero1">Numero 1</label>
            <input required class="numero1" name="numero1" type="number">
        </div>
        <label for="numero2">Numero 2</label>
        <input required class="numero2" name="numero2" type="number">
        <button>Cual es mayor?</button>
    </form>
    <p class="resultado"></p>
    `;


    const form = articleEl.querySelector(".form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const num1 = articleEl.querySelector(".numero1").value;
        const num2 = articleEl.querySelector(".numero2").value;
        const resultadoEl = articleEl.querySelector(".resultado");
        const numero1 = parseInt(num1);
        const numero2 = parseInt(num2);

        if (!isNaN(numero1) && !isNaN(numero2)){
            if (numero1 == numero2) {
                resultadoEl.innerHTML = `Los numeros son iguales`;
            } else if (numero1 > numero2) {
                resultadoEl.innerHTML = `El numero 1 es el mayor: ${numero1}`;
            } else {
                resultadoEl.innerHTML = `El numero 2 es el mayor: ${numero2}`;
            }
        } else {
            resultadoEl.innerHTML = `Debe ingresar numeros validos`;
        }

    });

    el.append(articleEl);
}