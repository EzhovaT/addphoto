const headerMenuBtn = document.querySelector(".header-menu__btn");
const description = document.querySelector(".description");


headerMenuBtn.addEventListener("click", ( ) => {
  const parent = headerMenuBtn.parentNode;
  parent.classList.toggle("header-menu_open")
})

document.querySelectorAll(".accordion__button").forEach((button) => {
  button.addEventListener("click", () => {
    const accordion = button.parentNode;
    const accordionContent = accordion.querySelector(".accordion__content");
    button.classList.toggle("description__btn_open");
    console.log(accordionContent)

    if (button.classList.contains("description__btn_open")) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    } else {
      accordionContent.style.maxHeight = 0;
    }
  });
});