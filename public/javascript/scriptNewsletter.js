document.addEventListener('DOMContentLoaded', () => {

    const VITE_EMAILJS_PUBLIC_KEY="VCN_DzGWa4BBp8nSA";
    const VITE_EMAILJS_SERVICE_KEY="service_giozyph";
    const VITE_EMAILJS_TEMPLATE_KEY="template_pyq5tfp";

    // Inicialitzem EmailJS amb la clau pública
    emailjs.init(VITE_EMAILJS_PUBLIC_KEY);

    function enviarCorreu(event) {
        event.preventDefault(); // Evitem que el formulari es recarregui

        // Obtenim el correu de l'usuari des del formulari
        const userEmail = document.getElementById('newsletter-email').value;

        // Agafem el nom d'usuari segons el correu que ens passen
        const userName = userEmail.split('@')[0];

        // Passem els paràmetres del template a EmailJS
        const templateParams = {
            to_name: userName,
            to_email: userEmail
        };

        // Enviem el correu passant el servei i el template amb id
        emailjs.send(
            VITE_EMAILJS_SERVICE_KEY,
            VITE_EMAILJS_TEMPLATE_KEY,
            templateParams
        )
            .then((response) => {
                console.log('Enviat correctament:', response);
            })
            .catch((error) => {
                console.log('Error:', error);
            });

        // Mostrem el missatge de gràcies
        const thankYouMessage = document.getElementById('thank-you-message');
        const newsletterContainer = document.querySelector('.newsletter-container');
        newsletterContainer.classList.add('hidden');
        thankYouMessage.classList.remove('hidden');

        // Amaguem el missatge de gràcies després de 3 segons
        setTimeout(() => {
            thankYouMessage.classList.add('hidden');
            newsletterContainer.classList.remove('hidden');
            closeNewsletterPopup();
        }, 3000);
    }

    // Afegim el listener al formulari
    document.getElementById('newsletter-form').addEventListener('submit', enviarCorreu);

    // Funció per tancar el popup
    function closeNewsletterPopup() {
        const newsletterPopup = document.getElementById('newsletter-popup');
        newsletterPopup.style.display = 'none';
    }

    // Afegim el listener al formulari
    document.getElementById('close-newsletter-popup').addEventListener('click', closeNewsletterPopup);
});
