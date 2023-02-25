function ejercicio08(el) {
    const articleEl = document.createElement("article");
    articleEl.innerHTML = `
    <h2>Ejercicio 8</h2>
    <form class="form">
        <label for="numero">Numero</label>
        <input class="numero" name="numero" type="number">
        <button>Es divisible por 2?</button>
    </form>
    <p class="resultado"></p>
    `
    
    const form = articleEl.querySelector(".form");
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const numeroText = articleEl.querySelector(".numero").value;
        const resultado = articleEl.querySelector(".resultado");
        const numero = parseInt(numeroText);

        numero % 2 == 0 ? resultado.innerHTML = `El numero ${numero} es par` : resultado.innerHTML = `El numero ${numero} es impar`;
    });

    el.append(articleEl);

}