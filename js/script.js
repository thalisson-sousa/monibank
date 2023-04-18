import ehumCPF from "./valida-cpf.js"; 
const camposDoFormulario = document.querySelectorAll("[required]");

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificacampo(campo));
})

function verificacampo(campo) {
    if (campo.name == "cpf" && campo.value.length >= 11) {
        ehumCPF(campo);
    }
}