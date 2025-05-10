const body = document.body;
const themeSwitch = document.getElementById('switch');
const themeToggle = document.getElementById('theme-toggle');

// Отримуємо збережену тему
const savedTheme = localStorage.getItem('theme');

// Якщо збережена тема існує
if (savedTheme === 'dark-theme') {
  body.classList.add('dark-theme');
  themeSwitch.checked = true;
} else {
  body.classList.add('light-theme');
  themeSwitch.checked = false;
}

// Обробник перемикання теми
themeSwitch.addEventListener('change', () => {
  if (themeSwitch.checked) {
    body.classList.add('dark-theme');
    body.classList.remove('light-theme');
    localStorage.setItem('theme', 'dark-theme');
  } else {
    body.classList.add('light-theme');
    body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light-theme');
  }

  // Анімація обертання
  themeToggle.classList.add('rotate');
  setTimeout(() => {
    themeToggle.classList.remove('rotate');
  }, 500);
});



// Анімація при скролі
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.feature, .testimonial, .pricing-card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
};

// Викликаємо анімацію при завантаженні сторінки
window.addEventListener('load', () => {
  animateOnScroll();
});
