const categories = document.querySelector('.categories');
const indicators = document.querySelectorAll('.indicator');
const card = document.querySelector('.categories-card');

categories.addEventListener('scroll', () => {
  const scrollLeft = categories.scrollLeft;
  const cardWidth = card.offsetWidth;
  const itemsPerPage = 3;
  const pageIndex = Math.round(scrollLeft / (cardWidth * itemsPerPage));

  indicators.forEach((dot, index) => {
    dot.classList.toggle('active', index === pageIndex);
  });
});
