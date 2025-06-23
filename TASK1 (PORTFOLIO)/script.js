// Attach Links
function gotoLinkedin() {
    window.open('https://linkedin.com/in/ayush-negi-56831b336', '_blank');
}

function gotoGithub() {
    window.open('https://github.com/AyushNegi2809', '_blank');
}

function gotoLeetcode() {
    window.open('https://leetcode.com/u/Hgs2x0I5RY/', '_blank');
}

function gotoGFG() {
    window.open('https://bit.ly/3SBHJtF', '_blank');
}

function gotoEmail() {
    window.location.href = 'mailto:ayushnegi912@gmail.com';
}

// Correct implementation: Hide the arrow when the sidebar is fully scrolled

document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.querySelector('.sidebar');
    const sidebarArrow = document.querySelector('.sidebar-arrow');

    if (sidebar && sidebarArrow) {
        sidebar.addEventListener('scroll', function () {
            const isFullyScrolled = sidebar.scrollTop + sidebar.clientHeight >= sidebar.scrollHeight;

            if (isFullyScrolled) {
                sidebarArrow.style.transition = 'opacity 0.6s ease';
                sidebarArrow.style.opacity = '0';
            } else {
                sidebarArrow.style.transition = 'opacity 0.6s ease';
                sidebarArrow.style.opacity = '1';
            }
        });
    }
});

const card = document.getElementById('certificateHover');

card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the card
    const y = e.clientY - rect.top;  // y position within the card

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10; // max 10deg tilt
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
});

card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
});


//~ GSAP Animations Start 

const sidebarTL = gsap.timeline(); //? Sidebar Timeline

sidebarTL.from(".sidebar", {
    x: -350,
    duration: 1.5,
    ease: "power2.inOut",
});

sidebarTL.from(".profile-pic", {
    y: -50,
    opacity: 0,
    duration: 0.9,
    ease: "power4.inOut",
}, "-=0.7");

sidebarTL.from("#name span", {
    y: -20,
    scale: 0,
    duration: 0.2,
    ease: "power4.inOut",
    stagger: 0.1,
}, "-=0.2");

sidebarTL.from(".role", {
    x: -30,
    opacity: 0,
    duration: 0.9,
    ease: "bounce.out",
}, "-=0.1");

// Updated scrollTrigger animation to use the sidebar's scroll context

gsap.from(".sidebar-nav a", {
    x: -150,
    opacity: 0,
    scale: 0.5,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".sidebar-nav",
        start: "top 75%", // Ensure the animation starts when the element is fully visible
        end: "+=350", // Adjusted end point for smoother animation
        scrub: true,
        scroller: ".sidebar", // Use the sidebar's scroll context
    }
});

//? Main Content Animation

gsap.from(".about", {
    duration: 1.4,
    opacity: 0,
    x: "150%",
});

gsap.from(".experience", {
    opacity: 0,
    x: "150%",
    scrollTrigger: {
        trigger: ".experience",
        start: "top 75%",
        end: "+=400",
        scrub: 1,
        markers: false
    }
});

gsap.from(".achievements", {
    opacity: 0,
    x: "150%",
    scrollTrigger: {
        trigger: ".achievements",
        start: "top 75%",
        end: "+=400", // 400px scroll distance for the animation
        scrub: 1,
        markers: false
    }
});

gsap.from(".tools-section", {
    opacity: 0,
    x: "150%",
    scrollTrigger: {
        trigger: ".tools-section",
        start: "top 75%",
        end: "+=400", // 400px scroll distance for the animation
        scrub: 1,
        markers: false
    }
});

gsap.from(".education", {
    opacity: 0,
    x: "150%",
    scrollTrigger: {
        trigger: ".education",
        start: "top 75%",
        end: "+=400", // 400px scroll distance for the animation
        scrub: 1,
        markers: false
    }
});

gsap.from(".resume-section", {
    opacity: 0,
    x: "150%",
    scrollTrigger: {
        trigger: ".resume-section",
        start: "top 75%",
        end: "+=400", // 400px scroll distance for the animation
        scrub: 1,
        markers: false
    }
});

gsap.from(".contact-section", {
    opacity: 0,
    x: "150%",
    scrollTrigger: {
        trigger: ".contact-section",
        start: "top 75%",
        end: "+=400", // 400px scroll distance for the animation
        scrub: 1,
        markers: false
    }
});

// No changes needed for moving socials