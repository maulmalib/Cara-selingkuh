const bait = document.getElementById('bait');
const reveal = document.getElementById('reveal');
const curtain = document.getElementById('curtain');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const slidesEl = document.getElementById('slides');
const dotsEl = document.getElementById('dots');
const slides = Array.from(document.querySelectorAll('.slide'));

// Small fake "live counter" to sell the clickbait bit
const counterEl = document.getElementById('counter');
let count = 1203554;
setInterval(() => {
  count += Math.floor(Math.random() * 3);
  counterEl.textContent = count.toLocaleString('id-ID');
}, 2500);

/* ---------- Dot navigation ---------- */
slides.forEach((_, i) => {
  const d = document.createElement('div');
  d.className = 'dot' + (i === 0 ? ' active' : '');
  d.addEventListener('click', () => {
    slides[i].scrollIntoView({ behavior: 'smooth' });
  });
  dotsEl.appendChild(d);
});
const dots = Array.from(dotsEl.children);

const dotObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const idx = slides.indexOf(entry.target);
      dots.forEach(d => d.classList.remove('active'));
      if (dots[idx]) dots[idx].classList.add('active');
    }
  });
}, { root: slidesEl, threshold: 0.6 });
slides.forEach(s => dotObserver.observe(s));

/* ---------- Tap-to-advance (skip carousels, links, buttons) ---------- */
slides.forEach((slide, i) => {
  slide.addEventListener('click', (e) => {
    if (e.target.closest('[data-carousel], a, button, .footer-refs, summary')) return;
    const next = slides[i + 1];
    if (next) next.scrollIntoView({ behavior: 'smooth' });
  });
});

/* ---------- Bait -> Reveal transition ---------- */
function goToReveal() {
  document.body.classList.add('locked');
  curtain.classList.add('down');

  // swap content while screen is fully dark, before curtain lifts
  setTimeout(() => {
    bait.classList.add('hide');
    reveal.classList.add('show');
    slidesEl.scrollTo(0, 0);
    document.title = 'Jangan Selingkuh — Ini yang Sebenarnya Terjadi';
    curtain.classList.add('showtext');
  }, 700);

  setTimeout(() => {
    curtain.classList.add('lift');
  }, 2400);

  setTimeout(() => {
    curtain.classList.remove('down', 'lift', 'showtext');
    document.body.classList.remove('locked');
  }, 3200);
}

function goToBait() {
  reveal.classList.remove('show');
  bait.classList.remove('hide');
  window.scrollTo(0, 0);
  document.title = 'Cara Selingkuh Tanpa Ketahuan (2026) — Trik Terbaru';
}

startBtn.addEventListener('click', goToReveal);
resetBtn.addEventListener('click', goToBait);
