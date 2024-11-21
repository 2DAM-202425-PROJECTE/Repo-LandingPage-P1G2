document.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelectorAll('button[data-state]');

    questions.forEach(button => {
        button.addEventListener('click', () => {
            const isOpen = button.getAttribute('data-state') === 'open';
            const answer = button.nextElementSibling; // The div containing the answer
            const arrow = button.querySelector('svg');

            // Toggle the display of the answer
            answer.style.display = isOpen ? 'none' : 'block';

            // Toggle arrow direction
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

// JavaScript to toggle the answers and rotate the arrows
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