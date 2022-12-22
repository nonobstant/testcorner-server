const Express = require("express")();
const Http = require("http").Server(Express);

const request = require('request');
const baseUrl = 'https://soccer.sportmonks.com/api/v2.0';
const apiToken = 'your-api-token';

const livescoreUrl = ${baseUrl}/livescores?api_token=${apiToken};

request.get(livescoreUrl, (error, response, body) => {
if (error) {
console.log(error);
return;
}

const livescores = JSON.parse(body).data;
livescores.forEach(livescore => {
console.log(livescore);
});
});

Http.listen(process.env.PORT || 3000, () => {
  console.log("Listening...");
});
