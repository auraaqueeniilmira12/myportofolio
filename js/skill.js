// ========== SKILLS & TOOLS SECTION ==========

// ========== 1. UPDATE OVERALL MASTERY OTOMATIS ==========
function updateOverallMastery() {
    // Update Web Developer Overall Mastery
    const webDevCategory = document.querySelector('.skill-category:first-child');
    if (webDevCategory) {
        const skillPercentages = webDevCategory.querySelectorAll('.skill-item .skill-percent');
        let total = 0;
        let count = 0;
        skillPercentages.forEach(el => {
            let percent = parseInt(el.textContent);
            if (!isNaN(percent)) {
                total += percent;
                count++;
            }
        });
        
        // Ambil juga dari tools section untuk web development tools
        const webTools = ['HTML', 'CSS', 'JavaScript', 'Laravel', 'Tailwind', 'PHP', 'SQL'];
        const toolCards = document.querySelectorAll('.tool-card');
        toolCards.forEach(card => {
            const toolName = card.querySelector('.tool-name')?.textContent;
            const toolPercentSpan = card.querySelector('.tool-percent span');
            if (webTools.includes(toolName) && toolPercentSpan) {
                let percent = parseInt(toolPercentSpan.textContent);
                if (!isNaN(percent)) {
                    total += percent;
                    count++;
                }
            }
        });
        
        const average = Math.round(total / count);
        
        const overallPercent = webDevCategory.querySelector('.overall-percent');
        const overallFill = webDevCategory.querySelector('.overall-progress-fill');
        if (overallPercent) {
            overallPercent.textContent = average + '%';
            overallPercent.setAttribute('data-original', average + '%');
        }
        if (overallFill) {
            overallFill.style.width = average + '%';
        }
    }
    
    // Update Writer Overall Mastery
    const writerCategory = document.querySelector('.skill-category:last-child');
    if (writerCategory) {
        const skillPercentages = writerCategory.querySelectorAll('.skill-item .skill-percent');
        let total = 0;
        let count = 0;
        skillPercentages.forEach(el => {
            let percent = parseInt(el.textContent);
            if (!isNaN(percent)) {
                total += percent;
                count++;
            }
        });
        
        const writerTools = ['Wattpad', 'Wizpen', 'MS Word'];
        const toolCards = document.querySelectorAll('.tool-card');
        toolCards.forEach(card => {
            const toolName = card.querySelector('.tool-name')?.textContent;
            const toolPercentSpan = card.querySelector('.tool-percent span');
            if (writerTools.includes(toolName) && toolPercentSpan) {
                let percent = parseInt(toolPercentSpan.textContent);
                if (!isNaN(percent)) {
                    total += percent;
                    count++;
                }
            }
        });
        
        const average = Math.round(total / count);
        
        const overallPercent = writerCategory.querySelector('.overall-percent');
        const overallFill = writerCategory.querySelector('.overall-progress-fill');
        if (overallPercent) {
            overallPercent.textContent = average + '%';
            overallPercent.setAttribute('data-original', average + '%');
        }
        if (overallFill) {
            overallFill.style.width = average + '%';
        }
    }
}

// ========== 2. ANIMASI COUNT-UP ==========
function animateNumber(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const currentValue = Math.floor(progress * (end - start) + start);
        element.textContent = currentValue + '%';
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// ========== 3. ANIMASI PROGRESS BARS ==========
function animateOverallProgress() {
    const overallFills = document.querySelectorAll('.overall-progress-fill');
    overallFills.forEach(fill => {
        let targetWidth = fill.style.width;
        if (targetWidth && targetWidth !== '0%') {
            fill.style.transition = 'none';
            fill.style.width = '0%';
            void fill.offsetHeight;
            fill.style.transition = 'width 1.8s cubic-bezier(0.4, 0, 0.2, 1)';
            fill.style.width = targetWidth;
        }
    });
}

function animateOverallPercent() {
    const overallPercentElements = document.querySelectorAll('.overall-percent');
    overallPercentElements.forEach(el => {
        const targetPercent = parseInt(el.textContent);
        animateNumber(el, 0, targetPercent, 1800);
    });
}

function animateSkillProgress() {
    const progressFills = document.querySelectorAll('.skill-item .progress-fill');
    progressFills.forEach(fill => {
        let targetWidth = fill.style.width;
        if (targetWidth && targetWidth !== '0%') {
            fill.style.transition = 'none';
            fill.style.width = '0%';
            void fill.offsetHeight;
            fill.style.transition = 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)';
            fill.style.width = targetWidth;
        }
    });
}

