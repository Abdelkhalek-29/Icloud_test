import cors from "cors";
import authRouter from "./modules/auth/auth.router.js";
import taskRouter from "./modules/task/task.router.js";
export const appRouter = (app, express) => {
  app.use(cors());

  app.use(express.json);
  app.use("/api/auth", authRouter);
  app.use("/api/task", taskRouter);

  app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
      success: false,
      messsage: err.messsage || "internal server error",
    });
  });
};
