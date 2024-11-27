document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.newsletter-form'); // Formulari del newsletter
    const emailInput = document.querySelector('#correu'); // Input de correu
    const thankYouMessage = document.getElementById('thank-you-message');
    const newsletterContainer = document.querySelector('.newsletter-container');
    const closeBtn = document.getElementById('close-btn');

    // Afegir l'esdeveniment de 'submit' al formulari
    form.addEventListener('submit', function(event) {
        subscribeNewsletter(event);
    });

    // Afegir l'esdeveniment de 'click' al botó de tancar
    closeBtn.addEventListener('click', function() {
        closeNewsletterPopup();
    });

    function subscribeNewsletter(event) {
        event.preventDefault(); // Prevenir l'enviament tradicional del formulari

        const correu = emailInput.value; // Obtenir el correu

        if (!correu) {
            alert('Si us plau, introdueix un correu vàlid.');
            return;
        }

        // Ocultar el formulari i mostrar el missatge de gràcies
        newsletterContainer.classList.add('hidden');
        thankYouMessage.classList.remove('hidden');

        // Simular que s'envia el correu al servidor
        setTimeout(() => {
            thankYouMessage.classList.add('hidden');
            newsletterContainer.classList.remove('hidden');
            closeNewsletterPopup();
        }, 3000);
    }

    function closeNewsletterPopup() {
        const newsletterPopup = document.getElementById('newsletter-popup');
        newsletterPopup.style.display = 'none';
    }
});
