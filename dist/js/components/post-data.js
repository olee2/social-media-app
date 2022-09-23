// A function for posting data to the API
const errorContainer = document.querySelector(".error");

export const postData = async (url, options) => {
  const response = await fetch(url, options);
  if (response.ok) {
    return await response.json();
  }

  const errorObject = await response.json();
  errorContainer.innerHTML = errorObject.message;

  throw new Error(`${response.status} ${response.statusText}`);
};
