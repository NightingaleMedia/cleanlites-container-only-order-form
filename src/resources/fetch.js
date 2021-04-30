const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const api_url = `https://cleanlites.com/wp-json/gf/v2/forms/${process.env.REACT_APP_FORM_NUMBER}`;
// const api_url = "https://cleanlites.dev.local/wp-json/gf/v2/forms/11/submissions"
export const getForm = async () => {
  return await fetch(api_url, {
    headers: {
      authorization: `Basic ${btoa(username + ":" + password).toString(
        "base64"
      )}`,
    },
  }).then((result) => result.json());
};

export const submitForm = async (data) => {
  console.log("submitting...");
  return await fetch(api_url + "/submissions", {
    method: "POST",

    headers: {
      authorization: `Basic ${btoa(username + ":" + password).toString(
        "base64"
      )}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
