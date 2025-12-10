const panels = document.querySelectorAll('.panel');
let current = 0;

const nextBtn = document.getElementById('next');
const toggleBtn = document.getElementById('toggle'); // now this is "View All"
const backBtn = document.getElementById('back'); // new back button
const carousel = document.querySelector('.brochure-carousel');

// Show the active panel
function showPanel(index) {
    panels.forEach(p => p.classList.remove('active'));
    panels[index].classList.add('active');
}

// Next button: move to next panel
nextBtn.addEventListener('click', () => {
    current = (current + 1) % panels.length;
    showPanel(current);
});

// View All button
toggleBtn.addEventListener('click', () => {
    carousel.classList.add('full-view');
    panels.forEach(p => p.classList.remove('active'));
    toggleBtn.style.display = 'none';
    backBtn.style.display = 'inline-block';
});

// Back button: return to single panel view
backBtn.addEventListener('click', () => {
    carousel.classList.remove('full-view');
    showPanel(current);
    backBtn.style.display = 'none';
    toggleBtn.style.display = 'inline-block';
});
