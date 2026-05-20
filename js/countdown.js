/**
 * Countdown Timer to Application Deadline
 * Deadline: 2026.06.11 (Thu) 17:00 KST
 */
(function () {
    'use strict';

    const DEADLINE = new Date('2026-06-11T17:00:00+09:00').getTime();

    const els = {
        days: document.getElementById('cd-days'),
        hours: document.getElementById('cd-hours'),
        mins: document.getElementById('cd-mins'),
        secs: document.getElementById('cd-secs'),
        container: document.getElementById('countdown')
    };

    if (!els.days || !els.hours || !els.mins || !els.secs) return;

    const pad = (n) => String(Math.max(0, n)).padStart(2, '0');

    function tick() {
        const now = Date.now();
        const diff = DEADLINE - now;

        if (diff <= 0) {
            els.days.textContent = '00';
            els.hours.textContent = '00';
            els.mins.textContent = '00';
            els.secs.textContent = '00';
            if (els.container) {
                const label = els.container.querySelector('.hero__countdown-label');
                if (label) label.textContent = '접수 마감';
            }
            return false;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const mins = Math.floor((diff / (1000 * 60)) % 60);
        const secs = Math.floor((diff / 1000) % 60);

        els.days.textContent = pad(days);
        els.hours.textContent = pad(hours);
        els.mins.textContent = pad(mins);
        els.secs.textContent = pad(secs);

        return true;
    }

    if (tick()) {
        setInterval(tick, 1000);
    }
})();
