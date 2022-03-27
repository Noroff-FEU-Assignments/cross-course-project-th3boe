const form = document.querySelector("#form-container");
const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const surName = document.querySelector("#surName");
const surNameError = document.querySelector("#surNameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");

const message = document.querySelector("#successMessage");

function verifyForm(event) {
  event.preventDefault();

  if (valueLength(firstName.value, 0) === true) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
  }

  if (valueLength(surName.value, 2) === true) {
    surNameError.style.display = "none";
  } else {
    surNameError.style.display = "block";
  }

  if (valueLength(subject.value, 10) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (verifyEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (
    valueLength(firstName.value, 0) &&
    valueLength(surName.value, 2) &&
    valueLength(subject.value, 10) &&
    verifyEmail(email.value)
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

function verifyEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const emailMatch = regEx.test(email);
  return emailMatch;
}
