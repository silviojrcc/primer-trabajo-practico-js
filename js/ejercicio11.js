function ejercicio11(el) {
    const articleEl = document.createElement("article");
    articleEl.innerHTML = `
    <h2>Ejercicio 11</h2>
    <form class="form">
        <label for="numero">Numero</label>
        <input class="numero" name="numero" type="number">
        <button>Es divisible por 2, 3, 5, o 7?</button>
    </form>
    <article class="resultado"></article>
    `

    const form = articleEl.querySelector(".form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const resultado = articleEl.querySelector(".resultado");
        const numeroText = articleEl.querySelector(".numero").value;
        const numero = parseInt(numeroText);
        resultado.innerHTML = ``;


        if (!isNaN(numero)) {
            if (numero % 2 == 0) {
                const pEl = document.createElement("p");
                pEl.innerHTML = `El número ${numero} es divisible por 2`;
                resultado.append(pEl);
                console.log("divisible x 2");
            } 
            if (numero % 3 == 0) {
                const pEl = document.createElement("p");
                pEl.innerHTML = `El número ${numero} es divisible por 3`;
                resultado.append(pEl);
                console.log("divisible x 3");
            }
            if (numero % 5 == 0){
                const pEl = document.createElement("p");
                pEl.innerHTML = `El número ${numero} es divisible por 5`;
                resultado.append(pEl);
                console.log("divisible x 5");
            }
            if (numero % 7 == 0) {
                const pEl = document.createElement("p");
                pEl.innerHTML = `El número ${numero} es divisible por 7`;
                resultado.append(pEl);
                console.log("divisible x 7");
            }
            if (!(numero % 2 == 0 || numero % 3 == 0 || numero % 5 == 0 || numero % 7 == 0)){
                const pEl = document.createElement("p");
                pEl.innerHTML = `El número ${numero} no es divisible ni por 2, 3, 5 o 7.`;
                resultado.append(pEl);
                console.log("divisible x ninguno");
            }
        } else {
            resultado.innerHTML = `Debe ingresar un numero!!`;
        }

    });

    el.append(articleEl);
}