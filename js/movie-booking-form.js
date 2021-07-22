window.onload = () => {
  const movieBookingForm = document.querySelector(' .movie-booking-form ');
  const movieBookingButton = document.querySelector(' .navbar-buttons > .btn ');

  movieBookingButton.addEventListener('click', () => {
    movieBookingForm.classList.toggle('disappear');
  })

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 922) {
      // console.log('hi');
    }
  });
};