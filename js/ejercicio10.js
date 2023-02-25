function ejercicio10(el) {
    const articleEl = document.createElement("article");
    articleEl.innerHTML = `
    <h2>Ejercicio 10</h2>
    <form class="form">
        <label for="numero">Numero</label>
        <input class="numero" name="numero" type="number">
        <button>Es divisible por 2, 3, 5, o 7?</button>
    </form>
    <p class="resultado"></p>
    `

    const form = articleEl.querySelector(".form");
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const resultado = articleEl.querySelector(".resultado");
        const numeroText = articleEl.querySelector(".numero").value;
        const numero = parseInt(numeroText);

        if (numero % 2 == 0 || numero % 3 == 0 || numero % 5 == 0 || numero % 7 == 2) {
            resultado.innerHTML = `El numero ${numero} es divisible por 2, 3, 5, o 7`;
        } else {
            resultado.innerHTML = `El numero ${numero} no es divisible por estos números`;
        }
    });

    el.append(articleEl);
}