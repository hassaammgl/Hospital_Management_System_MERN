import express from "express";
import {
  login,
  patientRegister,
  addNewAdmin,
} from "../controller/userController.js";

const router = express.Router();

router.post("/patient/register", patientRegister);
router.post("/login", login);
router.post("/admin/addnew", addNewAdmin);

export default router;
