const emailSubmitBtn = document.querySelector(".icon-arrow");
const errorIcon = document.querySelector(".icon-error");
const errorMessage = document.querySelector(".email-not-valid-msg");
const emailBar = document.querySelector(".email-bar");
const inputField = document.querySelector("input");

const checkEmailValidity = function(e) {
  const email = inputField.value; 
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};


const showEmailNotValidError = function() {
  errorMessage.style.display = "block";
  errorIcon.style.display = "block";
  emailBar.style.border = "2px solid var(--clr-primary1)";
};

const removeEmailNotValidError = function() {
  errorMessage.style.display = "none";
  errorIcon.style.display = "none";
  emailBar.style.border = "1px solid var(--clr-primary0)";
};

emailSubmitBtn.addEventListener("click", (e) => {
  if (e.target != e.currentTarget) e.target = e.currentTarget;

  const emailValid = checkEmailValidity(e);
  console.log(emailValid);
  (!emailValid) ? showEmailNotValidError() : removeEmailNotValidError();
});
