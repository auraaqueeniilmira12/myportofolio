// ========== DATA SERTIFIKAT (31 SERTIFIKAT) ==========
// Urutan 5 pertama = sesuai card preview
const certificatesData = [
    // ===== CARD 1: Basic Web Programming =====
    {
        img: "images/Sertifikat Belajar Dasar Pemograman Web.png",
        date: "January 2026",
        title: "Basic Web Programming",
        desc: "Learned HTML, CSS, and basic JavaScript to build structured and styled web pages with simple interactions.",
        issuer: "Dicoding Indonesia",
        link: "https://drive.google.com/file/d/1FNj7Jt0iX0GDANafFjotplkghq9k78i2/view?usp=sharing"
    },

    // ===== CARD 2: Front-End Development =====
    {
        img: "images/Sertifikat Belajar Front End Web Pemula.png",
        date: "February 2026",
        title: "Front-End Development",
        desc: "Learned responsive website layouts using HTML, CSS, Flexbox, Grid, and basic JavaScript.",
        issuer: "Dicoding Indonesia",
        link: "https://drive.google.com/file/d/1DZc0sExvqKP3OJI_5YINDzB4TUE2ehbV/view?usp=drive_link"
    },

    // ===== CARD 3: FSBN Participant - Indonesian Language =====
    {
        img: "images/Sertifikat Peserta FSBN B.indo 2025.jpg",
        date: "July 2025",
        title: "FSBN Participant - Indonesian Language",
        desc: "Participated in FSBN (Festival Sains dan Bahasa Nasional) for Indonesian Language subject.",
        issuer: "PUSPRESNAS",
        link: "https://drive.google.com/file/d/18xxXgJo-XjwyFK1inBEZVDXA__553ZRG/view?usp=drive_link"
    },

    // ===== CARD 4: Tasmi Completion - Juz 29 & 30 =====
    {
        img: "images/Sertifikat Lulus Tasmi Juz 30,29 dan surat pilihan 2024.jpeg",
        date: "September 2024",
        title: "Tasmi Completion - Juz 29 & 30",
        desc: "Completed Tasmi examination for Juz 29 and Juz 30 of the Quran with proper recitation.",
        issuer: "Saung Daruttahfiz",
        link: "https://drive.google.com/file/d/1mwlxmFKzHoAW-eX4cVFYiE4de9ZIynGj/view?usp=sharing"
    },

    // ===== CARD 5: Leadership Basic Training Participant =====
    {
        img: "images/Peserta LDKS 2023.jpeg",
        date: "January 2023",
        title: "Leadership Basic Training Participant",
        desc: "Participated in Basic Leadership Training (LDKS) organized by OSIS MTS Darul Ihya to develop leadership and teamwork skills.",
        issuer: "OSIS MTS Darul Ihya",
        link: "https://drive.google.com/file/d/1EXgJt2Qyd4imYG_964fJWbrtUF0VKGuv/view?usp=sharing"
    },

    // ===== SISANYA: DICODING INDONESIA (LANJUTAN) =====
    {
        img: "images/Sertifikat Belajar Dasar Cloud dan GEN AI di AWS.png",
        date: "January 2026",
        title: "AWS Cloud & Generative AI Basic Learning",
        desc: "Learned cloud computing fundamentals and Generative AI basics, including AWS core services and AI model capabilities.",
        issuer: "Dicoding Indonesia",
        link: "https://drive.google.com/file/d/1_bG_05Uez9lAcohl_A2UPIoGOPrGXJ2S/view?usp=drive_link"
    },
    {
        img: "images/Sertifikat Belajar Back-End Pemula dengan JavaScript.png",
        date: "February 2026",
        title: "Beginner Back End JavaScript",
        desc: "Learned back end basics with JavaScript including Node.js, HTTP requests, and database integration for server side applications.",
        issuer: "Dicoding Indonesia",
        link: "https://drive.google.com/file/d/1ZO_d98UbfVdaHiO5KnvZC-52my_UctJe/view?usp=drive_link"
    },
    {
        img: "images/Sertifikat Belajar Dasar AI.png",
        date: "January 2026",
        title: "AI Basic Learning",
        desc: "Learned AI fundamentals including machine learning basics, neural networks, and how AI processes data to make predictions.",
        issuer: "Dicoding Indonesia",
        link: "https://drive.google.com/file/d/1JrJxMYcIq5oDe5xhwOIUpfVZCbblNgYI/view?usp=drive_link"
    },
    {
        img: "images/Sertifikat Belajar Dasar Pemograman JavaScript.png",
        date: "January 2026",
        title: "Basic JavaScript Programming",
        desc: "Learned JavaScript fundamentals including variables, functions, loops, conditionals, and basic DOM manipulation.",
        issuer: "Dicoding Indonesia",
        link: "https://drive.google.com/file/d/12Fr-SqbVZR4rPfb130LYRgFZxQSUbCH_/view?usp=drive_link"
    },
    {
        img: "images/Sertifikat Belajar Membuat Aplikasi dengan React.png",
        date: "February 2026",
        title: "React Web Application Development",
        desc: "Learned to build web apps with React including components, state, hooks, and basic routing.",
        issuer: "Dicoding Indonesia",
        link: "https://drive.google.com/file/d/1Bsg5IhPCnavp4ymB7oJQlFqpGBD8uV0I/view?usp=drive_link"
    },
    {
        img: "images/Sertifikat Financial Literacy 101.png",
        date: "June 2025",
        title: "Financial Literacy 101",
        desc: "Learned budgeting, saving, managing expenses, financial goals, and basic investment concepts.",
        issuer: "Dicoding Indonesia",
        link: "https://drive.google.com/file/d/1trF0rlJ2cGCTWws58MaSYpr9o4TAPZV-/view?usp=drive_link"
    },
    {
        img: "images/Sertifikat Introdcution to Financial Literacy.png",
        date: "December 2025",
        title: "Introduction to Financial Literacy",
        desc: "Learned basic financial literacy including budgeting, saving, needs vs wants, and financial goal planning.",
        issuer: "Dicoding Indonesia",
        link: "https://drive.google.com/file/d/10I7tiuG0KGJq0j64wuKTC5ERHktSl9cO/view?usp=drive_link"
    },
    {
        img: "images/Sertifikat Memulai dasar pemograman untuk menjadi pengembang web.png",
        date: "January 2026",
        title: "Software Development Beginner",
        desc: "Learned programming fundamentals including algorithms, variables, control structures, functions, and problem solving.",
        issuer: "Dicoding Indonesia",
        link: "https://drive.google.com/file/d/1ss4ZE8GQ3H7z3nEbnoeiGoma4iWFpJRk/view?usp=drive_link"
    },
    {
        img: "images/Sertifikat memulai pemograman dengan Java.png",
        date: "April 2025",
        title: "Basic Java Programming",
        desc: "Learned Java fundamentals including variables, loops, conditionals, functions, and OOP basics.",
        issuer: "Dicoding Indonesia",
        link: "https://drive.google.com/file/d/1OWzziCthLDmWCiLAVTSNiSpiG_4U2iys/view?usp=drive_link"
    },
    {
        img: "images/Sertifikat pengenalan ke logika pemograman.png",
        date: "January 2026",
        title: "Introduction to Programming Logic",
        desc: "Learned programming logic including algorithms, flowcharts, conditional logic, loops, and reasoning.",
        issuer: "Dicoding Indonesia",
        link: "https://drive.google.com/file/d/1PGTjVZN5FKX7QFWEdPSD5evJaRJHPLt9/view?usp=drive_link"
    },

    // ===== PUSPRESNAS (SISA) =====
    {
        img: "images/Peserta FSBN PAI 2025.jpg",
        date: "July 2025",
        title: "FSBN Participant - Islamic Education",
        desc: "Participated in FSBN for Islamic Education (PAI) subject.",
        issuer: "PUSPRESNAS",
        link: "https://drive.google.com/file/d/1ZOGPqO1w_aKIlXPtcxsI3ssJ0KosmCqg/view?usp=drive_link"
    },
    {
        img: "images/Peserta OSSN B.indo 2025.jpg",
        date: "July 2025",
        title: "OSSN Participant - Indonesian Language",
        desc: "Participated in OSSN (Olimpiade Sains dan Statistika Nasional) for Indonesian Language.",
        issuer: "PUSPRESNAS",
        link: "https://drive.google.com/file/d/1Lrh1apLD-aEf5QQq5U-aTHqO99cyyxhA/view?usp=sharing"
    },
    {
        img: "images/Peserta OSSN B.inggris 2025.jpg",
        date: "July 2025",
        title: "OSSN Participant - English",
        desc: "Participated in OSSN for English subject.",
        issuer: "PUSPRESNAS",
        link: "https://drive.google.com/file/d/1mA0S352evYJbDwpndpkNTRkJ9EK2_wmo/view?usp=drive_link"
    },
    {
        img: "images/Peserta OSSN PAI 2025.jpg",
        date: "July 2025",
        title: "OSSN Participant - Islamic Education",
        desc: "Participated in OSSN for Islamic Education (PAI) subject.",
        issuer: "PUSPRESNAS",
        link: "https://drive.google.com/file/d/12R92CBwMEnqjUf4oqAIg4qkX9UT16D6h/view?usp=drive_link"
    },

    // ===== FOSNAS =====
    {
        img: "images/Sertifikat IASC peserta Sejarah 2025.jpg",
        date: "July 2025",
        title: "IASC Participant - History 2025",
        desc: "Participated in Indonesian Advanced Science Competition (IASC) for History subject.",
        issuer: "FOSNAS",
        link: "https://drive.google.com/file/d/1SDy89yCcQAZINev5BLaD_8uNWVvwGzvu/view?usp=drive_link"
    },
    {
        img: "images/Sertifikat IASC peserta 2025.jpg",
        date: "July 2025",
        title: "IASC Participant 2025",
        desc: "Participated in Indonesian Advanced Science Competition (IASC).",
        issuer: "FOSNAS",
        link: "https://drive.google.com/file/d/1csbfra_-WqQr6gapsdelnQkUUPcAHLOx/view?usp=drive_link"
    },

    // ===== PRESMANIA =====
    {
        img: "images/Peserta ISSC B.Inggris 2025.jpg",
        date: "July 2025",
        title: "ISSC Participant - English 2025",
        desc: "Participated in Indonesian Science Student Competition (ISSC) for English subject.",
        issuer: "PRESMANIA",
        link: "https://drive.google.com/file/d/1kLgSQ_m7qA7nJVCQzrVb_yrf9FFNMkVP/view?usp=drive_link"
    },
    {
        img: "images/Peserta ISSC sejarah 2025.jpg",
        date: "July 2025",
        title: "ISSC Participant - History 2025",
        desc: "Participated in Indonesian Science Student Competition (ISSC) for History subject.",
        issuer: "PRESMANIA",
        link: "https://drive.google.com/file/d/1vQRBBpvbRqkb8ZfIbWXa2tR0R7bK4PWZ/view?usp=drive_link"
    },

    // ===== SAUNG DARUTTAHFIZ (SISA) =====
    {
        img: "images/Sertifikat Lulus Tasmi Juz 30 2022.jpeg",
        date: "June 2022",
        title: "Tasmi Completion - Juz 30",
        desc: "Completed Tasmi examination for Juz 30 of the Quran.",
        issuer: "Saung Daruttahfiz",
        link: "https://drive.google.com/file/d/1-Ux1FS5WI5TYLZAlkmMjOfxAGD-xnWTc/view?usp=drive_link"
    },

    // ===== MTS DARUL IHYA / OSIS / SMKN (SISA) =====
    {
        img: "images/Juara 3 Lomba Tahfiz DI 2023 .jpeg",
        date: "2023",
        title: "3rd Winner - Tahfiz Competition 2023",
        desc: "Won 3rd place in Quran memorization competition during Maulid event.",
        issuer: "MTS Darul Ihya",
        link: "https://drive.google.com/file/d/15rorpkze1rsZaK3ziv0vOeyPJaxTo6hH/view?usp=drive_link"
    },
    {
        img: "images/Juara Lomba Tahfiz 2018.jpeg",
        date: "2018",
        title: "Tahfiz Competition Winner 2018",
        desc: "Won Quran memorization competition during Maulid event.",
        issuer: "MMI",
        link: "https://drive.google.com/file/d/1iZu-PfZCpudnepSiI3Dpg5RAoPWQ14Fo/view?usp=drive_link"
    },
    {
        img: "images/Panitia LDKS 2024.jpeg",
        date: "2024",
        title: "Committee Member - LDKS 2024",
        desc: "Served as committee member for LDKS event, helping plan and execute leadership training.",
        issuer: "OSIS MTS Darul Ihya",
        link: "https://drive.google.com/file/d/1BO6wD-EEIg0DWZwXbN4Mi_bzGWVB-bQ1/view?usp=drive_link"
    },
    {
        img: "images/Peserta Cinematography 2023.jpeg",
        date: "2023",
        title: "Cinematography Participant 2023",
        desc: "Participated in cinematography competition, exploring video production and storytelling.",
        issuer: "MTS Darul Ihya",
        link: "https://drive.google.com/file/d/1WRd07m1bPE7FU3fk0mu70sYcpXgCysS5/view?usp=drive_link"
    },
    {
        img: "images/Peserta Mansion 2024.jpeg",
        date: "October 2024",
        title: "MANSION 2024 Participant",
        desc: "Participated in MANSION, an annual creative and innovation event.",
        issuer: "SMKN 1 Ciomas",
        link: "https://drive.google.com/file/d/1gGYVgkC9jLKKjXQnrEH64I669N8QFkmb/view?usp=drive_link"
    },
    {
        img: "images/Sertifikat Peserta Program pengimbasan master trainer.jpg",
        date: "October 2024",
        title: "Master Trainer Imbasan Program Participant",
        desc: "Participated in master trainer training program focused on developing training and mentoring skills.",
        issuer: "SMKN 1 Ciomas",
        link: "https://drive.google.com/file/d/1mqdosmiGqlablp426DTRm8IR90nxA2cQ/view?usp=drive_link"
    },
];

