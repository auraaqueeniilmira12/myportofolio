// ==================== DOM ELEMENTS ====================
const dom = {
    navbar: document.querySelector('.navbar'),
    hamburger: document.getElementById('hamburger'),
    mobileMenu: document.getElementById('mobileMenu'),
    backToTop: document.getElementById('backToTop'),
    aboutModal: document.getElementById('aboutModal'),
    readMoreBtn: document.getElementById('readMoreBtn'),
    closeModalBtn: document.getElementById('closeModalBtn'),
    projectModal: document.getElementById('projectModal'),
    closeProjectModal: document.getElementById('closeProjectModal'),
    certOverlay: document.getElementById('certModalOverlay'),
    skillsSection: document.querySelector('.skills')
};

// ==================== NAVBAR SCROLL ====================
let tickingNav = false;
window.addEventListener('scroll', () => {
    if (!tickingNav) {
        requestAnimationFrame(() => {
            dom.navbar?.classList[window.scrollY > 50 ? 'add' : 'remove']('scrolled');
            tickingNav = false;
        });
        tickingNav = true;
    }
});

// ==================== MOBILE MENU ====================
if (dom.hamburger && dom.mobileMenu) {
    const toggleMenu = () => {
        dom.mobileMenu.classList.toggle('active');
        const icon = dom.hamburger.querySelector('i');
        icon?.classList.toggle('fa-bars');
        icon?.classList.toggle('fa-times');
    };
    
    dom.hamburger.addEventListener('click', toggleMenu);
    
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            dom.mobileMenu.classList.remove('active');
            dom.hamburger.querySelector('i')?.classList.add('fa-bars');
            dom.hamburger.querySelector('i')?.classList.remove('fa-times');
        });
    });
    
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && dom.mobileMenu.classList.contains('active')) {
            dom.mobileMenu.classList.remove('active');
            dom.hamburger.querySelector('i')?.classList.add('fa-bars');
        }
    });
}

