const button = document.querySelector("#menu");
const data = document.querySelector('#menuBar');

button.addEventListener("click", () => {
    data.classList.toggle("ativo")
})