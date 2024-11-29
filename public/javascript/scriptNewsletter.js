import emailjs from '@emailjs/browser';

function subscribeNewsletter(event) {
    event.preventDefault();
    const thankYouMessage = document.getElementById('thank-you-message');
    const newsletterContainer = document.querySelector('.newsletter-container');

    // Hide the form and show the thank you message
    newsletterContainer.classList.add('hidden');
    thankYouMessage.classList.remove('hidden');

    // Hide the thank you message after 3 seconds
    setTimeout(() => {
        thankYouMessage.classList.add('hidden');
        newsletterContainer.classList.remove('hidden');
        closeNewsletterPopup();
    }, 3000);
}

emailjs.init('user_id_aqui'); //connectem al EmailJS

function EnviarCorreu(event) {
    event.preventDefault(); //prvenim que envie el formulari

    // Obtenim el correu de l'usuari des del formulari
    const userEmail = document.querySelector('input[type="email"]').value;
    //Agafem un nom de usuari segons el correu que ems passen.
    const userName = userEmail.split('@')[0];

    // Passem els paràmetres del tempalte a EmailJS
    const templateParams = {
        to_name: userName,
    };

    // Enviem el correu passant el servei amb id i el template amb id
    emailjs.send('service_id_aqui', 'template_id_aqui', templateParams)
        .then((response) => {
            console.log('Enviat Correctament:', response);
        }, (error) => {
            console.log('Error:', error);
        });
}

function closeNewsletterPopup() {
    const newsletterPopup = document.getElementById('newsletter-popup');
    newsletterPopup.style.display = 'none';
}