// ==================== COSMIC STARS ====================
const starContainer = document.getElementById('cosmicStars');
if (starContainer) {
    const starCount = Math.min(80, Math.floor(window.innerWidth / 20));
    starContainer.innerHTML = '';
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('cosmic-star');
        const size = Math.random() * 2 + 0.5;
        star.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 4}s;
            animation-duration: ${Math.random() * 3 + 2}s;
        `;
        starContainer.appendChild(star);
    }
}

// ==================== READ MORE MODAL ====================
if (dom.readMoreBtn && dom.aboutModal && dom.closeModalBtn) {
    const openModal = () => {
        dom.aboutModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };
    
    const closeModal = () => {
        dom.aboutModal.classList.remove('active');
        document.body.style.overflow = '';
    };
    
    dom.readMoreBtn.addEventListener('click', openModal);
    dom.closeModalBtn.addEventListener('click', closeModal);
    dom.aboutModal.addEventListener('click', (e) => {
        if (e.target === dom.aboutModal) closeModal();
    });
}

// ==================== BACK TO TOP ====================
if (dom.backToTop) {
    const toggleBackToTop = () => {
        const isVisible = window.scrollY > 500;
        dom.backToTop.style.cssText = `
            opacity: ${isVisible ? '1' : '0'};
            visibility: ${isVisible ? 'visible' : 'hidden'};
        `;
    };
    
    dom.backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    window.addEventListener('scroll', toggleBackToTop);
    toggleBackToTop();
}

// ==================== SCROLL REVEAL ====================
const revealElements = document.querySelectorAll(
    '.skill-category, .project-card, .contact-form-box, .contact-info-box, .footer-column'
);
const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('in-view');
        });
    },
    { threshold: 0.1, rootMargin: '50px' }
);
revealElements.forEach(el => revealObserver.observe(el));

// ==================== SMOOTH SCROLL ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ==================== SKILLS OVERALL MASTERY ====================
function updateOverallMastery() {
    // Web Developer
    const webDev = document.querySelector('.skill-category:first-child');
    if (webDev) {
        let total = 0, count = 0;
        webDev.querySelectorAll('.skill-item .skill-percent').forEach(el => {
            const percent = parseInt(el.textContent);
            if (!isNaN(percent)) { total += percent; count++; }
        });
        
        const webTools = ['HTML', 'CSS', 'JavaScript', 'Laravel', 'Tailwind', 'PHP', 'SQL'];
        document.querySelectorAll('.tool-card').forEach(card => {
            const toolName = card.querySelector('.tool-name')?.textContent;
            const percentSpan = card.querySelector('.tool-percent span');
            if (webTools.includes(toolName) && percentSpan) {
                total += parseInt(percentSpan.textContent) || 0;
                count++;
            }
        });
        
        const avg = Math.round(total / count);
        const overallPercent = webDev.querySelector('.overall-percent');
        const overallFill = webDev.querySelector('.overall-progress-fill');
        
        if (overallPercent) overallPercent.textContent = avg + '%';
        if (overallFill) overallFill.style.width = avg + '%';
    }
    
    // Writer
    const writer = document.querySelector('.skill-category:last-child');
    if (writer) {
        let total = 0, count = 0;
        writer.querySelectorAll('.skill-item .skill-percent').forEach(el => {
            const percent = parseInt(el.textContent);
            if (!isNaN(percent)) { total += percent; count++; }
        });
        
        const writerTools = ['Wattpad', 'Wizpen', 'MS Word'];
        document.querySelectorAll('.tool-card').forEach(card => {
            const toolName = card.querySelector('.tool-name')?.textContent;
            const percentSpan = card.querySelector('.tool-percent span');
            if (writerTools.includes(toolName) && percentSpan) {
                total += parseInt(percentSpan.textContent) || 0;
                count++;
            }
        });
        
        const avg = Math.round(total / count);
        const overallPercent = writer.querySelector('.overall-percent');
        const overallFill = writer.querySelector('.overall-progress-fill');
        
        if (overallPercent) overallPercent.textContent = avg + '%';
        if (overallFill) overallFill.style.width = avg + '%';
    }
}

function animateSkills() {
    document.querySelectorAll('.overall-progress-fill, .progress-fill, .tool-progress-fill').forEach(fill => {
        const targetWidth = fill.style.width;
        if (targetWidth && targetWidth !== '0%') {
            fill.style.transition = 'width 1s cubic-bezier(0.4, 0, 0.2, 1)';
        }
    });
}

let skillsAnimated = false;
if (dom.skillsSection) {
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !skillsAnimated) {
                updateOverallMastery();
                animateSkills();
                skillsAnimated = true;
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    skillsObserver.observe(dom.skillsSection);
}

// ==================== PROJECTS MODAL ====================
const projectModal = dom.projectModal;
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalTech = document.getElementById('modalTech');
const modalImage = document.getElementById('modalImage');
const modalLink = document.getElementById('modalLink');
const prevSlide = document.getElementById('prevSlide');
const nextSlide = document.getElementById('nextSlide');

let currentImages = [];
let currentImageIndex = 0;

document.querySelectorAll('.project-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        if (modalTitle) modalTitle.textContent = btn.getAttribute('data-title');
        if (modalDesc) modalDesc.textContent = btn.getAttribute('data-desc');
        if (modalLink) modalLink.href = btn.getAttribute('data-link');
        
        const tech = btn.getAttribute('data-tech');
        if (modalTech && tech) {
            modalTech.innerHTML = tech.split(',').map(s => `<span>${s.trim()}</span>`).join('');
        }
        
        const images = btn.getAttribute('data-images');
        if (images && modalImage) {
            currentImages = images.split(',');
            currentImageIndex = 0;
            modalImage.src = currentImages[0];
        }
        
        if (modalLink) {
            modalLink.style.cssText = btn.getAttribute('data-link') === '#'
                ? 'opacity: 0.5; pointer-events: none'
                : 'opacity: 1; pointer-events: auto';
        }
        
        if (projectModal) {
            projectModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

const closeModal = () => {
    if (projectModal) {
        projectModal.classList.remove('active');
        document.body.style.overflow = '';
    }
};

if (dom.closeProjectModal) dom.closeProjectModal.addEventListener('click', closeModal);
if (projectModal) projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) closeModal();
});

const changeSlide = (direction) => {
    if (currentImages.length === 0 || !modalImage) return;
    currentImageIndex = (currentImageIndex + direction + currentImages.length) % currentImages.length;
    modalImage.src = currentImages[currentImageIndex];
};

if (prevSlide) prevSlide.addEventListener('click', () => changeSlide(-1));
if (nextSlide) nextSlide.addEventListener('click', () => changeSlide(1));

// ==================== PROJECTS FILTER ====================
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

if (filterBtns.length) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                const cat = card.getAttribute('data-category');
                card.classList.toggle('hide', filter !== 'all' && !cat.includes(filter));
            });
        });
    });
}

// ==================== CERTIFICATES MODAL ====================
window.openAllCerts = function() {
    if (dom.certOverlay) {
        dom.certOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        generateCertDots();
    }
};

window.closeCertModal = function() {
    if (dom.certOverlay) {
        dom.certOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
};

window.openCertModal = function(index) {
    openAllCerts();
    const track = document.getElementById('certScrollTrack');
    if (!track) return;
    const slides = track.querySelectorAll('.cert-slide');
    if (slides[index]) {
        setTimeout(() => {
            slides[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }, 150);
    }
};

window.scrollCerts = function(direction) {
    const track = document.getElementById('certScrollTrack');
    if (!track) return;
    const slideWidth = track.querySelector('.cert-slide')?.offsetWidth || track.offsetWidth;
    track.scrollBy({ left: direction === 'right' ? slideWidth : -slideWidth, behavior: 'smooth' });
};

function generateCertDots() {
    const track = document.getElementById('certScrollTrack');
    const dotsContainer = document.getElementById('certDots');
    if (!track || !dotsContainer) return;
    
    const slides = track.querySelectorAll('.cert-slide');
    if (slides.length === 0) return;
    
    dotsContainer.innerHTML = '';
    
    slides.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.classList.add('cert-dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            slides[i].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        });
        dotsContainer.appendChild(dot);
    });
    
    let scrollTimer;
    track.addEventListener('scroll', () => {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
            const containerRect = track.getBoundingClientRect();
            let activeIndex = 0;
            slides.forEach((slide, i) => {
                const slideRect = slide.getBoundingClientRect();
                if (slideRect.left >= containerRect.left && slideRect.left < containerRect.right) {
                    activeIndex = i;
                }
            });
            dotsContainer.querySelectorAll('.cert-dot').forEach((dot, i) => {
                dot.classList.toggle('active', i === activeIndex);
            });
        }, 50);
    });
}

// ==================== KEYBOARD NAVIGATION ====================
document.addEventListener('keydown', (e) => {
    if (dom.certOverlay && dom.certOverlay.classList.contains('active')) {
        if (e.key === 'Escape') closeCertModal();
        if (e.key === 'ArrowRight') scrollCerts('right');
        if (e.key === 'ArrowLeft') scrollCerts('left');
    }
    if (projectModal && projectModal.classList.contains('active') && e.key === 'Escape') {
        closeModal();
    }
});

// ==================== INITIALIZE ====================
document.addEventListener('DOMContentLoaded', () => {
    updateOverallMastery();
    const loadingOverlay = document.getElementById('loadingOverlay');
    if (loadingOverlay) {
        loadingOverlay.style.display = 'none';
    }
});