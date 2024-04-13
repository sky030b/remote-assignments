const express = require('express');
const cookieParser = require('cookie-parser');
// const bodyParser = require('body-parser'); // post 版本
const home = require("./routers/home");
const data = require("./routers/data");
const showName = require("./routers/showName");
const trackName = require("./routers/trackName");
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieParser());
// post 版本
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.use("/", home);
app.use("/data", data);
app.use("/myName", showName);
app.use("/trackName", trackName);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})