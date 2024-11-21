function openContactModal(event) {
    event.preventDefault(); // Prevent the default form submission
    const contactModal = document.getElementById('contact-form');
    contactModal.style.display = 'flex'; // Use flex to center the modal
}

function closeContactModal() {
    const contactModal = document.getElementById('contact-form');
    contactModal.style.display = 'none';
}

function redirectTo(url) {
    window.location.href = url;
}