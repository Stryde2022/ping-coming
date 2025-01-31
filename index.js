const email = document.getElementsByName("email")[0];
const form = document.querySelector("form");
const warningText = document.querySelector(".warning");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", function validateInput(e)  {
    if (!emailPattern.test(email.value)) {
        e.preventDefault();
        warningText.classList.remove("hide");
    }
});

