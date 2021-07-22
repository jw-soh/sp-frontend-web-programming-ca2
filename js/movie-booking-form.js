window.onload = () => {
  const movieBookingButton = document.querySelector(' .navbar-buttons > .btn ');

  movieBookingButton.addEventListener('click', () => {
    const movieBookingForm = document.querySelector(' .movie-booking-form ');

    movieBookingForm.classList.toggle('disappear');
  })
};