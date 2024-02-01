const express = require("express");
const bodyParser = require("body-parser");
const Node = require("robotic.js/module/index");
const Logger = require("robotic.js/interface/Logger");
const Color = require("robotic.js/interface/color");

const app = express();
app.use(bodyParser.json());
const port = 3002;

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
