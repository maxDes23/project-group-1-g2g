(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  // Функція для закриття мобільного меню
  const closeMenu = () => {
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  };

  // Обробник подій для кожного якірного посилання
  const anchorLinks = document.querySelectorAll('.js-menu-container a');
  anchorLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); // Запобігти стандартній поведінці посилання

      const targetSectionId = link.getAttribute('href'); // Отримати ідентифікатор секції
      const targetSection = document.querySelector(targetSectionId); // Знайти секцію

      if (targetSection) {
        closeMenu(); // Закрити мобільне меню

        // Прокрутити до якірної секції з врахуванням висоти заголовка меню (приблизно 72px)
        const offset = targetSection.getBoundingClientRect().top + window.scrollY - 72;
        window.scrollTo({ top: offset, left: 0, behavior: 'smooth' });
      }
    });
  });

  // Функція для відкриття/закриття меню
  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', closeMenu); // Використовуємо closeMenu замість toggleMenu

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    closeMenu(); // Закрити мобільне меню при зміні розміру вікна
  });
})();