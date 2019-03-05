
const mongoose = require("mongoose");

const dbURI =
  "mongodb://heroku_230rmhw2:qjv7hujcffpcvk2mhku2ciq32s@ds261155.mlab.com:61155/heroku_230rmhw2";
const options = {
  reconnectTries: Number.MAX_VALUE,
  poolSize: 10
};

mongoose.connect(dbURI, options).then(
  () => {
    console.log("Database connection established!");
  },
  err => {
    console.log("Error connecting Database instance due to: ", err);
  }
);

// require any models


