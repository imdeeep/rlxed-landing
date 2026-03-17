/* ═══════════════════════════════════════════════════════
   Rlxed — script.js
═══════════════════════════════════════════════════════ */

const APK_URL = 'https://github.com/imdeeep/rlxed-landing/releases/download/v1/rlxed-v1.0.0-arm64.apk';

/* ── Footer year ────────────────────────────────────── */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ── Copy-link button ───────────────────────────────── */
const copyBtn   = document.getElementById('copyBtn');
const copyLabel = document.getElementById('copyLabel');

if (copyBtn && copyLabel) {
  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(APK_URL);
      copyLabel.textContent = 'Copied!';
      copyBtn.classList.add('copied');
    } catch {
      /* Fallback for older browsers or blocked clipboard access */
      const ta = document.createElement('textarea');
      ta.value = APK_URL;
      ta.style.cssText = 'position:fixed;opacity:0;pointer-events:none';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      copyLabel.textContent = 'Copied!';
      copyBtn.classList.add('copied');
    }

    setTimeout(() => {
      copyLabel.textContent = 'Copy link';
      copyBtn.classList.remove('copied');
    }, 2200);
  });
}