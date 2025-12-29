import express from "express";
import studentsRoutes from "./routes/studentsRoutes.js";

const app = express();
const PORT = 8000;

app.use(express.json())

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use("/students", studentsRoutes);

app.listen(PORT, () => {
  console.log(`server run on ${PORT}...`);
});
