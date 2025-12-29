import express from "express";
import * as studentsController from "../controllers/studentsControllers.js";
const router = express.Router();

router.route("/")
  .get(studentsController.getStudents)
  .post(studentsController.addStudent)

router.route("/:id")
  .get(studentsController.getStudentById)

export default router;
