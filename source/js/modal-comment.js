var link = document.querySelector(".comment__button");
var popup_error = document.querySelector(".modal-comment--error");
var popup_sent = document.querySelector(".modal-comment--sent");
var close_error = popup_error.querySelector(".modal-comment__button");
var close_sent = popup_sent.querySelector(".modal-comment__button");
var form = document.querySelector("form");
var user_name = form.querySelector("[name=user-name]");
var surname = form.querySelector("[name=surname]");
var email = form.querySelector("[name=email]");
var phone = form.querySelector("[name=phone]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (!user_name.value  || !surname.value  || !phone.value || !email.value ) {
    evt.preventDefault();
    popup_error.classList.add("modal-show");
    popup_error.offsetWidth = popup_error.offsetWidth;
    popup = popup_error;
  } else {
    popup_sent.classList.add("modal-show");
    popup_sent.offsetWidth = popup_sent.offsetWidth;
    popup = popup_sent;
  }
})

close_error.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup_error.classList.remove("modal-show");
});

close_sent.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup_sent.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
});
