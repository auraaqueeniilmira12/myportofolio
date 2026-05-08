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
            if (dom.navbar) {
                if (window.scrollY > 50) {
                    dom.navbar.classList.add('scrolled');
                } else {
                    dom.navbar.classList.remove('scrolled');
                }
            }
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
        if (icon) {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        }
    };
    
    dom.hamburger.addEventListener('click', toggleMenu);
    
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            dom.mobileMenu.classList.remove('active');
            const icon = dom.hamburger.querySelector('i');
            if (icon) {
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            }
        });
    });
    
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && dom.mobileMenu.classList.contains('active')) {
            dom.mobileMenu.classList.remove('active');
            const icon = dom.hamburger.querySelector('i');
            if (icon) {
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            }
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
        dom.aboutModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    };
    
    const closeModal = () => {
        dom.aboutModal.style.display = 'none';
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
        dom.backToTop.style.opacity = isVisible ? '1' : '0';
        dom.backToTop.style.visibility = isVisible ? 'visible' : 'hidden';
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
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    },
    { threshold: 0.1, rootMargin: '50px' }
);
revealElements.forEach(el => revealObserver.observe(el));

// ==================== SMOOTH SCROLL ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ==================== SKILLS OVERALL MASTERY ====================
function updateOverallMastery() {
    // Web Developer
    const webDev = document.querySelector('.skill-category:nth-child(1)');
    if (webDev) {
        let total = 0, count = 0;
        webDev.querySelectorAll('.skill-item .skill-percent').forEach(el => {
            const percent = parseInt(el.textContent);
            if (!isNaN(percent)) {
                total += percent;
                count++;
            }
        });
        
        const webTools = ['HTML', 'CSS', 'JavaScript', 'React', 'Laravel', 'PHP', 'SQL'];
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
    const writer = document.querySelector('.skill-category:nth-child(2)');
    if (writer) {
        let total = 0, count = 0;
        writer.querySelectorAll('.skill-item .skill-percent').forEach(el => {
            const percent = parseInt(el.textContent);
            if (!isNaN(percent)) {
                total += percent;
                count++;
            }
        });
        
        const writerTools = ['Wattpad', 'Wizpen', 'MS Office'];
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
    
    // Designer
    const designer = document.querySelector('.skill-category:nth-child(3)');
    if (designer) {
        let total = 0, count = 0;
        designer.querySelectorAll('.skill-item .skill-percent').forEach(el => {
            const percent = parseInt(el.textContent);
            if (!isNaN(percent)) {
                total += percent;
                count++;
            }
        });
        
        const designTools = ['Figma', 'Pixelab', 'Picsart', 'Canva'];
        document.querySelectorAll('.tool-card').forEach(card => {
            const toolName = card.querySelector('.tool-name')?.textContent;
            const percentSpan = card.querySelector('.tool-percent span');
            if (designTools.includes(toolName) && percentSpan) {
                total += parseInt(percentSpan.textContent) || 0;
                count++;
            }
        });
        
        const avg = Math.round(total / count);
        const overallPercent = designer.querySelector('.overall-percent');
        const overallFill = designer.querySelector('.overall-progress-fill');
        
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
            const isDisabled = btn.getAttribute('data-link') === '#';
            modalLink.style.opacity = isDisabled ? '0.5' : '1';
            modalLink.style.pointerEvents = isDisabled ? 'none' : 'auto';
        }
        
        if (projectModal) {
            projectModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

const closeProjectModal = () => {
    if (projectModal) {
        projectModal.classList.remove('active');
        document.body.style.overflow = '';
    }
};

if (dom.closeProjectModal) dom.closeProjectModal.addEventListener('click', closeProjectModal);
if (projectModal) projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) closeProjectModal();
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
                if (filter === 'all' || (cat && cat.includes(filter))) {
                    card.classList.remove('hide');
                } else {
                    card.classList.add('hide');
                }
            });
        });
    });
}

// ==================== CERTIFICATES MODAL FUNCTIONS ====================
window.openAllCerts = window.openAllCerts || function() {
    console.warn('sertifikat.js not loaded yet');
};
window.closeCertModal = window.closeCertModal || function() {
    console.warn('sertifikat.js not loaded yet');
};
window.openCertModal = window.openCertModal || function(index) {
    console.warn('sertifikat.js not loaded yet');
};
window.scrollCerts = window.scrollCerts || function(direction) {
    console.warn('sertifikat.js not loaded yet');
};

// ==================== KEYBOARD NAVIGATION ====================
document.addEventListener('keydown', (e) => {
    const certOverlay = document.getElementById('certModalOverlay');
    if (certOverlay && certOverlay.classList.contains('active')) {
        if (e.key === 'Escape') {
            if (typeof closeCertModal === 'function') closeCertModal();
        }
        if (e.key === 'ArrowRight') {
            if (typeof scrollCerts === 'function') scrollCerts('right');
        }
        if (e.key === 'ArrowLeft') {
            if (typeof scrollCerts === 'function') scrollCerts('left');
        }
    }
    if (projectModal && projectModal.classList.contains('active') && e.key === 'Escape') {
        closeProjectModal();
    }
});

// ==================== INITIALIZE ====================
document.addEventListener('DOMContentLoaded', () => {
    updateOverallMastery();
    
    // Panggil updateOverallMastery lagi setelah sertifikat.js load
    setTimeout(() => {
        updateOverallMastery();
    }, 500);
    
    const loadingOverlay = document.getElementById('loadingOverlay');
    if (loadingOverlay) {
        setTimeout(() => {
            loadingOverlay.style.opacity = '0';
            setTimeout(() => {
                loadingOverlay.style.display = 'none';
            }, 300);
        }, 500);
    }
});

// ==================== ABOUT MODAL STYLE FIX ====================
if (dom.aboutModal) {
    if (dom.readMoreBtn && !dom.readMoreBtn.onclick) {
        dom.readMoreBtn.addEventListener('click', () => {
            dom.aboutModal.style.display = 'flex';
        });
    }
}