document.addEventListener('DOMContentLoaded', function () {
    // Instantly hide sidebar and main content for animation
    const sidebar = document.querySelector('.sidebar');
    const mainPanel = document.querySelector('.main-panel');
    if (sidebar) {
        sidebar.style.opacity = 0;
        sidebar.style.transform = 'translateX(-60px)';
    }
    if (mainPanel) {
        mainPanel.style.opacity = 0;
        mainPanel.style.transform = 'translateY(60px)';
    }

    setTimeout(() => {
        if (sidebar) {
            sidebar.style.transition = 'opacity 1.2s, transform 1.2s';
            sidebar.style.opacity = 1;
            sidebar.style.transform = 'translateX(0)';
        }
        if (mainPanel) {
            mainPanel.style.transition = 'opacity 1.2s, transform 1.2s';
            mainPanel.style.opacity = 1;
            mainPanel.style.transform = 'translateY(0)';
        }
    }, 200);

    // Animate sections on scroll
    // Added 'footer' to the fadeEls for a smoother appearance
    const fadeEls = document.querySelectorAll('section, header, footer, .sidebar-content, .sidebar-nav, .profile-pic, #name, .role, .socials, .tools img');
    const reveal = () => {
        fadeEls.forEach((el, i) => {
            const rect = el.getBoundingClientRect();
            const viewportHeight = window.innerHeight || document.documentElement.clientHeight; // Get viewport height
            const buffer = 60; // How much of the element needs to be visible to trigger

            // Check if element is in the viewport and not already visible
            if (rect.top < viewportHeight - buffer && rect.bottom > 0 && !el.classList.contains('visible')) {
                let delay = i * 60; // Default sequential delay

                // Make footer appear instantly once it enters the viewport
                if (el.tagName === 'FOOTER') {
                    delay = 0; 
                }
                
                setTimeout(() => el.classList.add('visible'), delay);
            }
        });
    };

    fadeEls.forEach(el => el.classList.add('fade-in'));
    reveal(); // Initial call to show elements already in view on load
    window.addEventListener('scroll', reveal); // Attach to scroll event

    // Animate profile pic on load (removed if conditions, it's always visible now)
    const pic = document.querySelector('.profile-pic');
    if (pic) {
        pic.style.opacity = 0;
        pic.style.transform = 'scale(0.7)';
        setTimeout(() => {
            pic.style.transition = 'all 0.8s cubic-bezier(.23,1.01,.32,1)';
            pic.style.opacity = 1;
            pic.style.transform = 'scale(1)';
        }, 200);
    }

    // Animate nav links on hover
    document.querySelectorAll('.sidebar-nav a').forEach((link, i) => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'scale(1.08)';
            link.style.transition = 'transform 0.2s';
        });
        link.addEventListener('mouseleave', () => {
            link.style.transform = '';
        });
    });

    // Animate tools icons on load
    document.querySelectorAll('.tools img').forEach((img, i) => {
        img.style.opacity = 0;
        setTimeout(() => {
            img.style.transition = 'opacity 0.7s cubic-bezier(.23,1.01,.32,1)';
            img.style.opacity = 1;
        }, 400 + i * 120);
    });

    // Animate socials on load
    document.querySelectorAll('.socials a').forEach((a, i) => {
        a.style.opacity = 0;
        setTimeout(() => {
            a.style.transition = 'opacity 0.7s cubic-bezier(.23,1.01,.32,1)';
            a.style.opacity = 1;
        }, 600 + i * 100);
    });

    // Scroll to top button logic
    const scrollBtn = document.getElementById('scrollToTopBtn');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    });
    scrollBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});


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