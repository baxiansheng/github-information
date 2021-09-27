const request = require("request");

module.exports.get = function (url, token = "") {
  request(
    {
      url: url,
      headers: {
        Authorization: `token ${token}`,
      },
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      } else {
        console.log(error);
      }
    }
  );
};

module.exports.post = function (url, token = "", requestBody) {
  request(
    {
      url: url,
      method: "POST",
      json: true,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(requestBody),
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      } else {
        console.log(error);
      }
    }
  );
};
