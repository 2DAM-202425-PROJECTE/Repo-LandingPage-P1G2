function toggleLoginForm() {
    const loginForm = document.getElementById('login-form');
    if (loginForm.style.display === 'none' || loginForm.style.display === '') {
        loginForm.style.display = 'block';
    } else {
        loginForm.style.display = 'none';
    }
}

function closeLoginModal() {
    const loginModal = document.getElementById('login-form');
    loginModal.style.display = 'none';
}