function openRegisterModal(event) {
    event.preventDefault(); // Prevent the default form submission
    const registerModal = document.getElementById('register-modal');
    const loginForm = document.getElementById('login-form');
    registerModal.style.display = 'flex'; // Use flex to center the modal
    loginForm.style.display = 'none'; // Hide the login form
}

function closeRegisterModal() {
    const registerModal = document.getElementById('register-modal');
    registerModal.style.display = 'none';
}