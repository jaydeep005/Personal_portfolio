// Mobile menu toggle
const a = document.querySelector('.menu-button');
const b = document.querySelector('.mobile-menu');
const c = document.querySelectorAll('.mobile-nav .nav-link');

function toggleMobileMenu() {
  b.classList.toggle('active');
}

a.addEventListener('click', toggleMobileMenu);

// Close mobile menu when a nav link is clicked
c.forEach(link => {
  link.addEventListener('click', () => {
    b.classList.remove('active');
  });
});

// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Form submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  // Here you would typically send the form data to a server
  // For this example, we'll just log
  console.log('Form submitted:', { name, email, message });
  
  // Show success message
  alert('Thank you for your message! I will get back to you soon.');
  
  // Reset form
  contactForm.reset();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Offset for header
        behavior: 'smooth'
      });
    }
  });
});

// Add animation on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.section-header, .skill-card, .project-card');
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (elementPosition < windowHeight - 100) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
};

// Initialize animation styles
document.addEventListener('DOMContentLoaded', () => {
  const elementsToAnimate = document.querySelectorAll('.section-header, .skill-card, .project-card');
  
  elementsToAnimate.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });
  
  // Trigger initial animation check
  animateOnScroll();
  
  // Add scroll event listener
  window.addEventListener('scroll', animateOnScroll);
});
// Mobile menu toggle
const menuButton = document.querySelector('.menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav .nav-link');

function toggleMobileMenu() {
  mobileMenu.classList.toggle('active');
}

menuButton.addEventListener('click', toggleMobileMenu);

// Close mobile menu when a nav link is clicked
mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });
});

// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Form submission
const d = document.querySelector('.primary-button');

d.addEventListener('click', function(event) {
 
  // Show success message
  alert('Thank you for your message! I will get back to you soon.');
  
  // Reset form
  d.reset();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Offset for header
        behavior: 'smooth'
      });
    }
  });
});

// Add animation on scroll
const e = () => {
  const elements = document.querySelectorAll('.section-header, .skill-card, .project-card');
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (elementPosition < windowHeight - 100) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
};

// Add this function to create a subtle particle background effect
function createParticleBackground() {
  const canvas = document.createElement('canvas');
  canvas.id = 'particle-background';
  document.body.prepend(canvas);
  
  const ctx = canvas.getContext('2d');
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  // Style the canvas
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.zIndex = '-1';
  canvas.style.pointerEvents = 'none';
  
  // Particle settings
  const particlesArray = [];
  const numberOfParticles = 100;
  
  // Create particles
  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 3 + 1;
      this.speedX = Math.random() * 0.5 - 0.25;
      this.speedY = Math.random() * 0.5 - 0.25;
      this.color = `rgba(59, 130, 246, ${Math.random() * 0.2})`;
    }
    
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      
      if (this.x > canvas.width) this.x = 0;
      if (this.x < 0) this.x = canvas.width;
      if (this.y > canvas.height) this.y = 0;
      if (this.y < 0) this.y = canvas.height;
    }
    
    draw() {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  
  function init() {
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }
  }
  
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++) {
      particlesArray[i].update();
      particlesArray[i].draw();
    }
    requestAnimationFrame(animate);
  }
  
  window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
  });
  
  init();
  animate();
}

// Initialize the particle background when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize the existing animation code
  const elementsToAnimate = document.querySelectorAll('.section-header, .skill-card, .project-card');
  
  elementsToAnimate.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });
  
  // Trigger initial animation check
  e();
  
  // Add scroll event listener
  window.addEventListener('scroll', e);
  
  // Create the particle background
  createParticleBackground();
});