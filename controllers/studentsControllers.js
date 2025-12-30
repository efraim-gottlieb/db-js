import DB from "../utils/dbManager.js";

export async function addStudent(req, res) {
  if (
    !(req.body.name && req.body.age && req.body.className) ||
    Number.isNaN(+req.body.age)
  ) {
    res.status(400).send("body error");
    return;
  } else {
    const { name, age, className } = req.body;
    const tableName = "students";
    const columns = ["name", "age", "className"];
    const values = [[name, age, className]];
    DB.insertInto(tableName, columns, values);
    const students = await DB.select("students");
    res.status(201).json({ success: students[students.length - 1] });
  }
}

export async function getStudentById(req, res) {
  const id = req.params.id
  const result = await DB.select("students", `id = ${id}`);
  res.json({ success: result });
}
export async function getStudents(req, res) {
  const students = await DB.select("students");
  res.json({ count: students.length, students });
}

