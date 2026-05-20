/**
 * Scroll-triggered Reveal Animations
 * Uses IntersectionObserver to add 'is-revealed' class
 */
(function () {
    'use strict';

    if (!('IntersectionObserver' in window)) return;

    const targets = document.querySelectorAll(
        '.overview-card, .program-card, .partner-card, .mentor-card, .schedule__row, .faq__item, .process__step, .section__head'
    );

    // Inject base styles for reveal
    const style = document.createElement('style');
    style.textContent = `
        .reveal-init {
            opacity: 0;
            transform: translateY(24px);
            transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
            will-change: opacity, transform;
        }
        .reveal-init.is-revealed {
            opacity: 1;
            transform: translateY(0);
        }
        @media (prefers-reduced-motion: reduce) {
            .reveal-init {
                opacity: 1;
                transform: none;
                transition: none;
            }
        }
    `;
    document.head.appendChild(style);

    targets.forEach((el, idx) => {
        el.classList.add('reveal-init');
        // Staggered reveal for sibling groups
        const parent = el.parentElement;
        if (parent) {
            const siblings = Array.from(parent.children).filter(c => c.classList.contains('reveal-init'));
            const indexInGroup = siblings.indexOf(el);
            if (indexInGroup > -1) {
                el.style.transitionDelay = `${indexInGroup * 60}ms`;
            }
        }
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-revealed');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -60px 0px'
    });

    targets.forEach((el) => observer.observe(el));

    // FAQ accordion: close others when one opens (optional UX nicety)
    const faqItems = document.querySelectorAll('.faq__item');
    faqItems.forEach((item) => {
        item.addEventListener('toggle', () => {
            if (item.open) {
                faqItems.forEach((other) => {
                    if (other !== item) other.open = false;
                });
            }
        });
    });
})();
