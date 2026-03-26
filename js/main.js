/* ============================================
   GUSTAVO LARCO - Portfolio JavaScript
   Particles, Animations, Interactions
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Particle Canvas ---------- */
  const canvas = document.getElementById('particle-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouse = { x: null, y: null };
    let animationId;

    function resizeCanvas() {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });
    canvas.addEventListener('mouseleave', () => { mouse.x = null; mouse.y = null; });

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.6;
        this.speedY = (Math.random() - 0.5) * 0.6;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.color = Math.random() > 0.5 ? '59, 130, 246' : '139, 92, 246';
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            const force = (150 - dist) / 150;
            this.x -= dx * force * 0.02;
            this.y -= dy * force * 0.02;
          }
        }
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(' + this.color + ', ' + this.opacity + ')';
        ctx.fill();
      }
    }

    function initParticles() {
      particles = [];
      const count = Math.min(Math.floor((canvas.width * canvas.height) / 8000), 150);
      for (let i = 0; i < count; i++) particles.push(new Particle());
    }

    function connectParticles() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const opacity = (1 - dist / 120) * 0.15;
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(59, 130, 246, ' + opacity + ')';
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      connectParticles();
      animationId = requestAnimationFrame(animateParticles);
    }
    initParticles();
    animateParticles();
    window.addEventListener('resize', () => { cancelAnimationFrame(animationId); initParticles(); animateParticles(); });
  }

  /* ---------- Navbar Scroll Effect ---------- */
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  const sections = document.querySelectorAll('section[id]');

  function handleScroll() {
    const scrollY = window.scrollY;
    if (scrollY > 50) { navbar.classList.add('scrolled'); } else { navbar.classList.remove('scrolled'); }
    let currentSection = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (scrollY >= sectionTop) currentSection = section.getAttribute('id');
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + currentSection) link.classList.add('active');
    });
  }
  window.addEventListener('scroll', handleScroll);
  handleScroll();

  /* ---------- Mobile Navigation ---------- */
  const hamburger = document.querySelector('.hamburger');
  const navLinksContainer = document.querySelector('.nav-links');
  const navOverlay = document.querySelector('.nav-overlay');

  function toggleMobileNav() {
    hamburger.classList.toggle('active');
    navLinksContainer.classList.toggle('active');
    navOverlay.classList.toggle('active');
    document.body.style.overflow = navLinksContainer.classList.contains('active') ? 'hidden' : '';
  }
  if (hamburger) hamburger.addEventListener('click', toggleMobileNav);
  if (navOverlay) navOverlay.addEventListener('click', toggleMobileNav);
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => { if (navLinksContainer.classList.contains('active')) toggleMobileNav(); });
  });

  /* ---------- Typewriter Effect ---------- */
  const typewriterEl = document.querySelector('.typewriter-text');
  if (typewriterEl) {
    const roles = ['Software Engineer', 'Full Stack Developer', 'Data Analyst', '.NET / C# Developer', 'React Developer', 'Cloud Engineer'];
    let roleIndex = 0, charIndex = 0, isDeleting = false, typingSpeed = 80;

    function typeWriter() {
      const currentRole = roles[roleIndex];
      if (isDeleting) { typewriterEl.textContent = currentRole.substring(0, charIndex - 1); charIndex--; typingSpeed = 40; }
      else { typewriterEl.textContent = currentRole.substring(0, charIndex + 1); charIndex++; typingSpeed = 80; }
      if (!isDeleting && charIndex === currentRole.length) { isDeleting = true; typingSpeed = 2000; }
      else if (isDeleting && charIndex === 0) { isDeleting = false; roleIndex = (roleIndex + 1) % roles.length; typingSpeed = 400; }
      setTimeout(typeWriter, typingSpeed);
    }
    setTimeout(typeWriter, 1000);
  }

  /* ---------- Stats Counter Animation ---------- */
  const statNumbers = document.querySelectorAll('.stat-number');
  function animateCounter(el) {
    const target = el.getAttribute('data-target');
    const suffix = el.getAttribute('data-suffix') || '';
    const prefix = el.getAttribute('data-prefix') || '';
    const targetNum = parseInt(target);
    const duration = 2000;
    const startTime = performance.now();
    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * targetNum);
      el.textContent = prefix + current.toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(updateCounter);
      else el.textContent = prefix + targetNum.toLocaleString() + suffix;
    }
    requestAnimationFrame(updateCounter);
  }

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.stat-number').forEach(el => animateCounter(el));
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  const statsSection = document.querySelector('.stats-section');
  if (statsSection) statsObserver.observe(statsSection);

  /* ---------- Project Filtering ---------- */
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category').split(' ');
        if (filter === 'all' || categories.includes(filter)) { card.classList.remove('hidden'); card.style.animation = 'fadeInUp 0.5s ease forwards'; }
        else { card.classList.add('hidden'); }
      });
    });
  });

  /* ---------- Project Card Tilt Effect ---------- */
  projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 25;
      const rotateY = (centerX - x) / 25;
      card.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateY(-8px)';
    });
    card.addEventListener('mouseleave', () => { card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)'; });
  });

  /* ---------- Smooth Scroll ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      e.preventDefault();
      const targetEl = document.querySelector(targetId);
      if (targetEl) { window.scrollTo({ top: targetEl.offsetTop - 72, behavior: 'smooth' }); }
    });
  });

  /* ---------- Initialize AOS ---------- */
  if (typeof AOS !== 'undefined') { AOS.init({ duration: 800, easing: 'ease-out-cubic', once: true, offset: 80, delay: 0 }); }

  /* ---------- Skill Tags Stagger Animation ---------- */
  const skillCategories = document.querySelectorAll('.skill-category');
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const tags = entry.target.querySelectorAll('.skill-tag');
        tags.forEach((tag, index) => {
          tag.style.opacity = '0';
          tag.style.transform = 'translateY(10px)';
          setTimeout(() => { tag.style.transition = 'all 0.4s ease'; tag.style.opacity = '1'; tag.style.transform = 'translateY(0)'; }, index * 60);
        });
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  skillCategories.forEach(cat => skillObserver.observe(cat));

  /* ---------- Scroll-triggered fade-in ---------- */
  const fadeEls = document.querySelectorAll('.fade-in-up');
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); fadeObserver.unobserve(entry.target); } });
  }, { threshold: 0.15 });
  fadeEls.forEach(el => fadeObserver.observe(el));

  /* ---------- Year in Footer ---------- */
  const yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

/* ---------- Fade-in-up animation ---------- */
const style = document.createElement('style');
style.textContent = '.fade-in-up{opacity:0;transform:translateY(30px);transition:opacity 0.7s ease,transform 0.7s ease}.fade-in-up.visible{opacity:1;transform:translateY(0)}@keyframes fadeInUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}';
document.head.appendChild(style);
