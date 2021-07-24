window.onload = () => {
  const movieBookingForm = document.querySelector(' .movie-booking-form ');
  const movieBookingButton = document.querySelector(' .navbar-buttons > .btn ');

  movieBookingButton.addEventListener('click', () => {
    movieBookingForm.classList.toggle('disappear');
  })
};