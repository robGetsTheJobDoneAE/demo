const express = require("express");
const app = express();
const port = 3000;
const _ = require("lodash");

app.get("/", (req, res) => res.send("Hello World!!!!"));
console.log("hi");

app.listen(port, () =>
  console.log(`${_.flatten(["ddd"])}Example app listening on port ${port}!`)
);
