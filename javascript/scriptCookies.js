// Funció per acceptar les cookies
function acceptCookies() {
    const cookieNotice = document.getElementById('cookie-notice');
    cookieNotice.style.display = 'none';
    setCookie('cookies_accepted', 'true', 30);
    removeBlocker();  // Elimina el bloqueig de la pàgina després d'acceptar
}

// Funció per obrir el modal de configuració de cookies
function openCookieSettings() {
    const modal = document.getElementById('cookie-settings-modal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Bloqueja el desplaçament de la pàgina
    addBlocker(); // Bloqueja la interacció amb la resta de la pàgina
}

// Funció per tancar el modal de configuració de cookies
function closeCookieSettings() {
    const modal = document.getElementById('cookie-settings-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restaura el desplaçament de la pàgina
    removeBlocker(); // Elimina el bloqueig de la pàgina
}

// Funció per afegir el bloqueig de la pàgina
function addBlocker() {
    const blocker = document.createElement('div');
    blocker.id = 'cookie-blocker';
    blocker.style.position = 'fixed';
    blocker.style.top = '0';
    blocker.style.left = '0';
    blocker.style.width = '100%';
    blocker.style.height = '100%';
    blocker.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
    blocker.style.zIndex = '9998'; // Més alt que el contingut de la pàgina, però sota del modal
    document.body.appendChild(blocker);
}

// Funció per eliminar el bloqueig de la pàgina
function removeBlocker() {
    const blocker = document.getElementById('cookie-blocker');
    if (blocker) {
        blocker.remove();
    }
}

// Funció per guardar les preferències de cookies
function saveCookieSettings() {
    const performance = document.getElementById('performance-cookies').checked;
    const functional = document.getElementById('functional-cookies').checked;
    const advertising = document.getElementById('advertising-cookies').checked;

    setCookie('performance_cookies', performance ? 'true' : 'false', 30);
    setCookie('functional_cookies', functional ? 'true' : 'false', 30);
    setCookie('advertising_cookies', advertising ? 'true' : 'false', 30);

    closeCookieSettings();
}

// Funció per guardar les cookies amb una data d'expiració
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

// Funció per obtenir el valor d'una cookie
function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
            return cookie.substring(name.length + 1);
        }
    }
    return '';
}

// Mostrar el missatge de cookies si no s'ha acceptat
window.onload = function() {
    const cookieNotice = document.getElementById('cookie-notice');
    if (!getCookie('cookies_accepted')) {
        cookieNotice.style.display = 'flex';
        addBlocker();  // Afegim el bloqueig fins que l'usuari accepti o configuri les cookies
    } else {
        cookieNotice.style.display = 'none';
    }

};
