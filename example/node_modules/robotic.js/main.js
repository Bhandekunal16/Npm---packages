const express = require("express");
const bodyParser = require("body-parser");
const Color = require("./interface/color");
const Logger = require("./interface/Logger");
const Node = require("./module/index");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());
const port = process.env.LOCALHOST;

const logger = new Logger();
const node = new Node();

app.get("/", async (req, res) => {
  const query = "hello world";
  res.send(query);
});

const routes = [Node, Color, Logger];
let imports = routes.map((elements) => elements.name);

app.listen(port, () => {
  logger.log("***************");
  logger.new(imports);
  logger.log(`Node app is successfully created on http://localhost: ${port}.`);
  logger.log("***************");
  node.getUserInput();
});
