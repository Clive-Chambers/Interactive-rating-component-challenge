const mainContainer = document.querySelector('.Main-container');
const thanksContainer = document.querySelector('.thank-you');
const submitBtn = document.getElementById('submit');
const ratingBtn = document.getElementById('rate');
const rating = document.getElementById('rating');
const rates = document.querySelectorAll('.btn');

submitBtn.addEventListener('click', () => {
    thanksContainer.classList.remove('hidden');
    mainContainer.style.display = 'none';
})

ratingBtn.addEventListener('click', () => {
    thanksContainer.classList.add('hidden');
    mainContainer.style.display = 'block';
})

rates.forEach((rate) => {
    rate.addEventListener('click', () => {
        rating.innerHTML = rate.innerHTML;
    })
})

