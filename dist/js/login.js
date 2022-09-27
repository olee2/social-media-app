import { apiCall } from "./components/api.js";
import { storeUser } from "./components/storage.js";

const form = document.querySelector("form");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const errorContainer = document.querySelector(".error");

form.onsubmit = async (e) => {
  e.preventDefault();

  const options = {
    method: "POST",
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  };

  try {
    const response = await apiCall(
      "https://nf-api.onrender.com/api/v1/social/auth/login",
      options
    );

    storeUser(response);
    location.assign("../profile.html");
  } catch (error) {
    const errorMessage = JSON.parse(localStorage.getItem("error")).message;
    errorContainer.innerText = errorMessage;
    localStorage.removeItem("error");
  }
};
