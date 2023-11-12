import { valida } from "./validaciones.js";

const inputs = document.querySelectorAll("input");//selecciona todos nuestros inputs, regresa un arreglo

inputs.forEach( input => {
    input.addEventListener("blur", (input) => {
        valida(input.target);
    });
});

// const btnEnviar = document.getElementById('btn-enviar');

// const validación = (e) => {
//   e.preventDefault();
//   const email = document.getElementById('email');
//   if (email.value === "") {
//     console.log("Por favor, escribe tu correo electrónico");
//     email.focus();
//     return false;
//   }
//   if (!emailValido(email.value)) {
//     console.log("Por favor, escribe un correo electrónico válido");
//     email.focus();
//     return false;
//   }
//   return true;
// }
// const emailValido = email => {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//   }

// btnEnviar.addEventListener('click', validación);