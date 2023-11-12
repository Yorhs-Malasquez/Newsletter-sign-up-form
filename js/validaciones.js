export function valida(input) {
    const tipoDeInput = input.dataset.tipo; //verifica cual es el tipo de input atraves de dataset
    if (input.validity.valid) {
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML ='';
    } else {
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
}
const tipodeErrores = [
    "valueMissing",
    "typeMismatch"
];

const mensajesDeError = {
    email: {
        valueMissing: "El campo correo no puede estar vacío",
        typeMismatch: "El correo no es válido",
    },
};
function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";
    tipodeErrores.forEach( error => {
        if (input.validity[error]) {
            console.log(tipoDeInput, error);
            console.log(input.validity[error]);
            console.log(mensajesDeError[tipoDeInput][error]);
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    })
    return mensaje;
}
