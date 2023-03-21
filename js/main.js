const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");
const braco = document.querySelector("#braco");

somar.addEventListener("click", (evento) => { //=> mesma coisa que escrever uma função anonima (função de seta)
    braco.value = parseInt(braco.value) + 1;
} );

subtrair.addEventListener("click", (evento) => { 
    braco.value = parseInt(braco.value) - 1;
} );
