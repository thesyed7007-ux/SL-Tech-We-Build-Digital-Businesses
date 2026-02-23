// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Scroll reveal
const revealItems = document.querySelectorAll('.reveal');

function revealOnScroll() {
  revealItems.forEach(item => {
    if (item.getBoundingClientRect().top < window.innerHeight - 120) {
      item.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
