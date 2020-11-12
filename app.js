var express = require("express");
var cors = require("cors");
var app = express();

app.use(cors());
app.use(express.json());

const apiRouter = require("./routes/apiRouter");
const { handleCustomErrors, handle404s } = require("./errors/errors.js");

app.use("/api", apiRouter);
app.use("/*", handle404s);
app.use(handleCustomErrors);

module.exports = app;
