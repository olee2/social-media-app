// Function for storing the users information (name, token etc.) in local storage
export const storeUser = (user) => {
  localStorage.setItem("credentials", JSON.stringify(user));
};

// Function for retrieving the users information (name, token etc.) from local storage
export const getUser = () => {
  return JSON.parse(localStorage.getItem("credentials"));
};
