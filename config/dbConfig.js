import mysql from "mysql2/promise";

// Database connection configuration
export async function createConn(host, user, password, database) {
  const connectionConfig = {
    host,
    user,
    password,
    database,
  };
  const conn = await mysql.createConnection(connectionConfig);
  return conn;
}

export const conn = await createConn("localhost", "root", "root", "school_db");