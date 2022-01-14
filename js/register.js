import { saveData, searchData } from "./firestore.js"

const registerForm = document.getElementById("register");

registerForm.addEventListener("submit", async e => {
    e.preventDefault();
    if (registerForm["username2"].value != "" && registerForm["email2"].value != "" && registerForm["password2"].value != "" && registerForm["cpassword2"].value != "") {
        if (registerForm["password2"].value == registerForm["cpassword2"].value) {
            const username = registerForm["username2"];
            const email = registerForm["email2"];
            const password = registerForm["password2"];
            const account = await searchData(registerForm["username2"].value);
            if (account.size == 0) {
                saveData(username.value, email.value, password.value);
                registerForm.reset();
                alert("Register success.");
            } else
                alert('Woops! Username Already Exists.');
        } else
            alert('Password Not Matched.');
    } else
        alert('Missing Input.');

})