import cors from "cors";
import authRouter from "./modules/auth/auth.router.js";
import taskRouter from "./modules/task/task.router.js";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

export const appRouter = (app, express) => {
  app.use(cors());
  const swaggerOptions = {
    swaggerDefinition: {
      openapi: "3.0.0",
      info: {
        title: "task docs",
        version: "1.0.0",
      },
    },
    apis: ["./routes/*.js"],
  };
  const swaggerDocs = swaggerJSDoc(swaggerOptions);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

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
