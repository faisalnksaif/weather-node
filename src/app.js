const express = require("express");
const app = express();

app.get("", (req, res) => {
  res.send("<h1>Hello Express.js</h1>");
});

app.get("/help", (req, res) => {
  res.send("Help page");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

app.get("/weather", (req, res) => {
  res.send("Weather page");
});

app.listen(3000, () => {
  console.log("Server running");
});
