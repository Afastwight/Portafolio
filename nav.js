(function(){
  const toggle = document.querySelector('.nav-toggle');
  const mobilePanel = document.getElementById('mobile-panel');
  const mainNav = document.getElementById('main-nav');

  if (!toggle || !mobilePanel) return;

  function setOpen(isOpen) {
    if (isOpen) {
      mobilePanel.classList.add('show');
      mobilePanel.setAttribute('aria-hidden','false');
      toggle.setAttribute('aria-expanded','true');
    } else {
      mobilePanel.classList.remove('show');
      mobilePanel.setAttribute('aria-hidden','true');
      toggle.setAttribute('aria-expanded','false');
    }
  }

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    setOpen(!mobilePanel.classList.contains('show'));
  });

  // Cerrar cuando se hace click en un enlace del panel
  mobilePanel.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') setOpen(false);
  });

  // Cerrar al hacer click fuera
  document.addEventListener('click', (e) => {
    if (!mobilePanel.classList.contains('show')) return;
    if (!mobilePanel.contains(e.target) && !toggle.contains(e.target)) setOpen(false);
  });

  // Cerrar al presionar Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setOpen(false);
  });
})();

