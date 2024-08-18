
const form = document.getElementById("formulario")
const msgContainerErro = document.querySelector(".msg-erro");
const msgContainerCerto = document.querySelector(".msg-formulario");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (validaNumero()) {
        msgContainerCerto.style.display = "block";
        msgContainerErro.style.display = "none";
        document.getElementById("numero-A").value = "";
        document.getElementById("numero-B").value = "";
    } else {
        msgContainerErro.style.display = "block";
        msgContainerCerto.style.display = "none";
    }
});
function validaNumero() {
    const numeroA = parseFloat(document.getElementById("numero-A").value);
    const numeroB = parseFloat(document.getElementById("numero-B").value);

    if (numeroA < numeroB) {
        return true;

    } else {
        return false;
    }
}
