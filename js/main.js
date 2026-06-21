// ===== Mobile nav toggle =====
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger) {
  hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => navLinks.classList.remove('open'))
  );
}

// ===== Highlight active nav link =====
(function () {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path) a.classList.add('active');
  });
})();

// ===== Scroll reveal =====
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ===== Header background on scroll =====
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  header.style.background =
    window.scrollY > 40 ? 'rgba(10,10,10,0.95)' : 'rgba(10,10,10,0.85)';
});

// ===== Contact form (client-side only) =====
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const msg = document.getElementById('formMsg');
    msg.textContent = '✓ Thank you! Your enquiry has been recorded. We will get back to you shortly.';
    msg.style.display = 'block';
    form.reset();
    setTimeout(() => (msg.style.display = 'none'), 6000);
  });
}
