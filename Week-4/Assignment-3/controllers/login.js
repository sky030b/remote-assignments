const { login } = require('../database');

const login2 = async (req, res) => {
  const { email, password } = req.body;
  const loginCheck = await login(email, password);

  if (loginCheck.length !== 0) {
    res.cookie("email", email);
    res.cookie("action", "登入");
    return res.redirect("/member");
  }

  return res.redirect('/?error=登入失敗。信箱或密碼輸入錯誤。');
  // return res.status(401).send("登入失敗。信箱或密碼輸入錯誤，請返回上一頁再試一次。");
}

module.exports = login2;