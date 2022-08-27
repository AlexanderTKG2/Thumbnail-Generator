const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const env = require("./config/env");
const thumbnailRouter = require("./routes/Thumbnails");

app.disable("x-powered-by");
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/thumbnails", thumbnailRouter);

const _PORT = env.api.port || 2001;

app.listen(_PORT, env.api.host, () => {
  console.log(
    `Server running on port ${env.api.protocol}://${env.api.host}:${_PORT}`
  );
});
