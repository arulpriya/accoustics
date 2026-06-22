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
  const msg = document.getElementById('formMsg');
  const submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async e => {
    e.preventDefault();

    // Basic required-field validation
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending…';
    submitBtn.disabled = true;

    try {
      const formData = new FormData(form);
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData
      });
      const data = await response.json();

      if (data.success) {
        msg.style.background = 'rgba(212,255,63,0.12)';
        msg.style.color = 'var(--accent)';
        msg.textContent = '✓ Thank you! Your enquiry has been sent. We will get back to you shortly.';
        form.reset();
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      msg.style.background = 'rgba(255,80,80,0.12)';
      msg.style.color = '#ff6b6b';
      msg.textContent = '✗ Sorry, something went wrong. Please email us directly at aadhithyan16anbu@gmail.com';
    } finally {
      msg.style.display = 'block';
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      setTimeout(() => (msg.style.display = 'none'), 8000);
    }
  });
}
