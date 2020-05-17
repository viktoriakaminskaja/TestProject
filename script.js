// надожим все не активные ссылки
const notLinks = document.querySelectorAll(".links__nav");
// отменяем переход по ним
notLinks.forEach((link) => {
  link.addEventListener("click", (event) => event.preventDefault());
});
// всплытие модального окна регистрации
const login = document.querySelector(".nav__btn");
const modal = document.querySelector(".nav__modal");
const form = document.querySelector(".form");
const closeModalBtn = document.querySelector(".close__btn");
//  отмена отправки формы
form.addEventListener("submit", (event) => event.preventDefault());
// показываем окно регистрации
login.addEventListener("click", () => {
  modal.classList.toggle("nav__modal-show");
});
// закрытие модального окна по крестику
closeModalBtn.addEventListener("click", () => {
  modal.classList.toggle("nav__modal-show");
});
