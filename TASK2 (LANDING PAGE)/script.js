//? Sticky Cursor
const circleElement = document.querySelector('.circle');

const mouse = {x: 0, y: 0};
const circle = {x: 0, y: 0};

window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
});

const speed = 0.17;
const tick = () => {
    circle.x += (mouse.x - circle.x) * speed;
    circle.y += (mouse.y - circle.y) * speed;

    circleElement.style.transform = `translate(${circle.x}px, ${circle.y}px)`;

    window.requestAnimationFrame(tick);
}
    
tick();


// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', function() {
    initAnimations();
});

function initAnimations() {
    // Header animation on scroll
    gsap.to("header", {
        backgroundColor: "rgba(10, 10, 10, 0.95)",
        backdropFilter: "blur(12px)",
        scrollTrigger: {
            trigger: "body",
            start: "top -80px",
            end: "bottom bottom",
            toggleActions: "play none none reverse"
        }
    });

    // Hero section animations
    const tl = gsap.timeline();
    
    // Hero content entrance
    tl.from(".hero h1", {
        duration: 1.2,
        y: 100,
        opacity: 0,
        ease: "power3.out"
    })
    .from(".hero p", {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power2.out"
    }, "-=0.5")
    .from(".hero-buttons", {
        duration: 0.8,
        y: 30,
        opacity: 0,
        ease: "back.out(1.7)"
    }, "-=0.3");

    // Floating elements animation
    gsap.to(".floating-element:nth-child(1)", {
        y: -30,
        x: 20,
        rotation: 10,
        duration: 4,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true
    });

    gsap.to(".floating-element:nth-child(2)", {
        y: 40,
        x: -15,
        rotation: -15,
        duration: 5,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        delay: 1
    });

    gsap.to(".floating-element:nth-child(3)", {
        y: -20,
        x: 25,
        rotation: 20,
        duration: 3.5,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        delay: 2
    });

    // Services section animation
    gsap.from(".services .section-title", {
        scrollTrigger: {
            trigger: ".services",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        },
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power2.out"
    });

    gsap.from(".service-card", {
        scrollTrigger: {
            trigger: ".services-grid",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        },
        duration: 0.8,
        y: 80,
        opacity: 0,
        stagger: 0.2,
        ease: "back.out(1.7)"
    });

    // Ensure service cards are visible by default
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    });

    // Stats section animation with counter
    gsap.from(".stats .section-title", {
        scrollTrigger: {
            trigger: ".stats",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        },
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power2.out"
    });

    // Remove increasing counter and set default values for stats numbers
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const target = stat.dataset.target;
        stat.textContent = target.includes('%') || target.includes('$') ? target : target + '+';
    });

    // Footer sections animation
    gsap.from(".footer-section", {
        scrollTrigger: {
            trigger: "footer",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        },
        duration: 0.8,
        y: 50,
        opacity: 0,
        stagger: 0.15,
        ease: "power2.out"
    });

    // Button hover animations
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            gsap.to(button, {
                duration: 0.3,
                scale: 1.05,
                y: -3,
                ease: "power2.out"
            });
        });

        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                duration: 0.3,
                scale: 1,
                y: 0,
                ease: "power2.out"
            });
        });
    });

    // Service card hover animations
    const serviceCardsHover = document.querySelectorAll('.service-card');
    serviceCardsHover.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                duration: 0.4,
                y: -15,
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(255, 215, 0, 0.3)",
                ease: "power2.out"
            });
            
            gsap.to(card.querySelector('.service-icon'), {
                duration: 0.3,
                scale: 1.2,
                rotation: 10,
                ease: "back.out(1.7)"
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                duration: 0.4,
                y: 0,
                scale: 1,
                boxShadow: "0 20px 40px rgba(255, 215, 0, 0.2)",
                ease: "power2.out"
            });
            
            gsap.to(card.querySelector('.service-icon'), {
                duration: 0.3,
                scale: 1,
                rotation: 0,
                ease: "power2.out"
            });
        });
    });

    // Social links hover animation
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            gsap.to(link, {
                duration: 0.3,
                scale: 1.2,
                y: -5,
                rotation: 10,
                ease: "back.out(1.7)"
            });
        });

        link.addEventListener('mouseleave', () => {
            gsap.to(link, {
                duration: 0.3,
                scale: 1,
                y: 0,
                rotation: 0,
                ease: "power2.out"
            });
        });
    });

    // Nav links hover animation
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            gsap.to(link, {
                duration: 0.3,
                y: -2,
                color: "#ffd700",
                ease: "power2.out"
            });
        });

        link.addEventListener('mouseleave', () => {
            gsap.to(link, {
                duration: 0.3,
                y: 0,
                color: "#ffffff",
                ease: "power2.out"
            });
        });
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            gsap.to(window, {
                duration: 1.5,
                scrollTo: target,
                ease: "power3.inOut"
            });
        }
    });
});

// Newsletter form handling with animation
document.querySelector('.newsletter-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = this.querySelector('.newsletter-input').value;
    if (email) {
        // Success animation
        gsap.to(this, {
            duration: 0.3,
            scale: 0.95,
            ease: "back.out(1.7)",
            onComplete: () => {
                alert('Thank you for subscribing! We\'ll keep you updated with our latest insights.');
                this.querySelector('.newsletter-input').value = '';
                gsap.to(this, {
                    duration: 0.3,
                    scale: 1,
                    ease: "back.out(1.7)"
                });
            }
        });
    }
});

// Add loading animation
window.addEventListener('load', () => {
    // Hide loading if you have a loader
    const loader = document.querySelector('.loader');
    if (loader) {
        gsap.to(loader, {
            duration: 0.5,
            opacity: 0,
            ease: "power2.out",
            onComplete: () => loader.remove()
        });
    }
    
    // Start main animations
    gsap.from("body", {
        duration: 0.5,
        opacity: 0,
        ease: "power2.out"
    });
});

// Parallax effect for hero background
gsap.to(".hero", {
    backgroundPosition: "50% 100px",
    ease: "none",
    scrollTrigger: {
        trigger: ".hero",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }
});

// Text reveal animation for highlight elements
gsap.from(".highlight", {
    duration: 1.5,
    backgroundPosition: "-100% 0",
    ease: "power2.inOut",
    delay: 0.5
});

// Add ripple effect function
function createRipple(e) {
    const button = e.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
        transform: scale(0);
    `;

    button.appendChild(ripple);

    gsap.to(ripple, {
        duration: 0.6,
        scale: 4,
        opacity: 0,
        ease: "power2.out",
        onComplete: () => ripple.remove()
    });
}

// Add ripple effect to all buttons
document.querySelectorAll('button').forEach(btn => {
    btn.style.position = 'relative';
    btn.style.overflow = 'hidden';
    btn.addEventListener('click', createRipple);
});