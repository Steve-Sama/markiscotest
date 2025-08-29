document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const socialIcons = document.getElementById('social-icons');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    socialIcons.classList.toggle('active');
  });
});
