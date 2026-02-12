const envelopeBtn = document.getElementById('envelope-btn');
const heartsContainer = document.getElementById('hearts-container');
// NEU: Wir suchen das Audio-Element
const bgMusic = document.getElementById('background-music');

// --- 1. Klick-Logik für den Brief & Musikstart ---
envelopeBtn.addEventListener('click', function() {
    // 1a. Brief öffnen Animation starten
    document.body.classList.add('letter-opened');

    // 1b. NEU: Musik abspielen versuchen
    // Wir nutzen .play().catch(), falls der Browser es doch blockiert,
    // damit kein Fehler die Seite kaputt macht.
    bgMusic.play().catch(error => {
        console.log("Musik konnte nicht automatisch gestartet werden. Eventuell hat der Browser es blockiert.", error);
    });

    // Optional: Lautstärke etwas reduzieren (0.5 ist 50% Lautstärke)
    // bgMusic.volume = 0.5; 
});


// --- 2. Logik für die fliegenden Herzen (BLEIBT GLEICH) ---

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    // Zufällig entscheiden, ob es ein goldenes Herz sein soll (ca. 30% Chance)
    if (Math.random() < 0.3) {
        heart.classList.add('gold');
    }

    // Zufällige Position links
    heart.style.left = Math.random() * 100 + 'vw';
    
    // Zufällige Größe (zwischen 15px und 35px)
    const size = Math.random() * 20 + 15;
    
    // Größe an CSS-Variable übergeben
    heart.style.setProperty('--heart-size', size + 'px');


    // Zufällige Animationsdauer
    heart.style.animationDuration = Math.random() * 6 + 6 + 's';

    heartsContainer.appendChild(heart);

    // Herz löschen
    setTimeout(() => {
        heart.remove();
    }, 12000);
}

// Starte die Herz-Produktion!
setInterval(createHeart, 400);

// Ein paar Herzen sofort erstellen
for(let i = 0; i < 5; i++) {
    setTimeout(createHeart, i * 200);
}