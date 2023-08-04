(() => {
  window.addEventListener('scroll', function () {
    var button = document.getElementById('back-to-up');
    if (button) {
      button.style.visibility =
        window.scrollY > window.innerHeight ? 'visible' : 'hidden';
    }
  });

  document.querySelector('#back-to-up').addEventListener('click', scrollToTop);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
})();