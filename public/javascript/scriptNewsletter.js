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

function closeNewsletterPopup() {
    const newsletterPopup = document.getElementById('newsletter-popup');
    newsletterPopup.style.display = 'none';
}