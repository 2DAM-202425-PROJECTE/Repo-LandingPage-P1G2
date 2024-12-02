import emailjs from '@emailjs/browser';

function enviarCorreu(event) {
    event.preventDefault(); // Evitem que el formulari es recarregui

    // Inicialitzem EmailJS amb la clau pública
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

    // Obtenim el correu de l'usuari des del formulari
    const userEmail = document.querySelector('input[type="email"]').value;

    // Agafem el nom d'usuari segons el correu que ens passen
    const userName = userEmail.split('@')[0];

    // Passem els paràmetres del template a EmailJS
    const templateParams = {
        to_name: userName,
    };

    // Enviem el correu passant el servei i el template amb id
    emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_KEY, import.meta.env.VITE_EMAILJS_TEMPLATE_KEY, templateParams)
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
