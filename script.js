function toggleMenu() {
            const menu = document.getElementById('menuItems');
            menu.classList.toggle('active');
        }
        
/* Add this JavaScript to create the typing effect */
const texts = ['Web Developer', 'Frontend Developer', 'UI/UX Designer'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000;

function typeText() {
    const typingElement = document.querySelector('.typing-text');
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeText, newTextDelay);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeText, typingDelay);
    } else {
        setTimeout(typeText, isDeleting ? erasingDelay : typingDelay);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(typeText, newTextDelay);
});

// Add intersection observer for scroll animations
const cards = document.querySelectorAll('.project-card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            entry.target.style.animationDelay = `${index * 0.2}s`;
            entry.target.style.animationPlayState = 'running';
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

cards.forEach(card => {
    observer.observe(card);
    card.style.animationPlayState = 'paused';
});

function toggleMenu() {
    const menu = document.getElementById('menuItems');
    const hamburger = document.querySelector('.hamburger');
    
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');

    // Prevent scrolling when menu is open
    document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
}

// Close menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        const menu = document.getElementById('menuItems');
        const hamburger = document.querySelector('.hamburger');
        
        menu.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    const menu = document.getElementById('menuItems');
    const hamburger = document.querySelector('.hamburger');
    
    if (menu.classList.contains('active') && 
        !menu.contains(e.target) && 
        !hamburger.contains(e.target)) {
        menu.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.style.overflow = '';
    }
});