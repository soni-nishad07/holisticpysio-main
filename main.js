
// document.addEventListener('DOMContentLoaded', function() {
//     // Get the booking form and buttons
//     const bookingForm = document.getElementById('bookingForm');
//     const bookNowButtons = document.querySelectorAll('.bookNowBtn');
    
//     // Get the "Learn More" button and modal elements
//     const learnMoreButton = document.getElementById('learn-more');
//     const modal = document.getElementById('modal');
//     const closeModalButton = modal ? modal.querySelector('.close') : null;
    
//     // Get the close button inside the form
//     const formCloseButton = document.querySelector('.form-close');

//     // Show the form when any "Book Now" button is clicked
//     if (bookNowButtons.length > 0 && bookingForm) {
//         bookNowButtons.forEach(button => {
//             button.addEventListener('click', function(event) {
//                 bookingForm.style.display = 'block';
//             });
//         });
//     }

//     // Hide the form when clicking outside of it
//     if (bookingForm) {
//         window.addEventListener('click', function(event) {
//             if (!bookingForm.contains(event.target) && !event.target.classList.contains('bookNowBtn')) {
//                 bookingForm.style.display = 'none';
//             }
//         });
//     }

//     // Optional: Hide form after submission
//     if (bookingForm) {
//         const form = bookingForm.querySelector('form');
//         form.addEventListener('submit', function(event) {
//             event.preventDefault();
//             bookingForm.style.display = 'none';
//         });
//     }

//     // Show the modal when "Learn More" is clicked
//     if (learnMoreButton && modal) {
//         learnMoreButton.addEventListener('click', function() {
//             modal.style.display = 'block';
//         });
//     }

//     // Close the modal when the user clicks on <span> (x)
//     if (closeModalButton) {
//         closeModalButton.addEventListener('click', function() {
//             modal.style.display = 'none';
//         });
//     }

//     // Close the modal when the user clicks anywhere outside of the modal
//     if (modal) {
//         window.addEventListener('click', function(event) {
//             if (event.target === modal) {
//                 modal.style.display = 'none';
//             }
//         });
//     }

//     // Close the booking form when the close button is clicked
//     if (formCloseButton && bookingForm) {
//         formCloseButton.addEventListener('click', function() {
//             console.log('Form close button clicked');
//             bookingForm.style.display = 'none';
//         });
//     }
// });


document.addEventListener('DOMContentLoaded', function() {
    // Get the booking form and buttons
    const bookingForm = document.getElementById('bookingForm');
    const bookNowButtons = document.querySelectorAll('.bookNowBtn');
    
    // Get the "Learn More" button and modal elements
    const learnMoreButton = document.getElementById('learn-more');
    const modal = document.getElementById('modal');
    const closeModalButton = modal ? modal.querySelector('.close') : null;
    
    // Get the close button inside the form
    const formCloseButton = document.querySelector('.form-close');

    // Show the form when any "Book Now" button is clicked
    if (bookNowButtons.length > 0 && bookingForm) {
        bookNowButtons.forEach(button => {
            button.addEventListener('click', function(event) {
                bookingForm.style.display = 'block';
            });
        });
    }

    // Hide the form when clicking outside of it
    if (bookingForm) {
        window.addEventListener('click', function(event) {
            if (!bookingForm.contains(event.target) && !event.target.classList.contains('bookNowBtn')) {
                bookingForm.style.display = 'none';
            }
        });
    }

    // Optional: Hide form after submission
    if (bookingForm) {
        const form = bookingForm.querySelector('form');
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            bookingForm.style.display = 'none';
        });
    }

    // Show the modal when "Learn More" is clicked
    if (learnMoreButton && modal) {
        learnMoreButton.addEventListener('click', function() {
            modal.style.display = 'block';
        });
    }

    // Close the modal when the user clicks on <span> (x)
    if (closeModalButton) {
        closeModalButton.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }

    // Close the modal when the user clicks anywhere outside of the modal
    if (modal) {
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    // Close the booking form when the close button is clicked
    if (formCloseButton && bookingForm) {
        formCloseButton.addEventListener('click', function() {
            console.log('Form close button clicked');
            bookingForm.style.display = 'none';
        });
    }

    // Carousel functionality for reviews
    let currentIndex = 0;
    const slides = document.querySelectorAll('.rept');
    const totalSlides = slides.length;
    const indicators = document.querySelectorAll('.indicator');

    function showSlide(index) {
        const container = document.querySelector('.recontainer');
        const offset = -index * 426; // Slide width (adjust according to your layout)
        container.style.transform = `translateX(${offset}px)`;

        // Update indicators
        indicators.forEach((indicator, i) => {
            if (i === index) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    function currentSlide(index) {
        currentIndex = index - 1;
        showSlide(currentIndex);
    }

    // Initialize the first slide
    showSlide(0);

    // Add event listeners to indicators for navigation
    if (indicators.length > 0) {
        indicators.forEach((indicator, i) => {
            indicator.addEventListener('click', function() {
                currentSlide(i + 1);
            });
        });
    }
});
