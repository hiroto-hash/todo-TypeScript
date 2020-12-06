import mysql from 'mysql';

// DB定義
const dbConf = {
  host: 'mysql',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'dc-todo',
  multipleStatements: true
}

const connection = mysql.createConnection(dbConf);

connection.connect((err)=>{
  if(err) {
    console.log('connectting error' + err.stack);
    return;
  }
  console.log('connectting');
})

export const sql = connection;