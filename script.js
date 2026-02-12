const envelopeBtn = document.getElementById('envelope-btn');
const heartsContainer = document.getElementById('hearts-container');
const bgMusic = document.getElementById('background-music');

// NEU: Die beiden Musik-Buttons holen
const playBtn = document.getElementById('play-btn');
const stopBtn = document.getElementById('stop-btn');


// --- 1. Klick-Logik für den Brief (Nur noch Animation) ---
envelopeBtn.addEventListener('click', function() {
    // Brief öffnen Animation starten
    document.body.classList.add('letter-opened');
    // HIER KEINE MUSIK MEHR STARTEN
});


// --- 2. NEU: Logik für die Musik-Buttons ---

// Wenn auf "Play" geklickt wird
playBtn.addEventListener('click', function() {
    if (bgMusic) {
        bgMusic.play().catch(error => {
            console.error("Fehler beim Abspielen:", error);
            alert("Audio konnte nicht gestartet werden. Bitte überprüfe die Datei.");
        });
    }
});

// Wenn auf "Stop" geklickt wird (wir pausieren es, damit es beim nächsten Play nicht von vorne anfängt)
stopBtn.addEventListener('click', function() {
    if (bgMusic) {
        bgMusic.pause();
    }
});


// --- 3. Logik für die fliegenden Herzen (BLEIBT GLEICH) ---

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    if (Math.random() < 0.3) {
        heart.classList.add('gold');
    }

    heart.style.left = Math.random() * 100 + 'vw';
    const size = Math.random() * 20 + 15;
    heart.style.setProperty('--heart-size', size + 'px');
    heart.style.animationDuration = Math.random() * 6 + 6 + 's';

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 14000);
}

setInterval(createHeart, 400);

for(let i = 0; i < 15; i++) {
    setTimeout(createHeart, i * 200);
}

