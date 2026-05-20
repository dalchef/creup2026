/**
 * Announcement Modal
 * Opens the CRE-UP 2026 announcement PDF in a modal with download option.
 */
(function () {
    'use strict';

    const modal = document.getElementById('announcement-modal');
    const openBtn = document.getElementById('open-announcement-btn');
    if (!modal || !openBtn) return;

    function openModal() {
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');

        const closeBtn = modal.querySelector('.modal__close');
        if (closeBtn) closeBtn.focus();
    }

    function closeModal() {
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        // Only remove modal-open if no other modal is open
        const anyOpen = document.querySelector('.modal.is-open');
        if (!anyOpen) {
            document.body.classList.remove('modal-open');
        }
    }

    openBtn.addEventListener('click', openModal);

    // Close handlers - scoped to this modal
    modal.querySelectorAll('[data-modal-close]').forEach((el) => {
        el.addEventListener('click', closeModal);
    });

    // ESC to close (only if this modal is the top one)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('is-open')) {
            closeModal();
        }
    });
})();
