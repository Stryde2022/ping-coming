const email = document.getElementsByName("email")[0];
const form = document.querySelector("form");
const warningText = document.querySelector(".warning");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", function(e)  {
    if (!emailPattern.test(email.value)) {
        e.preventDefault();
        warningText.classList.remove("hide");
    }
});

email.addEventListener("input", function() {
    console.log("error states are removed");
    warningText.classList.add("hide");
});