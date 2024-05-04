const mysql = require('mysql2');
const dotenv = require("dotenv");
dotenv.config();

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
}).promise();

async function getAllUser() {
  try {
    const [users] = await pool.query(`
      SELECT id, email 
      FROM user
    `);
    return users;
  } catch (error) {
    console.error(error);
  }
}

async function getOneUser(email) {
  try {
    const [user] = await pool.query(`
      SELECT id, email 
      FROM user
      WHERE email = ?
    `, [email]);
    return user;
  } catch (error) {
    console.error(error);
  }
}

async function signUp(email, password) {
  try {
    const [user] = await pool.query(`
      INSERT INTO user (email, password)
      VALUE (?, ?)
    `, [email, password]);
    return user;
  } catch (error) {
    console.error(error);
  }
}

async function login(email, password) {
  try {
    const [loginUser] = await pool.query(`
      SELECT id, email
      FROM user
      WHERE email = ? AND 
      password = ?
    `, [email, password]);
    if (loginUser.length != 0) {
      return getOneUser(email);
    }
    return [];
  } catch (error) {
    console.error(error);
  }
}

module.exports = { getAllUser, getOneUser, signUp, login };



// ============================測試用============================
async function main() {
  const users = await getAllUser();
  console.log(users)

  const user = await getOneUser("test@yahoo.com");
  console.log(user)

  const newUser = await signUp("112qweqwe32341@gmail.com", "122789");
  console.log(newUser)

  const loginUser = await login("112qweqwe32341@gmail.com", "122789");
  console.log(loginUser)
}

// main();

