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


// Hamburger menu toggle logic
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebar-overlay');
hamburger.addEventListener('click', function () {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('show');
    hamburger.setAttribute('aria-expanded', sidebar.classList.contains('open'));
});
overlay.addEventListener('click', function () {
    sidebar.classList.remove('open');
    overlay.classList.remove('show');
    hamburger.setAttribute('aria-expanded', 'false');
});


// Correct implementation: Hide the arrow when the sidebar is fully scrolled

document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.querySelector('.sidebar');
    const sidebarArrow = document.querySelector('.sidebar-arrow');

    // Add close button for mobile sidebar
    function addSidebarCloseBtn() {
        if (window.innerWidth <= 900 && sidebar && !document.getElementById('sidebar-close-btn')) {
            const closeBtn = document.createElement('button');
            closeBtn.id = 'sidebar-close-btn';
            closeBtn.setAttribute('aria-label', 'Close sidebar');
            closeBtn.innerHTML = '&times;';
            closeBtn.style.position = 'absolute';
            closeBtn.style.top = '18px';
            closeBtn.style.right = '18px';
            closeBtn.style.fontSize = '2rem';
            closeBtn.style.background = 'none';
            closeBtn.style.border = 'none';
            closeBtn.style.color = '#fff';
            closeBtn.style.zIndex = '2000';
            closeBtn.style.cursor = 'pointer';
            closeBtn.style.display = 'block';
            closeBtn.addEventListener('click', function () {
                sidebar.classList.remove('open');
                document.getElementById('sidebar-overlay').classList.remove('show');
                document.getElementById('hamburger').setAttribute('aria-expanded', 'false');
            });
            sidebar.appendChild(closeBtn);
        } else if (window.innerWidth > 900 && document.getElementById('sidebar-close-btn')) {
            document.getElementById('sidebar-close-btn').remove();
        }
    }
    addSidebarCloseBtn();
    window.addEventListener('resize', addSidebarCloseBtn);

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

    // Close sidebar on nav link click in mobile view
    const sidebarNavLinks = document.querySelectorAll('.sidebar-nav a');
    sidebarNavLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            if (window.innerWidth <= 900) {
                sidebar.classList.remove('open');
                document.getElementById('sidebar-overlay').classList.remove('show');
                document.getElementById('hamburger').setAttribute('aria-expanded', 'false');
            }
        });
    });
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

