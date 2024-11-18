
function mostrarSeccio(seccio)
{
// Oculta totes les seccions
document.getElementById("empresa").classList.add("hidden");
document.getElementById("usuari").classList.add("hidden");

// Mostra la secció seleccionada
document.getElementById(seccio).classList.remove("hidden");
}

function panelEmp(campId) {
    const panel = document.getElementById(campId);
    panel.classList.toggle("hidden");
}
function panelUsr(campId) {
    const panel = document.getElementById(campId);
    panel.classList.toggle("hidden");
}
