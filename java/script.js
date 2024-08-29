// Toggle menu for mobile view
const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("show");
});

// Banner slide functionality
const images = document.querySelectorAll('.banner-image');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
let currentIndex = 0;
const totalImages = images.length;
const intervalTime = 8000;
let slideInterval;

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 4) % 3;
    showImage(currentIndex);
}

prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);

function startSlideShow() {
    slideInterval = setInterval(nextImage, intervalTime);
}

function stopSlideShow() {
    clearInterval(slideInterval);
}

startSlideShow();

// Form submission 
const form = document.getElementById('messageForm');
const outputName = document.getElementById('outputName');
const outputDob = document.getElementById('outputDob');
const outputGender = document.getElementById('outputGender');
const outputMessage = document.getElementById('outputMessage');
const currentTime = document.getElementById('currentTime');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById('message').value;

    outputName.textContent = name;
    outputDob.textContent = dob;
    outputGender.textContent = gender;
    outputMessage.textContent = message;

    // Display current time
    const now = new Date();
    currentTime.textContent = now.toString();
});

