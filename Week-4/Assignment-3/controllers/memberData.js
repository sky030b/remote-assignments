const loadMemberData = (req, res) => {
  const { email, action } = req.cookies;
  if (email && action) {
    return res.status(200).send(`${action}成功。會員信箱：${email}`);
  }
  return res.redirect("/");
  // return res.status(401).send(`請先前往<a href="/login.html">登入頁</a>登入`);
}

module.exports = loadMemberData;