/**
 * Email Display
 * Ensures email is always visible even if email-protection extensions
 * (e.g., Cloudflare, ad blockers) try to obfuscate it.
 */
(function () {
    'use strict';

    // Build email from parts so static scanners that scan the rendered DOM
    // for ".onmicrosoft.com" or "[email protected]" style placeholders
    // don't accidentally hide it.
    const local = 'onyou.na';
    const domain = 'brinc.io';
    const email = local + '@' + domain;

    const targets = document.querySelectorAll('[data-email-display]');
    targets.forEach((el) => {
        el.textContent = email;
    });

    const links = document.querySelectorAll('[data-email-link]');
    links.forEach((el) => {
        el.setAttribute('href', 'mailto:' + email);
    });
})();
