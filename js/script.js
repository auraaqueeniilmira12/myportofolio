// ========== NAVBAR SCROLL BLUR ==========
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ========== MOBILE MENU HAMBURGER ==========
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
        
        const icon = hamburger.querySelector('i');
        if (mobileMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    document.querySelectorAll(".mobile-nav-link").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("active");
            const icon = hamburger.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
}

window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && mobileMenu && mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        const icon = hamburger.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// ========== COSMIC STARS (HOME) ==========
function createCosmicStars() {
    const starsContainer = document.getElementById('cosmicStars');
    if (!starsContainer) return;
    
    starsContainer.innerHTML = '';
    
    for(let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.classList.add('cosmic-star');
        star.style.width = Math.random() * 2 + 0.5 + 'px';
        star.style.height = star.style.width;
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 4 + 's';
        star.style.animationDuration = Math.random() * 3 + 2 + 's';
        starsContainer.appendChild(star);
    }
}

createCosmicStars();

// ========== MODAL READ MORE (ABOUT) ==========
const aboutModal = document.getElementById('aboutModal');
const readMoreBtn = document.getElementById('readMoreBtn');
const closeModalBtn = document.getElementById('closeModalBtn');

if (readMoreBtn && aboutModal && closeModalBtn) {
    readMoreBtn.addEventListener('click', () => {
        aboutModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    closeModalBtn.addEventListener('click', () => {
        aboutModal.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    aboutModal.addEventListener('click', (e) => {
        if (e.target === aboutModal) {
            aboutModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ========== CONTACT FORM ==========
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (name && email && message) {
            alert('✨ Message sent successfully! I will reply within 24 hours.');
            contactForm.reset();
        } else {
            alert('⚠️ Please fill in all required fields.');
        }
    });
}

// ========== BACK TO TOP BUTTON ==========
const backToTop = document.getElementById('backToTop');

if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    });
    
    window.dispatchEvent(new Event('scroll'));
}

// ========== ABOUT CONSTELLATION ==========
function createAboutConstellation() {
    const container = document.getElementById('aboutConstellation');
    if (!container) return;

    const w = container.offsetWidth || window.innerWidth;
    const h = container.offsetHeight || 600;

    const stars = Array.from({ length: 28 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h
    }));

    const connections = [
        [0,3], [3,7], [7,11], [11,0],
        [1,5], [5,9], [9,13], [13,1],
        [2,6], [6,10], [10,14], [14,2],
        [4,8], [8,12], [12,16], [16,4],
        [15,19], [19,23], [23,27], [27,15],
        [17,21], [21,25], [17,25]
    ];

    let svg = `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">`;

    connections.forEach(([a, b]) => {
        if (stars[a] && stars[b]) {
            svg += `<line 
                x1="${stars[a].x}" y1="${stars[a].y}" 
                x2="${stars[b].x}" y2="${stars[b].y}" 
                stroke="rgba(192,132,252,0.25)" 
                stroke-width="0.8"
                class="constellation-line"
            />`;
        }
    });

    stars.forEach((s, i) => {
        const size = Math.random() * 2 + 1;
        const opacity = Math.random() * 0.5 + 0.3;
        svg += `<circle 
            cx="${s.x}" cy="${s.y}" r="${size}"
            fill="#ffffff" 
            opacity="${opacity}"
            class="constellation-dot"
            style="animation-delay:${(i * 0.3) % 5}s; filter: drop-shadow(0 0 2px rgba(192,132,252,0.5));"
        />`;
    });

    for (let i = 0; i < 5; i++) {
        const coreStar = stars[Math.floor(Math.random() * stars.length)];
        if (coreStar) {
            svg += `<circle 
                cx="${coreStar.x}" cy="${coreStar.y}" r="3.5"
                fill="#c084fc" 
                opacity="0.7"
                class="constellation-dot constellation-core"
                style="animation-delay:${Math.random() * 3}s; filter: drop-shadow(0 0 5px rgba(192,132,252,0.8));"
            />`;
        }
    }

    svg += `</svg>`;
    container.innerHTML = svg;
}

if (document.getElementById('aboutConstellation')) {
    createAboutConstellation();
    window.addEventListener('resize', () => {
        createAboutConstellation();
    });
}

// ========== ABOUT PARTICLES ==========
function createAboutParticles() {
    const container = document.getElementById('aboutParticles');
    if (!container) return;

    container.innerHTML = '';

    for (let i = 0; i < 65; i++) {
        const p = document.createElement('div');
        p.classList.add('about-particle');

        const size = Math.random() * 3 + 1;
        let bgColor;
        const randomColor = Math.random();
        
        if (randomColor > 0.6) {
            bgColor = `rgba(192, 132, 252, ${Math.random() * 0.5 + 0.2})`;
        } else if (randomColor > 0.3) {
            bgColor = `rgba(255, 255, 255, ${Math.random() * 0.4 + 0.1})`;
        } else {
            bgColor = `rgba(168, 85, 247, ${Math.random() * 0.4 + 0.1})`;
        }

        p.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            background: radial-gradient(circle, ${bgColor}, transparent);
            border-radius: 50%;
            position: absolute;
            pointer-events: none;
            animation: particleFloat ${Math.random() * 12 + 10}s linear infinite;
            animation-delay: ${Math.random() * 8}s;
            opacity: 0;
        `;
        container.appendChild(p);
    }
}

if (document.getElementById('aboutParticles')) {
    createAboutParticles();
}

// ========== SCROLL REVEAL ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-category, .project-card, .contact-form-box, .contact-info-box, .footer-column').forEach(el => {
    observer.observe(el);
});

// ========== INITIALIZE ALL ==========
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('aboutConstellation')) {
        createAboutConstellation();
    }
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
// ================= ANIMASI SCROLL =================

const scrollSections = document.querySelectorAll('.scroll-section');
const heroScroll = document.querySelector('.hero');
const aboutScroll = document.querySelector('.about');

let lastScrollY = window.scrollY;
let scrollDirection = 'down';

function handleScrollAnimation() {
    const currentScrollY = window.scrollY;
    const windowH = window.innerHeight;
    
    // Tentukan arah scroll
    if (currentScrollY > lastScrollY) {
        scrollDirection = 'down';
    } else if (currentScrollY < lastScrollY) {
        scrollDirection = 'up';
    }
    
    // Loop semua section
    scrollSections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        const isAbove = sectionBottom < currentScrollY + 50;
        const isBelow = sectionTop > currentScrollY + windowH - 100;
        
        // Scroll ke BAWAH: section bawah hilang ke BAWAH dulu
        if (scrollDirection === 'down' && isAbove) {
            // Section sudah dilewati dari atas
            section.classList.remove('show', 'hide-up');
            section.classList.add('hide-down');
        }
        // Scroll ke ATAS: section atas hilang ke ATAS dulu
        else if (scrollDirection === 'up' && isBelow) {
            // Section belum masuk dari bawah
            section.classList.remove('show', 'hide-down');
            section.classList.add('hide-up');
        }
        // Section yang sedang aktif atau akan muncul
        else if (!isAbove && !isBelow) {
            // Munculkan section
            setTimeout(() => {
                section.classList.remove('hide-down', 'hide-up');
                section.classList.add('show');
            }, 50);
        }
    });
    
    // Hero khusus
    if (heroScroll && aboutScroll) {
        if (currentScrollY + 100 > aboutScroll.offsetTop) {
            heroScroll.classList.remove('show', 'hide-up');
            heroScroll.classList.add('hide-down');
        } else {
            heroScroll.classList.remove('hide-down', 'hide-up');
            heroScroll.classList.add('show');
        }
    }
    
    lastScrollY = currentScrollY;
}

// Event scroll
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(() => {
            handleScrollAnimation();
            ticking = false;
        });
        ticking = true;
    }
});

window.addEventListener('load', handleScrollAnimation);

// ================= LOADING SPINNER =================
window.addEventListener('load', function() {
    const loader = document.getElementById('loadingOverlay');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hide');
        }, 800);
    }
});