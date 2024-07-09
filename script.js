const rainContainer = document.querySelector('.rain');
const numberOfDrops = 300;
const colors = ['rgba(0, 255, 255, 0.7)', 'rgba(255, 0, 255, 0.7)', 'rgba(255, 255, 0, 0.7)'];

// Adding background sounds
const rainSound = document.getElementById('rain-sound');
const thunderSound = document.getElementById('thunder-sound');
rainSound.play();

function createDrop() {
    const drop = document.createElement('div');
    drop.classList.add('drop');

    const leftPosition = Math.random() * window.innerWidth;
    const animationDuration = Math.random() * 1.5 + 0.5;
    const animationDelay = Math.random() * 5;
    const dropWidth = Math.random() * 2 + 1;
    const dropHeight = Math.random() * 80 + 20;
    const dropColor = colors[Math.floor(Math.random() * colors.length)];
    const dropOpacity = Math.random() * 0.5 + 0.5;
    const dropBlur = Math.random() * 2;
    const wind = (Math.random() - 0.5) * 20;

    drop.style.left = `${leftPosition}px`;
    drop.style.animationDuration = `${animationDuration}s`;
    drop.style.animationDelay = `${animationDelay}s`;
    drop.style.width = `${dropWidth}px`;
    drop.style.height = `${dropHeight}px`;
    drop.style.background = `linear-gradient(to bottom, ${dropColor}, rgba(0, 255, 255, 0.1))`;
    drop.style.opacity = dropOpacity;
    drop.style.filter = `blur(${dropBlur}px)`;
    drop.style.setProperty('--wind', `${wind}px`);

    drop.addEventListener('animationend', () => {
        const splash = document.createElement('div');
        splash.classList.add('splash');
        splash.style.left = drop.style.left;
        splash.style.width = drop.style.width;
        rainContainer.appendChild(splash);
        setTimeout(() => splash.remove(), 300);
    });

    rainContainer.appendChild(drop);

    // Create trail effect
    const trail = document.createElement('div');
    trail.classList.add('trail');
    trail.style.left = drop.style.left;
    trail.style.width = drop.style.width;
    trail.style.height = `${parseFloat(drop.style.height) * 1.5}px`;
    trail.style.animationDuration = drop.style.animationDuration;
    trail.style.animationDelay = drop.style.animationDelay;
    rainContainer.appendChild(trail);
}

// Create initial drops
for (let i = 0; i < numberOfDrops; i++) {
    createDrop();
}

// Add raindrop splashes on click
rainContainer.addEventListener('click', (event) => {
    const splash = document.createElement('div');
    splash.classList.add('splash');
    splash.style.left = `${event.clientX}px`;
    splash.style.bottom = `${window.innerHeight - event.clientY}px`;
    splash.style.width = '4px';
    rainContainer.appendChild(splash);
    setTimeout(() => splash.remove(), 300);
});

// Random thunderstorms
function triggerThunderstorm() {
    if (Math.random() > 0.7) {
        thunderSound.play();
        lightning.classList.add('active');
        setTimeout(() => {
            lightning.classList.remove('active');
        }, 1000);
    }
}

// Periodically trigger thunderstorms
setInterval(triggerThunderstorm, 10000);

// Update the rain effect on window resize
window.addEventListener('resize', () => {
    const drops = document.querySelectorAll('.drop');
    drops.forEach(drop => {
        drop.style.left = `${Math.random() * window.innerWidth}px`;
    });
});
