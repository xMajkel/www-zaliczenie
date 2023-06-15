// Pobranie elementów
const slider = document.querySelector('.slider');
const sliderContainer = slider.querySelector('.slider-container');
const prevBtn = slider.querySelector('.prev-btn');
const nextBtn = slider.querySelector('.next-btn');
const infoElements = document.querySelectorAll('.info');

// Początkowa pozycja slidera
let position = 0;

// Przesuwanie slidera w lewo
function slideLeft() {
  position += 100;
  if (position > 0) {
    position = -100 * (sliderContainer.children.length - 1);
  }
  sliderContainer.style.transform = `translateX(${position}%)`;
  updateInfo();
}

// Przesuwanie slidera w prawo
function slideRight() {
  position -= 100;
  if (position < -100 * (sliderContainer.children.length - 1)) {
    position = 0;
  }
  sliderContainer.style.transform = `translateX(${position}%)`;
  updateInfo();
}

// Obsługa kliknięcia przycisków
prevBtn.addEventListener('click', slideLeft);
nextBtn.addEventListener('click', slideRight);

// Aktualizacja informacji
function updateInfo() {
  // Pobranie aktualnej pozycji slidera
  const currentSlide = Math.abs(position / 100) % sliderContainer.children.length;

  // Ukrycie wszystkich informacji
  infoElements.forEach(info => {
    info.style.display = 'none';
  });

  // Wyświetlenie informacji dla aktualnego obrazka
  const currentInfo = document.querySelector(`#info${currentSlide + 1}`);
  if (currentInfo) {
    currentInfo.style.display = 'block';
  }
}

updateInfo()
