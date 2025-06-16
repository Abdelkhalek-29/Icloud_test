import { User } from "../../../DB/models/user.js";
import { asyncHandeler } from "../../utils/asyncHandler.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
export const register = asyncHandeler(async (req, res, next) => {
  const { userName, password } = req.body;
  console.log("11");
  const isUser = await User.findOne({ userName });
  if (isUser)
    return next(new Error("Username already exist !", { cause: 409 }));

  const hashPassword = bcryptjs.hashSync(
    password,
    Number(process.env.SALT_ROUND)
  );

  const user = new User({ userName, password: hashPassword });

  await user.save();
  return res.json({ success: true, message: "user created" });
});

export const login = asyncHandeler(async (req, res, next) => {
  const { userName, password } = req.body;

  const isUser = await User.findOne({ userName });
  if (!isUser) return next(new Error("invalid username", { cause: 400 }));

  const match = bcryptjs.compareSync(password, isUser.password);
  if (!match) return next(new Error("Invalid password", { cause: 400 }));

  const token = jwt.sign(
    { id: isUser._id, userName: isUser.userName },
    process.env.TOKEN_KEY,
    {
      expiresIn: "2d",
    }
  );
  return res.json({ success: true, data: token });
});
