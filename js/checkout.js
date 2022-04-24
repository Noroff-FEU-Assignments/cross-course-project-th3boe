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

  if (valueLength(firstName.value, 0) === true) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
  }

  if (valueLength(surName.value, 15) === true) {
    surNameError.style.display = "none";
  } else {
    surNameError.style.display = "block";
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
    valueLength(subject.value, 3) &&
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
