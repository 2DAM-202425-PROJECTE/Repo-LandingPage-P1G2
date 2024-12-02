// Script per carregar elements dins de index
document.addEventListener("DOMContentLoaded", function () {
    fetch('/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
        });

    fetch('/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        });
    fetch('/account.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('account-container').innerHTML = data;
        });
});

