const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Allowed public folder
app.use("/uploaded", express.static("uploaded"));

// Routes
app.use("/api", require("./product_services"));

app.listen(8085, () => {
  console.log("Backend is running..");
});
