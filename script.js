function createConfetti() {
    const confetti = document.getElementById('confetti');

    for (let i = 0; i < 200; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.className = 'confetti';
        confettiPiece.style.backgroundColor = getRandomColor();
        confettiPiece.style.left = `${Math.random() * 100}vw`;
        confettiPiece.style.animationDuration = `${Math.random() * 2 + 1}s`;

        confetti.appendChild(confettiPiece);
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function surprise() {
    alert("Сюрприз! 🎉");
}

createConfetti();