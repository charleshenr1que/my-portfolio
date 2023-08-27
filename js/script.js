// JavaScript
const modal = document.getElementById("modal");
const overlay = document.querySelector(".overlay");
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let position = 0;

function openModal() {
  modal.style.display = "block";
  overlay.style.display = "block";
  document.documentElement.classList.add("no-scroll");
  prevBtn.style.display = "none";
}

function closeModal() {
  modal.style.display = "none";
  overlay.style.display = "none";
  document.documentElement.classList.remove("no-scroll");
}

function updateButtonVisibility() {
  prevBtn.style.display = position < 0 ? "block" : "none";
  nextBtn.style.display = position > getMaxPosition() ? "block" : "none";
}

function getMaxPosition() {
  const carousel = document.querySelector('.cr');
  const containerWidth = document.querySelector('.carousel').offsetWidth;
  const itemWidth = document.querySelector('.experiences').offsetWidth;
  const itemsInCarousel = carousel.childElementCount;
  return -(itemWidth * itemsInCarousel - containerWidth);
}

function onWindowResize() {
  position = 0;
  const carousel = document.querySelector('.cr');
  carousel.style.transform = `translateX(${position}px)`;
  updateButtonVisibility();
}

function onNextClick() {
  const carousel = document.querySelector('.cr');
  const itemWidth = document.querySelector('.experiences').offsetWidth;
  const maxPosition = getMaxPosition();

  if (position > maxPosition) {
    position = Math.max(position - itemWidth, maxPosition);
    carousel.style.transform = `translateX(${position}px)`;
    updateButtonVisibility();
  }
}

function onPrevClick() {
  const carousel = document.querySelector('.cr');
  const itemWidth = document.querySelector('.experiences').offsetWidth;

  if (position < 0) {
    position = Math.min(position + itemWidth, 0);
    carousel.style.transform = `translateX(${position}px)`;
    updateButtonVisibility();
  }
}

// function selectedMenu(){
//   debugger;
//   const navItems = document.querySelectorAll('.decoration-line');
//   navItems.forEach(navItem => navItem.classList.remove('selected'));

//   navItems.forEach(item => {
//     item.addEventListener('click', () => {
//       // Em seguida, adicione a classe 'selected' ao item clicado
//       item.classList.add('selected');
//     });
//   });

// }


prevBtn.style.display = "none";
nextBtn.addEventListener('click', onNextClick);
prevBtn.addEventListener('click', onPrevClick);
window.addEventListener('resize', onWindowResize);

document.addEventListener('DOMContentLoaded', function() {
  selectedMenu();
});