// ========== RENDER CERTIFICATES ==========
function renderCertificates() {
    const track = document.getElementById('certScrollTrack');
    if (!track) return;
    
    track.innerHTML = '';
    
    certificatesData.forEach((cert, index) => {
        const slide = document.createElement('div');
        slide.className = 'cert-slide';
        slide.setAttribute('data-index', index);
        slide.innerHTML = `
            <div class="cert-slide-img">
                <img src="${cert.img}" alt="${cert.title}">
            </div>
            <div class="cert-slide-info">
                <span class="cert-slide-date"><i class="fas fa-calendar-alt"></i> ${cert.date}</span>
                <h3>${cert.title}</h3>
                <p class="cert-slide-category"><i class="fas fa-tag"></i> ${cert.category}</p>
                <p class="cert-slide-desc">${cert.desc}</p>
                <p class="cert-slide-issuer"><i class="fas fa-building"></i> ${cert.issuer}</p>
                <a href="${cert.link}" class="cert-drive-btn" target="_blank"><i class="fab fa-google-drive"></i> Open Certificate</a>
            </div>
        `;
        track.appendChild(slide);
    });
}

// ========== CERTIFICATES MODAL FUNCTIONS ==========
function openAllCerts() {
    const overlay = document.getElementById('certModalOverlay');
    if (!overlay) return;
    renderCertificates();
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(generateCertDots, 100);
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
            slides[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }, 150);
    }
}

function scrollCerts(direction) {
    const track = document.getElementById('certScrollTrack');
    if (!track) return;
    const slideWidth = track.querySelector('.cert-slide')?.offsetWidth || 350;
    track.scrollBy({
        left: direction === 'right' ? slideWidth : -slideWidth,
        behavior: 'smooth'
    });
}

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
    const scrollHandler = () => {
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
    };
    
    track.removeEventListener('scroll', scrollHandler);
    track.addEventListener('scroll', scrollHandler);
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    const overlay = document.getElementById('certModalOverlay');
    if (!overlay || !overlay.classList.contains('active')) return;

    if (e.key === 'Escape') closeCertModal();
    if (e.key === 'ArrowRight') scrollCerts('right');
    if (e.key === 'ArrowLeft') scrollCerts('left');
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

// Inisialisasi render saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    renderCertificates();
});

// Ekspos fungsi ke global
window.openAllCerts = openAllCerts;
window.closeCertModal = closeCertModal;
window.openCertModal = openCertModal;
window.scrollCerts = scrollCerts;