function animateSkillPercent() {
    const skillPercentElements = document.querySelectorAll('.skill-item .skill-percent');
    skillPercentElements.forEach(el => {
        const targetPercent = parseInt(el.textContent);
        animateNumber(el, 0, targetPercent, 1200);
    });
}

function animateToolProgress() {
    const toolFills = document.querySelectorAll('.tool-progress-fill');
    toolFills.forEach(fill => {
        let targetWidth = fill.style.width;
        if (targetWidth && targetWidth !== '0%') {
            fill.style.transition = 'none';
            fill.style.width = '0%';
            void fill.offsetHeight;
            fill.style.transition = 'width 1s cubic-bezier(0.4, 0, 0.2, 1)';
            fill.style.width = targetWidth;
        }
    });
}

function animateToolPercent() {
    const toolPercentSpans = document.querySelectorAll('.tool-percent span');
    toolPercentSpans.forEach(el => {
        const targetPercent = parseInt(el.textContent);
        animateNumber(el, 0, targetPercent, 1000);
    });
}

// ========== 4. MAIN ANIMATION FUNCTION ==========
function animateAllSkills() {
    updateOverallMastery();
    
    animateOverallProgress();
    animateOverallPercent();
    
    setTimeout(() => {
        animateSkillProgress();
        animateSkillPercent();
    }, 300);
    
    setTimeout(() => {
        animateToolProgress();
        animateToolPercent();
    }, 600);
}

// ========== 5. INTERSECTION OBSERVER (SCROLL TRIGGER) ==========
const skillsSection = document.querySelector('.skills');
let animationTriggered = false;

if (skillsSection) {
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animationTriggered) {
                setTimeout(() => {
                    animateAllSkills();
                }, 200);
                animationTriggered = true;
                skillsObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    skillsObserver.observe(skillsSection);
}

// ========== 6. TOOLS GRID - DRAG TO SCROLL ==========
const toolsGrid = document.querySelector('.tools-grid');

if (toolsGrid) {
    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;

    // Mouse Events
    toolsGrid.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX - toolsGrid.offsetLeft;
        scrollLeft = toolsGrid.scrollLeft;
        toolsGrid.style.cursor = 'grabbing';
    });

    toolsGrid.addEventListener('mouseleave', () => {
        isDragging = false;
        toolsGrid.style.cursor = 'grab';
    });

    toolsGrid.addEventListener('mouseup', () => {
        isDragging = false;
        toolsGrid.style.cursor = 'grab';
    });

    toolsGrid.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - toolsGrid.offsetLeft;
        const walk = (x - startX) * 1.5;
        toolsGrid.scrollLeft = scrollLeft - walk;
    });

    // Touch Events untuk mobile
    toolsGrid.addEventListener('touchstart', (e) => {
        isDragging = true;
        startX = e.touches[0].pageX - toolsGrid.offsetLeft;
        scrollLeft = toolsGrid.scrollLeft;
    });

    toolsGrid.addEventListener('touchend', () => {
        isDragging = false;
    });

    toolsGrid.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const x = e.touches[0].pageX - toolsGrid.offsetLeft;
        const walk = (x - startX) * 1.5;
        toolsGrid.scrollLeft = scrollLeft - walk;
    });
}

// ========== 7. OPTIONAL: TOMBOL NAVIGASI KIRI/KANAN ==========
function addNavButtons() {
    const toolsSection = document.querySelector('.tools-section');
    if (!toolsSection || document.querySelector('.tools-nav')) return;
    
    const navDiv = document.createElement('div');
    navDiv.classList.add('tools-nav');
    navDiv.innerHTML = `
        <button class="nav-scroll-btn" id="scrollLeftBtn"><i class="fas fa-chevron-left"></i></button>
        <button class="nav-scroll-btn" id="scrollRightBtn"><i class="fas fa-chevron-right"></i></button>
    `;
    toolsSection.appendChild(navDiv);
    
    const leftBtn = document.getElementById('scrollLeftBtn');
    const rightBtn = document.getElementById('scrollRightBtn');
    
    if (leftBtn && toolsGrid) {
        leftBtn.addEventListener('click', () => {
            toolsGrid.scrollBy({ left: -250, behavior: 'smooth' });
        });
    }
    
    if (rightBtn && toolsGrid) {
        rightBtn.addEventListener('click', () => {
            toolsGrid.scrollBy({ left: 250, behavior: 'smooth' });
        });
    }
}

// Aktifkan tombol navigasi (opsional - panggil jika mau)
// addNavButtons();

// ========== 8. INITIAL UPDATE SAAT LOAD ==========
document.addEventListener('DOMContentLoaded', () => {
    updateOverallMastery();
});