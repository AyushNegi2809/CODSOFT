// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Animate stats on scroll
const statsObserverOptions = {
    threshold: 0.7,
    rootMargin: '0px 0px -50px 0px'
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const finalValue = stat.textContent;
                const isPercentage = finalValue.includes('%');
                const isDollar = finalValue.includes('$');
                const isPlus = finalValue.includes('+');

                let numericValue = parseInt(finalValue.replace(/[^0-9]/g, ''));
                let currentValue = 0;

                const increment = numericValue / 50;
                const timer = setInterval(() => {
                    currentValue += increment;
                    if (currentValue >= numericValue) {
                        currentValue = numericValue;
                        clearInterval(timer);
                    }

                    let displayValue = Math.floor(currentValue).toString();
                    if (isDollar) displayValue = '$' + displayValue + 'M';
                    if (isPercentage) displayValue = displayValue + '%';
                    if (isPlus && !isDollar) displayValue = displayValue + '+';

                    stat.textContent = displayValue;
                }, 30);
            });
        }
    });
}, statsObserverOptions);

const statsSection = document.querySelector('.stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Add interactive hover effects
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Button click animations
document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.3);
                    transform: scale(0);
                    animation: ripple 0.6s linear;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                `;

        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});

// Newsletter form handling
document.querySelector('.newsletter-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = this.querySelector('.newsletter-input').value;
    if (email) {
        alert('Thank you for subscribing! We\'ll keep you updated with our latest insights.');
        this.querySelector('.newsletter-input').value = '';
    }
});

// Add ripple animation CSS
const style = document.createElement('style');
style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
            button, .nav-btn {
                position: relative;
                overflow: hidden;
            }
        `;
document.head.appendChild(style);


// Why Choose Us Animation on Scroll

const whyChooseObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.why-card');
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('animate');
                }, index * 150);
            });
        }
    });
}, observerOptions);

const whyChooseSection = document.querySelector('.why-choose-us');
if (whyChooseSection) {
    whyChooseObserver.observe(whyChooseSection);
}

// Testimonials Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-card');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

function showSlide(index) {
    // Remove active class from all slides and dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Add active class to current slide and dot
    slides[index].classList.add('active');
    dots[index].classList.add('active');

    // Move slider
    const slider = document.getElementById('testimonials-slider');
    const slideWidth = slides[0].offsetWidth + 32; // width + gap
    slider.style.transform = `translateX(-${index * slideWidth}px)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Event listeners
document.getElementById('next-btn').addEventListener('click', nextSlide);
document.getElementById('prev-btn').addEventListener('click', prevSlide);

// Dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);

// Enhanced hover effects for why-choose-us cards
document.querySelectorAll('.why-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-15px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Testimonial card hover effects
document.querySelectorAll('.testimonial-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        if (this.classList.contains('active')) {
            this.style.transform = 'scale(1.05)';
        }
    });

    card.addEventListener('mouseleave', function () {
        if (this.classList.contains('active')) {
            this.style.transform = 'scale(1)';
        }
    });
});

// Button ripple effects
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.3);
                    transform: scale(0);
                    animation: ripple 0.6s linear;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    pointer-events: none;
                `;

        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});