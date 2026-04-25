// ========== ACHIEVEMENTS / CERTIFICATES ==========
function openAllCerts() {
    const overlay = document.getElementById('certModalOverlay');
    if (!overlay) return;
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    generateCertDots();
}

function closeCertModal() {
    const overlay = document.getElementById('certModalOverlay');
    if (!overlay) return;
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

function openCertModal(index) {
    openAllCerts();
    const track = document.getElementById('certScrollTrack');
    if (!track) return;
    const slides = track.querySelectorAll('.cert-slide');
    if (slides[index]) {
        setTimeout(() => {
            const slideWidth = slides[index].offsetWidth;
            track.scrollTo({
                left: index * slideWidth,
                behavior: 'smooth'
            });
        }, 150);
    }
}

function scrollCerts(dir) {
    const track = document.getElementById('certScrollTrack');
    if (!track) return;
    const slideWidth = track.querySelector('.cert-slide')?.offsetWidth || track.offsetWidth;
    track.scrollBy({
        left: dir === 'right' ? slideWidth : -slideWidth,
        behavior: 'smooth'
    });
}

function generateCertDots() {
    const track = document.getElementById('certScrollTrack');
    const dotsContainer = document.getElementById('certDots');
    if (!track || !dotsContainer) return;

    const slides = track.querySelectorAll('.cert-slide');
    dotsContainer.innerHTML = '';

    slides.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.classList.add('cert-dot');
        if (i === 0) dot.classList.add('active');

        dot.addEventListener('click', () => {
            const slideWidth = track.querySelector('.cert-slide')?.offsetWidth || track.offsetWidth;
            track.scrollTo({
                left: i * slideWidth,
                behavior: 'smooth'
            });
        });

        dotsContainer.appendChild(dot);
    });

    // Update dot aktif saat scroll
    let scrollTimer;
    track.addEventListener('scroll', () => {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
            const slideWidth = track.querySelector('.cert-slide')?.offsetWidth || 1;
            const currentIndex = Math.round(track.scrollLeft / slideWidth);
            dotsContainer.querySelectorAll('.cert-dot').forEach((dot, i) => {
                dot.classList.toggle('active', i === currentIndex);
            });
        }, 50);
    });
}

// Keyboard navigation di dalam modal
document.addEventListener('keydown', (e) => {
    const overlay = document.getElementById('certModalOverlay');
    if (!overlay || !overlay.classList.contains('active')) return;

    if (e.key === 'Escape')      closeCertModal();
    if (e.key === 'ArrowRight')  scrollCerts('right');
    if (e.key === 'ArrowLeft')   scrollCerts('left');
});

// Touch/swipe support untuk mobile
(function initCertSwipe() {
    const track = document.getElementById('certScrollTrack');
    if (!track) return;

    let startX = 0;
    let isDragging = false;

    track.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
    }, { passive: true });

    track.addEventListener('touchend', (e) => {
        if (!isDragging) return;
        const diff = startX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) {
            scrollCerts(diff > 0 ? 'right' : 'left');
        }
        isDragging = false;
    }, { passive: true });
})();