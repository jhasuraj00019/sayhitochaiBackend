const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8008;
// const host = "localhost";
const host = `0.0.0.0`;

const cloudUrl =
  "mongodb+srv://second:mongo321@cluster0.khewj.mongodb.net/Chai?retryWrites=true&w=majority";

const routes = require("./Routes/index");

app.use(cors());
app.use(express.json());
app.use("/api", routes);

mongoose
  .connect(cloudUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(port, host, () => {
      console.log(`server is running on port ${port}`);
    });
  })
  .catch();
