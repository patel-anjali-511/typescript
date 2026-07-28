import express, { Request, Response } from "express";
import logger from "./middleware/logger";
const app = express();
app.use(logger);
app.get("/", (req: Request, res: Response) => {
  res.send("hello world");
});
export default app;
