// Efecto de escritura
const slogans = [
    "Piensa más allá de lo obvio",
    "La sabiduría comienza con la pregunta",
    "Filosofía aplicada a la vida moderna"
];

let currentSlogan = 0;
let index = 0;
const typingElement = document.getElementById('typing-effect');

function typeWriter() {
    if (index < slogans[currentSlogan].length) {
        typingElement.innerHTML += slogans[currentSlogan].charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    } else {
        setTimeout(eraseText, 2000);
    }
}

function eraseText() {
    if (index > 0) {
        typingElement.innerHTML = slogans[currentSlogan].substring(0, index-1);
        index--;
        setTimeout(eraseText, 50);
    } else {
        currentSlogan = (currentSlogan + 1) % slogans.length;
        setTimeout(typeWriter, 500);
    }
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    typeWriter();
    
    // Smooth scroll para todos los enlaces
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});