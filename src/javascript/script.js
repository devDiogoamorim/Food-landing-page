document.addEventListener('DOMContentLoaded', function () {
  const mobileBtn = document.getElementById('mobile_btn');
  const mobileMenu = document.getElementById('mobile_menu');
  const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('section');
  const header = document.querySelector('header');

  mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    const icon = mobileBtn.querySelector('i');
    if (icon) {
      icon.classList.toggle('fa-x');
    }
  });

  window.addEventListener('scroll', () => {
    let activeSectionIndex = 0;
    const scrollPosition = window.scrollY - header.offsetHeight;

    if (scrollPosition <= 0) {
      header.style.boxShadow = 'none';
    } else {
      header.style.boxShadow = '5px 1px 5px rgba(0, 0, 0, 0.1)';
    }

    sections.forEach((section, i) => {
      const sectionTop = section.offsetTop - 96;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        activeSectionIndex = i;
        return;
      }
    });

    navItems.forEach(item => item.classList.remove('active'));
    if (navItems[activeSectionIndex]) {
      navItems[activeSectionIndex].classList.add('active');
    }
  });
});

ScrollReveal().reveal('#cta', {
  origin: 'left',
  duration: 2000,
  distance: '20%'
});

ScrollReveal().reveal('.dish', {
  origin: 'left',
  duration: 2000,
  distance: '20%'
});

ScrollReveal().reveal('#testimonials', {
  origin: 'left',
  duration: 1000,
  distance: '20%'
});

ScrollReveal().reveal('.feedback', {
  origin: 'right',
  duration: 1500,
  distance: '20%'
});