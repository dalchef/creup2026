/**
 * Navigation Scroll Behavior
 */
(function () {
    'use strict';

    const nav = document.getElementById('nav');
    if (!nav) return;

    let lastScrollY = window.scrollY;
    let ticking = false;

    function updateNav() {
        const y = window.scrollY;

        if (y > 8) {
            nav.classList.add('is-scrolled');
        } else {
            nav.classList.remove('is-scrolled');
        }

        lastScrollY = y;
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateNav);
            ticking = true;
        }
    }, { passive: true });

    // Smooth scroll offset for fixed nav
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href === '#' || href.length < 2) return;

            const target = document.querySelector(href);
            if (!target) return;

            e.preventDefault();
            const navHeight = nav.offsetHeight;
            const top = target.getBoundingClientRect().top + window.scrollY - navHeight + 1;

            window.scrollTo({
                top,
                behavior: 'smooth'
            });
        });
    });
})();
