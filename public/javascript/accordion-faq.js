document.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelectorAll('button[data-state]');

    questions.forEach(button => {
        button.addEventListener('click', () => {
            const isOpen = button.getAttribute('data-state') === 'open';
            const answer = button.nextElementSibling; // The div containing the answer
            const arrow = button.querySelector('svg');

            // Desplegar quadre de resposta
            answer.style.display = isOpen ? 'none' : 'block';

            // Activar direcció de la fletxa
            if (isOpen) {
                arrow.style.transform = 'rotate(0deg)';
                button.setAttribute('data-state', 'closed');
            } else {
                arrow.style.transform = 'rotate(180deg)';
                button.setAttribute('data-state', 'open');
            }
        });
    });
});

// JavaScript per desplegar les respostes i moure les fletxes
document.querySelectorAll('[id^="question"]').forEach(function(button, index) {
    button.addEventListener('click', function() {
        const answer = document.getElementById('answer' + (index + 1));
        const arrow = document.getElementById('arrow' + (index + 1));

        if (answer.style.display === 'none' || answer.style.display === '') {
            answer.style.display = 'block';
            arrow.style.transform = 'rotate(0deg)';
        } else {
            answer.style.display = 'none';
            arrow.style.transform = 'rotate(-180deg)';
        }
    });
});

