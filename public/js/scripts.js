/*!
* Start Bootstrap - Clean Blog v6.0.9 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function() {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if (currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
               
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });

    // Function to toggle return date field visibility
    function toggleReturnDate() {
        const returnDateField = document.getElementById('returnDateField');
        const oneWayRadio = document.querySelector('input[name="tripType"][value="oneway"]');
        returnDateField.style.display = oneWayRadio.checked ? 'none' : 'block';
    }

    // Call toggleReturnDate function when DOM content is loaded
    toggleReturnDate();

    // Event listener to toggle return date field visibility when trip type changes
    document.querySelectorAll('input[name="tripType"]').forEach(radio => {
        radio.addEventListener('change', toggleReturnDate);
    });

    // Counter update function
    let experienceCounter = document.getElementById("experienceCounter");
    let teamMembersCounter = document.getElementById("teamMembersCounter");
    let clientsCounter = document.getElementById("clientsCounter");
    let packagesCounter = document.getElementById("packagesCounter");

    let experienceCount = 28;
    let teamMembersCount = 600;
    let clientsCount = 800;
    let packagesCount = 999;

    function updateCounters() {
        experienceCounter.textContent = experienceCount++ + "+";
        teamMembersCounter.textContent = teamMembersCount++ + "+";
        clientsCounter.textContent = clientsCount++ + "+";
        packagesCounter.textContent = packagesCount++ + "+";
    }

    setInterval(updateCounters, 10); // Update counters every second
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            } else {
                entry.target.classList.remove('animate');
            }
        });
    });

    const centeredHeaders = document.querySelectorAll('.centered-header');
    centeredHeaders.forEach(header => observer.observe(header));
});