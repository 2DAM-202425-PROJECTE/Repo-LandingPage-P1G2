document.addEventListener('DOMContentLoaded', () => {

    const VITE_CONTACTE_PUBLIC_KEY="VCN_DzGWa4BBp8nSA";
    const VITE_CONTACTE_SERVICE_KEY="service_giozyph";
    const VITE_CONTACTE_TEMPLATE_KEY="template_47bpgfa";

    // Inicialitzem EmailJS amb la clau pública
    emailjs.init(VITE_CONTACTE_PUBLIC_KEY);

    function enviarContacte(event) {
        event.preventDefault(); // Evitem que el formulari es recarregui

        // Les dades del formulari
        const userEmail = document.getElementById('email').value;
        const userName = document.getElementById('name').value;
        const userMessage = document.getElementById('message').value;

        // Passem els paràmetres del template a EmailJS
        const templateParams = {
            usuari_nom: userName,
            usuari_mail: userEmail,
            usuari_missatge: userMessage
        };

        // Enviem el correu passant el servei i el template amb id
        emailjs.send(
            VITE_CONTACTE_SERVICE_KEY,
            VITE_CONTACTE_TEMPLATE_KEY,
            templateParams
        )
            .then((response) => {
                console.log('Enviat correctament:', response);
                // Mostrem un avís d'èxit
                alert('Formulari enviat correctament!');

                //Reiniciar els camps del formulari
                document.getElementById('formulari-contacte').reset();
            })
            .catch((error) => {
                console.log('Error:', error);
            });
    }
    // Afegim el listener al formulari
    document.getElementById('formulari-contacte').addEventListener('submit', enviarContacte);
});