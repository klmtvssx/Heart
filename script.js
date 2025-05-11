const heart = document.querySelector('.heart');

heart.addEventListener('click', () => {
  heart.classList.add('beat');

  setTimeout(() => {
    heart.classList.remove('beat');
  }, 1000);
});
