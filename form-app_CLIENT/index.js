"use-strict";

const form = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginResultDiv = document.getElementById("loginResult");
let logCount = 3;

form.addEventListener("submit", sendLogin);

function sendLogin(e) {
  e.preventDefault();
  fetch("http://localhost:4000/loginWithFetch", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: emailInput.value,
      password: passwordInput.value,
    }),
  }).then((res) => {
    console.log(res);
    if (res.status === 200) {
      loginResultDiv.innerHTML =
        '<span class="logMessage" style="color: green">Login Successful!</span>';
      setTimeout(() => {
        window.location.href =
          "http://127.0.0.1:5500/form-app_CLIENT/loggedin.html";
      }, 1000);
    } else if (res.status === 404) {
      loginResultDiv.innerHTML =
        '<span class="logMessage"  style="color: red">That email or password was BS. Try again...</span>';
      logCount = logCount - 1;
      if (logCount < 1) {
        setTimeout(() => {
          window.location.href =
            "http://127.0.0.1:5500/form-app_CLIENT/fail.html";
        }, 1000);
      }
    }
  });
}
