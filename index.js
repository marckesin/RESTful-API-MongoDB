require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const mountRoute = require("./routes/index");

const port = process.env.PORT || 3000;

const app = express();

app.set("x-powered-by", false);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.Promise = global.Promise;

mongoose
  .connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    return;
  })
  .catch(err => {
    throw err;
  });

mountRoute(app);

app.listen(port);

module.exports = app;
