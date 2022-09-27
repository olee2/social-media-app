import { apiCall } from "./components/api.js";

const form = document.querySelector("form");
const user = document.querySelector(".user-name");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const errorContainer = document.querySelector(".error");

form.onsubmit = async (e) => {
  e.preventDefault();

  const options = {
    method: "POST",
    body: JSON.stringify({
      name: user.value,
      email: email.value,
      password: password.value,
    }),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  };

  try {
    return await apiCall(
      "https://nf-api.onrender.com/api/v1/social/auth/register",
      options
    );
  } catch (error) {
    const errorMessage = JSON.parse(localStorage("error")).message;
    errorContainer.innerText = errorMessage;
    localStorage.removeItem("error");
  }
};
