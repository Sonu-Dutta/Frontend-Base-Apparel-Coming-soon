const sendBtn = document.querySelector(".btn");
const errorMsg = document.querySelector(".error-msg");
const errorIcon = document.querySelector(".error-icon");

const inputField = document.querySelector(".input-field");

const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const timeoutFunc = setInterval(() => {
  errorMsg.style.display = "none";
  errorIcon.style.display = "none";
}, 5000);

sendBtn.addEventListener("click", function () {
  if (inputField.value.length === 0 || !inputField.value.match(emailValidation)) {
    errorMsg.style.display = "inline";
    errorIcon.style.display = "inline";
    errorMsg.style.position="relative";
    errorMsg.style.top="2rem";
    errorMsg.style.left="1rem";
    errorMsg.style.color="#f96262"
    errorMsg.textContent = "Please provide a valid email address";
    return timeoutFunc;
  } else {
    errorMsg.style.display = "inline";
    errorMsg.style.color = "green";
    errorMsg.style.position="relative";
    errorMsg.style.top="2rem";
    errorMsg.style.left="1rem";
    errorMsg.textContent = "Thank you for subscribing to our newsletter!";
    return timeoutFunc;
  }
});