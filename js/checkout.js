const form = document.querySelector("#form-checkout");
const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");
const cardNumber = document.querySelector("#cardNumber");
const cardNumberError = document.querySelector("#cardNumberError");
const expirationDate = document.querySelector("#expirationDate");
const expirationDateError = document.querySelector("#expirationDateError");
const cvv = document.querySelector("#cvv");
const cvvError = document.querySelector("#cvvError");

const message = document.querySelector("#successMessage");

function verifyForm(event) {
  event.preventDefault();

  if (valueLength(fullName.value, 0)) {
    fullNameError.style.display = "none";
  } else {
    fullNameError.style.display = "block";
  }

  if (valueLength(cardNumber.value, 15)) {
    cardNumberError.style.display = "none";
  } else {
    cardNumberError.style.display = "block";
  }

  if (valueLength(expirationDate.value, 3) === true) {
    expirationDateError.style.display = "none";
  } else {
    expirationDateError.style.display = "block";
  }

  if (valueLength(cvv.value, 2) === true) {
    cvvError.style.display = "none";
  } else {
    cvvError.style.display = "block";
  }

  if (
    valueLength(fullName.value, 0) &&
    valueLength(cardNumber.value, 15) &&
    valueLength(cvv.value, 2)
  ) {
    message.style.display = "block";

    form.reset();
  } else {
    message.style.display = "none";
  }
}

form.addEventListener("submit", verifyForm);

function valueLength(value, span) {
  if (value.trim().length > span) {
    return true;
  } else {
    return false;
  }
}
