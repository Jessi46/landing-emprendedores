
const boton = document.getElementById('menuBtn')!;
const links = document.querySelector('.nav__links')!;


boton.addEventListener('click', () => {
    // Muestra u oculta el menu en pantallas pequeñas 
    links.classList.toggle('is-open');
});

console.log('Landing de emprendedores lista para la entrega 1');

const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".oculto").forEach((el) => {
  observador.observe(el);
});

import { GestorFormulario } from "./formulario";

const gestor = new GestorFormulario("#formulario", "#error");

const btnGuardar = document.querySelector("#guardar") as HTMLButtonElement;
btnGuardar?.addEventListener("click", () => gestor.guardarJSON());

