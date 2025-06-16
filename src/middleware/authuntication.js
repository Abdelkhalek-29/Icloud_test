import { User } from "../../DB/models/user.js";
import { asyncHandeler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = asyncHandeler(async (req, res, next) => {
  let token = req.headers["token"];
  if (!token || token.startWith(process.env.BEARER_KEY))
    return next(new Error("Valid token is required", 400));

  token = token.split(process.env.BEARER_KEY)[1];
  const decoded = jwt.verify(token, process.env.TOKEN_KEY);
  if (!decoded) return next(new Error("Invalid token !"));

  const user = await User.findOne({ userName: decoded.userName });
  if (!user) return next(new Error("user not found !"));

  req.user = user;
  return next;
});
