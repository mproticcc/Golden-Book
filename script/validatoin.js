const errorMessages = document.getElementsByClassName("errorMessage"); // document.querySelectorAll(".errorMessage")

for (let message of errorMessages) {
    message.classList.add("display-none");
}

document.getElementById("applyCourseForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let isFormValid = true;

    const email = document.getElementById("email");
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const isEmailValid = regexEmail.test(email.value);

    toggleErrorMessage(!isEmailValid, email);

    if (!isEmailValid) {
        isFormValid = false;
    }

    const password = document.getElementById("password");
    const regexPass = /([A-Za-z]){8,}\w+/;

    const isPasslValid = regexPass.test(password.value);

    toggleErrorMessage(!isPasslValid, password);

    if (!isPasslValid) {
        isFormValid = false;
    }

    if (isFormValid) {
        event.target.submit();
    }
});

function toggleErrorMessage(isFieldNotValid, formElement) {
    if (isFieldNotValid) {
        formElement.parentElement.querySelector(".errorMessage").classList.remove("display-none");
    } else {
        formElement.parentElement.querySelector(".errorMessage").classList.add("display-none");
    }
}

