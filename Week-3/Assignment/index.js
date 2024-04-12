const express = require('express');
const home = require("./routers/home");
const data = require("./routers/data");
const app = express();
const port = 3000;

app.use("/", home);

app.use("/data", data);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})