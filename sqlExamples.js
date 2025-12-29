import DB from "./dbManager.js";

// create table
// DB.createTable("users", [
//   DB.createColumn("name"),
//   DB.createColumn("id", "int"),
// ]);

// insert into
// const tableName = "users"
// const columns =  ['name', 'id']
// const values = [['efraim', 1], ['sari', 2]]
// DB.insertInto(tableName, columns, values)

// drop table
// DB.dropTable('users')

// select
let conditions = "";
const data = await DB.select("users", conditions);
console.log(data);

// delete
// let conditions = "id = 2";
// await DB.del("users", conditions);