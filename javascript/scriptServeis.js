const diapositives = ["usuari", "empresa"];
let indexActual = 0;

function canviarDiapositiva(direccio) {
    const actual = document.getElementById(`diapositiva-${diapositives[indexActual]}`);

    // Determina la següent diapositiva
    if (direccio === "dreta") {
        indexActual = (indexActual + 1) % diapositives.length; // Navegació cíclica
    } else if (direccio === "esquerra") {
        indexActual = (indexActual - 1 + diapositives.length) % diapositives.length; // Cíclic cap enrere
    }

    const seguent = document.getElementById(`diapositiva-${diapositives[indexActual]}`);

    // Prepara la següent diapositiva per a l'animació
    seguent.classList.remove("hidden");
    seguent.classList.add("entrant");

    // Aplica l'animació a la diapositiva actual
    actual.classList.add("sortint");

    // Espera que acabi l'animació
    setTimeout(() => {
        actual.classList.add("hidden");
        actual.classList.remove("sortint");
        seguent.classList.remove("entrant");
    }, 500); // Temps de la transició
}