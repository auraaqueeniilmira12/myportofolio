// ========== PROJECTS SECTION ==========

// DOM Elements
const projectModal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalTech = document.getElementById('modalTech');
const modalImage = document.getElementById('modalImage');
const modalLink = document.getElementById('modalLink');
const closeProjectModal = document.getElementById('closeProjectModal');
const prevSlide = document.getElementById('prevSlide');
const nextSlide = document.getElementById('nextSlide');

let currentImages = [];
let currentImageIndex = 0;

// ========== 1. Buka Modal dengan Data dari Tombol ==========
document.querySelectorAll('.project-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Ambil data dari atribut tombol
        const title = btn.getAttribute('data-title');
        const desc = btn.getAttribute('data-desc');
        const tech = btn.getAttribute('data-tech');
        const link = btn.getAttribute('data-link');
        const images = btn.getAttribute('data-images');
        
        // Set ke modal
        modalTitle.textContent = title;
        modalDesc.textContent = desc;
        modalLink.href = link;
        
        // Parse tech (format: "HTML,CSS,JS")
        if (tech) {
            const techArray = tech.split(',');
            modalTech.innerHTML = techArray.map(t => `<span>${t.trim()}</span>`).join('');
        }
        
        // Parse images (format: "img1.jpg,img2.jpg,img3.jpg")
        if (images) {
            currentImages = images.split(',');
            currentImageIndex = 0;
            modalImage.src = currentImages[0];
        }
        
        // Style link jika disabled
        if (link === '#') {
            modalLink.style.opacity = '0.5';
            modalLink.style.pointerEvents = 'none';
        } else {
            modalLink.style.opacity = '1';
            modalLink.style.pointerEvents = 'auto';
        }
        
        // Tampilkan modal
        projectModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// ========== 2. Tutup Modal ==========
if (closeProjectModal) {
    closeProjectModal.addEventListener('click', () => {
        projectModal.classList.remove('active');
        document.body.style.overflow = '';
    });
}

if (projectModal) {
    projectModal.addEventListener('click', (e) => {
        if (e.target === projectModal) {
            projectModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ========== 3. Slider Gambar ==========
function changeSlide(direction) {
    if (currentImages.length === 0) return;
    currentImageIndex += direction;
    if (currentImageIndex < 0) currentImageIndex = currentImages.length - 1;
    if (currentImageIndex >= currentImages.length) currentImageIndex = 0;
    modalImage.src = currentImages[currentImageIndex];
}

if (prevSlide && nextSlide) {
    prevSlide.addEventListener('click', () => changeSlide(-1));
    nextSlide.addEventListener('click', () => changeSlide(1));
}

// ========== 4. Filter Projects ==========
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                const cat = card.getAttribute('data-category');
                if (filter === 'all' || cat.includes(filter)) {
                    card.classList.remove('hide');
                } else {
                    card.classList.add('hide');
                }
            });
        });
    });
}