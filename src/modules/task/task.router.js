import { Router } from "express";
import { isValid } from "../../middleware/validation.js";
import {
  createTask,
  deleteTask,
  getAllTasks,
  getAllUserTasks,
  getTask,
  updateTask,
} from "./task.controller.js";
import { isAuthenticated } from "../../middleware/authuntication.js";
const router = Router();

// register
router.get("/", isAuthenticated, getAllTasks);
router.get("/single/:id", isAuthenticated, getTask);
router.post("/", isAuthenticated, createTask);
router.put("/:id", isAuthenticated, updateTask);
router.delete("/:id", isAuthenticated, deleteTask);
router.get("/user", isAuthenticated, getAllUserTasks);

export default router;
