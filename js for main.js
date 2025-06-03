// Navbar minimalis: sembunyi jika kursor tidak di atas, muncul jika kursor mendekat ke atas
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    let mouseOnNavbar = false;

    // Tampilkan navbar jika mouse mendekat ke atas (misal 60px dari atas)
    document.addEventListener('mousemove', function(e) {
        if (e.clientY < 60) {
            navbar.classList.add('show-navbar');
        } else if (!mouseOnNavbar) {
            navbar.classList.remove('show-navbar');
        }
    });

    // Deteksi jika mouse berada di navbar
    navbar.addEventListener('mouseenter', function() {
        mouseOnNavbar = true;
        navbar.classList.add('show-navbar');
    });
    navbar.addEventListener('mouseleave', function() {
        mouseOnNavbar = false;
        navbar.classList.remove('show-navbar');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if(target){
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Fade-in animation on scroll
function revealOnScroll() {
    document.querySelectorAll('.card-region').forEach(card => {
        const rect = card.getBoundingClientRect();
        if(rect.top < window.innerHeight - 100) {
            card.classList.add('show');
        }
    });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

window.addEventListener('DOMContentLoaded', function() {
  const sidebar = document.getElementById('sidebar');
  const mainContent = document.querySelector('main');
  if (!sidebar) return;

  sidebar.addEventListener('mouseenter', () => {
    sidebar.classList.add('show');
    if(mainContent) mainContent.classList.add('main-content-blur');
  });
  sidebar.addEventListener('mouseleave', () => {
    sidebar.classList.remove('show');
    if(mainContent) mainContent.classList.remove('main-content-blur');
  });
  document.addEventListener('mousemove', function(e) {
    if (e.clientX < 30) {
      sidebar.classList.add('show');
      if(mainContent) mainContent.classList.add('main-content-blur');
    } else if (!sidebar.matches(':hover')) {
      sidebar.classList.remove('show');
      if(mainContent) mainContent.classList.remove('main-content-blur');
    }
  });
});