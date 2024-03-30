let slideIndex = 0;

const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.navigation-dots');

function showSlide(n) {
  if (n >= slides.length) { slideIndex = 0; }
  if (n < 0) { slideIndex = slides.length - 1; }
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${slideIndex * 100}%)`;
  });
  updateActiveDot();
}

function updateActiveDot() {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    dot.classList.remove('active');
    if (index === slideIndex) {
      dot.classList.add('active');
    }
  });
}

function prevSlide() {
  showSlide(slideIndex -= 1);
}

function nextSlide() {
  showSlide(slideIndex += 1);
}

slides.forEach((slide, index) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  dot.addEventListener('click', () => {
    showSlide(index);
  });
  dotsContainer.appendChild(dot);
});

showSlide(slideIndex);

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') {
    prevSlide();
  } else if (e.key === 'ArrowRight') {
    nextSlide();
  }
});
