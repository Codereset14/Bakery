const slides = document.querySelectorAll('.slide');
const caption = document.querySelector('.caption');
const captions = ["Fruit Salad & Pancake", "Salad", "Croissant", "Puff-Puff & Chicken", "Kebab", "Cake/Bread", "Bread", "Sausage Roll", "Cake", "Grill Chicken", "Carrot Cake", "Cinnamon Roll" ]; // Update with your captions
let currentIndex = 0;

function updateSlides() {
    slides.forEach((slide, i) => {
        slide.classList.remove('active', 'prev', 'next', 'prev2', 'next2');
        
        if (i === currentIndex) {
            slide.classList.add('active');
        } else if (i === (currentIndex - 1 + slides.length) % slides.length) {
            slide.classList.add('prev');
        } else if (i === (currentIndex + 1) % slides.length) {
            slide.classList.add('next');
        } else if (i === (currentIndex - 2 + slides.length) % slides.length) {
            slide.classList.add('prev2');
        } else if (i === (currentIndex + 2) % slides.length) {
            slide.classList.add('next2');
        }
    });

    caption.textContent = captions[currentIndex];
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlides();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlides();
}

// Initialize the slider
updateSlides();

// Automatically transition slides every 3 seconds
setInterval(nextSlide, 3000);

