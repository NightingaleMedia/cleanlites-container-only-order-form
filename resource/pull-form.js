const fetch = require("node-fetch");
const fs = require("fs");
require("dotenv").config();
console.log(process.env);
const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const api_url = "https://cleanlites.com/wp-json/gf/v2/forms/14";
// const api_url = "https://cleanlites.dev.local/wp-json/gf/v2/forms/11/submissions"
const getForm = async () => {
  return await fetch(api_url, {
    headers: {
      authorization: `Basic ${Buffer.from(username + ":" + password).toString(
        "base64"
      )}`,
    },
  });
};

getForm()
  .then((res) => res.buffer())
  .then((result) => {
    const path = `./src/resources/form.json`;
    fs.writeFile(path, result, (err) => {
      if (err) console.log(err);
    });
  });
