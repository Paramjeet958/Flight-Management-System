document.addEventListener('DOMContentLoaded', () => {
    const ratings = document.querySelectorAll('.rating');
    const ratingsContainer = document.querySelector('.ratings-container');
    const sendBtn = document.querySelector('#send');
    const feedback = document.querySelector('#feedback');
    let selectedRating = 'Happy'; // Default active rating

    ratingsContainer.addEventListener('click', (e) => {
        const clickedRating = e.target.closest('.rating');
        if (clickedRating) {
            removeActive();
            clickedRating.classList.add('active');
            selectedRating = clickedRating.querySelector('small').innerText;
        }
    });

    sendBtn.addEventListener('click', () => {
        feedback.innerHTML = `
            <i class="fas fa-heart"></i>
            <strong>Thank You!</strong>
            <br>
            <strong>Feedback: ${selectedRating}</strong>
            <p> This comment to feedback form will help us to make customer service better. </p>`;
    });

    function removeActive() {
        ratings.forEach((rating) => rating.classList.remove('active'));
    }
});
