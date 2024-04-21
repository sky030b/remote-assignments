import mysql from 'mysql2';

const connection = mysql.createPool({
	host: '127.0.0.1',
	user: 'root',
	password: '334658',
	database: 'assignment'
}).promise();

const result = await connection.query("SELECT * FROM user");
console.log(result[0]);
