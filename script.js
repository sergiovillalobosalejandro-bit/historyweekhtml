window.addEventListener("load", () => {
    alert("¡Bienvenido a mi portafolio!");
});

const btnCambiar = document.getElementById("btnCambiar");
const textoSobreMi = document.getElementById("textoSobreMi");

btnCambiar.addEventListener("click", () => {
    textoSobreMi.textContent =
        "Actualmente estoy aprendiendo desarrollo web y mejorando mis habilidades en HTML, CSS y JavaScript.";
});

const btnToggle = document.getElementById("btnToggle");
const proyectos = document.getElementById("listaProyectos");

btnToggle.addEventListener("click", () => {
    proyectos.classList.toggle("oculto");
});
