function toggleList(x) {
  x.classList.toggle('menu-close-icon');
  document.getElementById('hamburger-menu').classList.toggle('open');
  document.getElementById('menu-btn-insert').innerHTML = " <img src="/images/xmark-solid.svg;"> ";
}

 