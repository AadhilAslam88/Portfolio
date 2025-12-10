// 1. Typing Effect for the Hero Section
const textElement = document.querySelector(".typing-text");
// Updated based on Resume Summary [cite: 4, 71]
const textArray = ["Data Science Student", "Computer Vision Enthusiast", "Cloud Systems Developer"]; 
let arrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[arrayIndex].length) {
        textElement.textContent += textArray[arrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (charIndex > 0) {
        textElement.textContent = textArray[arrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        arrayIndex++;
        if (arrayIndex >= textArray.length) arrayIndex = 0;
        setTimeout(type, 500);
    }
}

document.addEventListener("DOMContentLoaded", function() { 
    if(textArray.length) setTimeout(type, 1000);
});

// 2. Smooth Scrolling (Same as before)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 3. Hamburger Menu Toggle (Same as before)
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
    navLinks.style.flexDirection = "column";
    navLinks.style.position = "absolute";
    navLinks.style.top = "60px";
    navLinks.style.right = "0";
    navLinks.style.background = "rgba(15, 23, 42, 0.95)";
    navLinks.style.width = "100%";
    navLinks.style.padding = "1rem";
});

// 4. Real-time Clock
function updateClock() {
    const clockElement = document.getElementById("clock");
    if (clockElement) {
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        clockElement.textContent = timeString;
    }
}

setInterval(updateClock, 1000);
updateClock(); // Initial call
