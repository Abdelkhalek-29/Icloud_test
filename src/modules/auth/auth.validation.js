import joi from "joi";

export const registerSchema = joi.object({
  userName: joi.string().min(3).max(20).required(),
  password: joi.string().required(),
});

export const loginSchema = joi.object({
  userName: joi.string().min(3).max(20).required(),
  password: joi.string().required(),
});
