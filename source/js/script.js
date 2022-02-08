const headerMenuBtn = document.querySelector(".header-menu__btn");

headerMenuBtn.addEventListener("click", ( ) => {
  const parent = headerMenuBtn.parentNode;
  parent.classList.toggle("header-menu_open")
})