const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active'); 
    hamburger.classList.toggle('active'); 
});

let currentReview = 0;
const reviews = document.querySelectorAll(".review-card");

function showNextReview() {
    reviews.forEach((review, index) => {
        review.style.transform = `rotateY(${(index - currentReview) * 180}deg)`;
    });

    currentReview = (currentReview + 1) % reviews.length;
}

setInterval(showNextReview, 3000);

function toggleMenu() {
    document.querySelector(".nav").classList.toggle("active");
}
