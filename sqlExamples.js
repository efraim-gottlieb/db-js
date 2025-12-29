import DB from "./utils/dbManager.js";

// create db
DB.createDatabase('school_db')

// create table
const columns =  [
  DB.createColumn("id", "INT AUTO_INCREMENT PRIMARY KEY"),
  DB.createColumn("name", "varchar(20) not null"),
  DB.createColumn("age", " int not null"),
  DB.createColumn("className", "varchar(20) not null")
]
DB.createTable("students", columns)



// insert into
// const tableName = "users"
// const columns =  ['name', 'id']
// const values = [['efraim', 1], ['sari', 2]]
// DB.insertInto(tableName, columns, values)

// drop table
// DB.dropTable('students')

// select
// let conditions = "";
// const data = await DB.select("users", conditions);
// console.log(data);

// delete
// let conditions = "id = 2";
// await DB.del("users", conditions);
