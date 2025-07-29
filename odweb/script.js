const hamburger = document.getElementById('hamburgerIcon');
const sideMenu = document.getElementById('sideMenu');
const overlay = document.getElementById('overlay');
const navbar = document.getElementById('navbar');

// Toggle side menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    sideMenu.classList.toggle('open');
    overlay.classList.toggle('show');
    navbar.classList.toggle('dimmed');  // Fade navbar
});


// Close menu when clicking overlay
overlay.addEventListener('click', () => {
    hamburger.classList.remove('active');
    sideMenu.classList.remove('open');
    overlay.classList.remove('show');
    navbar.classList.remove('dimmed'); // Restore navbar
});

function animateCounter(id, target, speed, suffix = "+") {
    const element = document.getElementById(id);
    let count = 0;
    const increment = target / speed; // controls speed (higher = slower)

    const updateCounter = () => {
        count += increment;
        if (count < target) {
            element.textContent = Math.floor(count) + suffix;
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + suffix;
        }
    };

    updateCounter();
}

// Trigger on page load
window.addEventListener("load", () => {
    animateCounter("counter1", 12, 50);   // 12+
    animateCounter("counter2", 150, 50);  // 150+
    animateCounter("counter3", 17, 50);   // 17+
});


