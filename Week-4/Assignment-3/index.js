const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;

// const path = require('path');
// app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

const homePage = require("./routers/homePage");
const memberPage = require("./routers/memberPage");
const signUp2 = require("./routers/signUp2");
const login2 = require("./routers/login2");

app.use('/', homePage);
app.use("/signup", signUp2);
app.use("/login", login2);
app.use("/member", memberPage);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})