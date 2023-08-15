// script.js

// Obtener todos los elementos con la clase "progress-bar"
const progressBars = document.querySelectorAll('.progress-bar');

// Animar las barras de progreso
progressBars.forEach(bar => {
  const width = bar.getAttribute('style');
  bar.style.width = '0%';

  setTimeout(() => {
    bar.style.width = width;
  }, 500);
});
