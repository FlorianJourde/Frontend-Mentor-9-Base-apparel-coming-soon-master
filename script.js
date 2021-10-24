let emailField = document.getElementById("email");
let emailForm = document.getElementById("form");
let iconError = document.getElementById("icon-error");
let textError = document.createElement("p");
textError.innerHTML = "Please provide a valid email"
textError.className = "text-error"
textError.id = "text-error"
const validRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

emailField.addEventListener("keyup", function() {
  if (!emailField.value.match(validRegex)) {
    insertAfter(textError, emailForm);
    iconError.style.display = "block";
    emailField.style.marginRight = -80 + "px";
    emailField.classList.add('outline-error');
  } else {
    textError.remove();
    iconError.style.display = "none";
    emailField.style.marginRight = 0 + "px";
    emailField.classList.remove('outline-error');
  }
});

function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
