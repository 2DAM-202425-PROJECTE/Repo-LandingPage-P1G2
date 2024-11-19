function closeNewsletterPopup() {
    const newsletterPopup = document.getElementById('newsletter-popup');
    newsletterPopup.style.display = 'none';
}

function subscribeNewsletter(event) {
    event.preventDefault();
    const newsletterPopup = document.getElementById('newsletter-popup');
    newsletterPopup.style.display = 'none';
    alert('Thank you for subscribing!');
}