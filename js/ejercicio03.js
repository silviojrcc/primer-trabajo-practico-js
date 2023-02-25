function ejercicio03(el) {
    const articleEl = document.createElement("article");
    articleEl.innerHTML = `
        <h2>Ejercicio 3</h2>
        <p class="resultado"></p>
    `;

    const resultadoEl = articleEl.querySelector(".resultado");
    resultadoEl.append("El resultado de la suma de 3 + 5 es: ", 3 + 5);

    el.append(articleEl);
}