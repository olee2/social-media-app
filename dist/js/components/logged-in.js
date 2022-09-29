import { getUser } from "./storage.js";

// Function for verifying if there is a accesstoken stored in local storage and returning it
// If not, the user is redirected to login

export const loggedIn = () => {
  try {
    return getUser().accessToken;
  } catch (error) {
    location.assign("../login.html");
  }
};
