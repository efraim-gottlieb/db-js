import { conn } from "./config/db.js";

export const createColumn = (name, type = "VARCHAR(50)") => {
  return { name, type };
};

export async function createTable(conn, tableName, columns) {
  const cols = columns
    .map((col) => `${col.name} ${col.type.toUpperCase()}`)
    .join(", ");
  const query = `CREATE TABLE IF NOT EXISTS ${tableName} (${cols});`;
  await conn.query(query);
  await conn.end();
}

createTable(conn, "users", [
  createColumn("name"),
  createColumn("age"),
  createColumn("address"),
  createColumn("id", "int"),
]);
