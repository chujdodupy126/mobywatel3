// Po załadowaniu strony dodajemy klasę "loaded" do body, żeby animacje css się odpaliły
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// Prosta obsługa selector_box (płeć)
const selectorBox = document.querySelector('.selector_box');
const selectedGrid = selectorBox.querySelector('.selected_grid');
const optionBox = selectorBox.querySelector('.option_box');
const options = optionBox.querySelectorAll('.selector_option');
const selectedText = selectedGrid.querySelector('.selected_text');
const selectedArrow = selectedGrid.querySelector('.selected_arrow');

selectedGrid.addEventListener('click', () => {
  optionBox.classList.toggle('active');
  selectedArrow.style.transform = optionBox.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
});

options.forEach(option => {
  option.addEventListener('click', () => {
    selectedText.textContent = option.textContent;
    optionBox.classList.remove('active');
    selectedArrow.style.transform = 'rotate(0deg)';
  });
});

// Zamknięcie selecta po kliknięciu poza niego
document.addEventListener('click', e => {
  if (!selectorBox.contains(e.target)) {
    optionBox.classList.remove('active');
    selectedArrow.style.transform = 'rotate(0deg)';
  }
});
