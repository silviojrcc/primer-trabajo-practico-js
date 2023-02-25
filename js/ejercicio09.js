function ejercicio09(el){
    const articleEl =  document.createElement("article");
    articleEl.innerHTML = `
    <h2>Ejercicio 9</h2>
    <form class="form">
        <label for="palabra">Palabra</label>
        <input class="palabra" name="palabra" type="text">
        <button>Mostrame las vocales!</button>
    </form>
    <p class="resultado"></p>
    `;

    const form = articleEl.querySelector(".form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const resultado = articleEl.querySelector(".resultado");
        const palabra = articleEl.querySelector(".palabra").value;
        const palabraEnMinuscula = palabra.toLowerCase();
        resultado.innerHTML = ``;

        for (let i = 0; i < palabraEnMinuscula.length; i++) {
            const letra = palabraEnMinuscula[i];

            if ("aeiou".includes(letra)) {
                resultado.append(letra);
            }
        }
    });

    el.append(articleEl);
}