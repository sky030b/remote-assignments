const { getOneUser, signUp } = require('../database');

const signUp2 = async (req, res) => {
  const { email, password } = req.body;
  const checkExist = await getOneUser(email);

  if (checkExist.length === 0) {
    const newUser = await signUp(email, password);
    res.cookie("email", email);
    res.cookie("action", "註冊");
    return res.redirect("/member");
  }

  return res.redirect('/?error=註冊失敗。此信箱已有註冊紀錄。');
  // return res.status(401).send("註冊失敗。此信箱已有註冊紀錄，請返回上一頁再試一次。");
}

module.exports = signUp2;