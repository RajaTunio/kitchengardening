document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('hamburgerBtn');
  const drawer = document.getElementById('menuDrawer');
  const closeBtn = document.getElementById('menuCloseBtn');

  const openMenu = () => {
    drawer.classList.add('open');
    btn.classList.add('open'); // make lines become "X"
    document.body.classList.add('menu-open');
  };

  const closeMenu = () => {
    drawer.classList.remove('open');
    btn.classList.remove('open'); // revert lines to hamburger
    document.body.classList.remove('menu-open');
  };

  btn.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('open');
    if (isOpen) closeMenu();
    else openMenu();
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeMenu);
  }

  // Close when clicking outside the drawer
  drawer.addEventListener('click', (e) => {
    if (e.target === drawer) closeMenu();
  });

  // Optional: close menu when a nav link is clicked
  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
});
