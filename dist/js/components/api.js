//Function for making a call to the api

export const apiCall = async (url, options) => {
  const response = await fetch(url, options);
  if (response.ok) {
    return response.json();
  }

  const errorObject = await response.json();
  localStorage.setItem("error", JSON.stringify(errorObject));

  throw new Error(`${response.status} ${response.statusText}`);
};
