document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click',function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});

const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // prevent page reload

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      formMessage.textContent = "✅ Thank you! Your message has been sent.";
      form.reset(); // clear form
    } else {
      formMessage.textContent = "❌ Oops! Something went wrong. Please try again.";
    }
  } catch (error) {
    formMessage.textContent = "❌ Network error. Please check your connection.";
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const features = document.querySelectorAll('.feature');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        features.forEach((feature, index) => {
          setTimeout(() => {
            feature.classList.add('visible');
          }, index * 300); // stagger 300ms between features
        });
        observer.disconnect(); // stop observing after animation
      }
    });
  }, { threshold: 0.5 }); // trigger when 50% visible

  const whySection = document.querySelector('.why');
  if (whySection) observer.observe(whySection);
});
