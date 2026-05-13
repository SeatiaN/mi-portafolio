document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navLinksItems = document.querySelectorAll('.nav-links a');
  const contactForm = document.getElementById('contact-form');
  const heroImage = document.querySelector('.hero-image video');

  const createBinaryRain = () => {
    const rainContainer = document.createElement('div');
    rainContainer.className = 'binary-rain';
    document.body.appendChild(rainContainer);

    const binaryChars = '01';
    const columns = Math.floor(window.innerWidth / 12);

    for (let i = 0; i < columns; i++) {
      const column = document.createElement('div');
      column.className = 'binary-column';
      column.style.left = `${i * 12}px`;
      column.style.animationDuration = `${Math.random() * 3 + 4}s`;
      column.style.animationDelay = `${Math.random() * 2}s`;

      let binaryString = '';
      const charCount = Math.floor(Math.random() * 30) + 25;
      for (let j = 0; j < charCount; j++) {
        binaryString += binaryChars[Math.floor(Math.random() * 2)];
        if (j < charCount - 1) binaryString += '\n';
      }
      column.textContent = binaryString;
      rainContainer.appendChild(column);
    }
  };

  createBinaryRain();

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });

  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinksItems.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      console.log('Formulario enviado:', { name, email, message });
      alert('Mensaje enviado correctamente!');
      contactForm.reset();
    });
  }

  if (heroImage) {
    heroImage.addEventListener('click', () => {
      heroImage.style.transform = 'scale(0.95)';
      setTimeout(() => {
        heroImage.style.transform = 'scale(1)';
      }, 100);
    });
  }

  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  cursor.innerHTML = '<span></span>';
  document.body.appendChild(cursor);

  const cursorDot = document.createElement('div');
  cursorDot.className = 'cursor-dot';
  document.body.appendChild(cursorDot);

  document.addEventListener('mousemove', (e) => {
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';
    
    cursor.animate({
      left: e.clientX + 'px',
      top: e.clientY + 'px'
    }, { duration: 500, fill: 'forwards' });
  });

  document.querySelectorAll('a, button, .skill-tag, .project-card').forEach(el => {
    el.style.cursor = 'none';
  });

  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transition = 'all 0.3s';
    });
  });

  const skillTags = document.querySelectorAll('.skill-tag');
  skillTags.forEach((tag, index) => {
    tag.style.animationDelay = `${index * 0.1}s`;
  });

  const createParticles = () => {
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;

    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 5 + 's';
      particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
      heroSection.appendChild(particle);
    }
  };
  createParticles();

  const revealOnScroll = () => {
    const elements = document.querySelectorAll('.about-content, .project-card, .contact-form');
    
    elements.forEach(el => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }
    });
  };

  document.querySelectorAll('.about-content, .project-card, .contact-form').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
  });

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();

  const addGlitchEffect = () => {
    const titles = document.querySelectorAll('h1, h2');
    titles.forEach(title => {
      title.addEventListener('mouseenter', () => {
        title.style.animation = 'glitch 0.3s linear';
        setTimeout(() => {
          title.style.animation = '';
        }, 300);
      });
    });
  };
  addGlitchEffect();

  const style = document.createElement('style');
  style.textContent = `
    .custom-cursor {
      position: fixed;
      width: 30px;
      height: 30px;
      border: 2px solid #ff1744;
      border-radius: 50%;
      pointer-events: none;
      z-index: 10000;
      transform: translate(-50%, -50%);
      transition: width 0.2s, height 0.2s;
      box-shadow: 0 0 10px #ff1744, 0 0 20px #ff174480;
      mix-blend-mode: difference;
    }
    .custom-cursor span {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 4px;
      height: 4px;
      background: #ff1744;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      box-shadow: 0 0 8px #ff1744;
    }
    .cursor-dot {
      position: fixed;
      width: 8px;
      height: 8px;
      background: #ff1744;
      border-radius: 50%;
      pointer-events: none;
      z-index: 10001;
      transform: translate(-50%, -50%);
      box-shadow: 0 0 10px #ff1744;
    }
    .particle {
      position: absolute;
      width: 3px;
      height: 3px;
      background: #ff1744;
      border-radius: 50%;
      opacity: 0;
      pointer-events: none;
      animation: particleFloat 5s infinite;
      box-shadow: 0 0 6px #ff1744;
    }
    @keyframes particleFloat {
      0% { opacity: 0; transform: translateY(0) scale(0); }
      50% { opacity: 0.8; transform: translateY(-100px) scale(1); }
      100% { opacity: 0; transform: translateY(-200px) scale(0); }
    }
    @keyframes glitch {
      0% { transform: translate(0); filter: hue-rotate(0deg); }
      20% { transform: translate(-2px, 2px); filter: hue-rotate(90deg); }
      40% { transform: translate(-2px, -2px); filter: hue-rotate(180deg); }
      60% { transform: translate(2px, 2px); filter: hue-rotate(270deg); }
      80% { transform: translate(2px, -2px); filter: hue-rotate(360deg); }
      100% { transform: translate(0); filter: hue-rotate(0deg); }
    }
  `;
  document.head.appendChild(style);
});