let feedbackLink = document.querySelector(".contacts-button");
let popup = document.querySelector(".modal-form");
let closeButton = popup.querySelector(".modal-close");
let firstName = popup.querySelector("[name=first-name]")

feedbackLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	firstName.focus();
})

closeButton.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
})

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		popup.classList.remove("modal-show");
	}
})