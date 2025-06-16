import { asyncHandeler } from "../utils/asyncHandler";

export const isAuthorized = (role) => {
  return asyncHandeler(async (req, res, next) => {
    if (role !== req.user.role)
      return next(new Error("You are not authorized !", { cause: 403 }));
    return next();
  });
};
