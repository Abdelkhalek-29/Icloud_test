import mongoose, { Schema, Types, model } from "mongoose";

const userSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
      main: 3,
      max: 20,
    },
    tittle: {
      type: String,
      required: true,
    },
    assignedTo: {
      type: Types.ObjectId,
      ref: "User",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export const Task = mongoose.model.Task || model("Task", userSchema);
