import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./DB/connection.js";
import { appRouter } from "./src/app.router.js";
import swaggerUI from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

dotenv.config();
const app = express();
const port = process.env.PORT;

connectDB();

appRouter(app, express);
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
