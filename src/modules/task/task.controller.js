import { title } from "process";
import { Task } from "../../../DB/models/task.js";
import { asyncHandeler } from "../../utils/asyncHandler.js";

export const getAllTasks = asyncHandeler(async (req, res, next) => {
  const tasks = await Task.find();
  return res.json({ success: true, data: tasks });
});

export const getTask = asyncHandeler(async (req, res, next) => {
  const task = await Task.findById(req.params.id);
  return res.json({ success: true, data: task });
});

export const createTask = asyncHandeler(async (req, res, next) => {
  const { tittle, description, assignedTo } = req.body;
  const task = new Task({ tittle, description, assignedTo });
  await Task.save();

  return res.json({ success: true, message: "Task created" });
});

export const updateTask = asyncHandeler(async (req, res, next) => {
  const task = await Task.findById(req.params.id);
  if (!task) return next(new Error("task not found !", { cause: 404 }));

  const { tittle, description, assignedTo } = req.body;

  if (tittle) task.tittle = tittle;
  if (description) task.description = description;
  if (assignedTo) task.assignedTo = assignedTo;
  task.updatedAt = new Date();

  await task.save();
  return res.json({ success: true, message: "Task updated" });
});

export const deleteTask = asyncHandeler(async (req, res, next) => {
  const task = await Task.findByIdAndDelete(req.params.id);
  if (!task) return next(new Error("task not found !", { cause: 404 }));

  return res.json({ success: true, message: "Task deleted" });
});

export const getAllUserTasks = asyncHandeler(async (req, res, next) => {
  const task = await Task.find({ assignedTo: req.user._id });

  return res.json({ success: true, data: task });
});
