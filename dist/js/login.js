import { postData } from "./components/post-data.js";

const form = document.querySelector("form");
const email = document.querySelector(".email");
const password = document.querySelector(".password");

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
    const response = await postData(
      "https://nf-api.onrender.com/api/v1/social/auth/login",
      options
    );
    localStorage.setItem("token", response.accessToken);
    location.assign("../profile.html");
  } catch (error) {}
};
