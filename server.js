//GLOBAL VARIABLES
const express = require("express");
const bodyParser = require("body-parser");
const expressSanitized = require("express-sanitize-escape");
const cors = require("cors");
const path = require('path');
const app = express();
const port = 3000;
const directory = path.join(__dirname, 'data/data.json');
module.exports.directory = directory;

//CONTROLLERS
const getAllDataController = require("./controller/getAllData.controller");
const postDataController = require("./controller/postData.controller");

//CREATE SERVER && HANDLE CONTROLLERS
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

//SANITIZE
app.use(expressSanitized.middleware());
expressSanitized.sanitizeParams(app, ["id"]);

//ROUTES
app.get("/buildings", getAllDataController);
app.post("/", postDataController);

//START
app.listen(port || process.env.PORT, () =>
  console.log(`App is running on ${port}`)
);
