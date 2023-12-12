import express, { Handler, Request, Response } from "express";
import cookieParser from "cookie-parser";
import classRouter from "./router/class";
import studentRouter from "./router/student";
import errorMiddleware from "./middleware/errorMiddleware";
import notFoundMiddleware from "./middleware/notFoundMiddleware";

const PORT = 8000;

const app = express();
app.use(express.json());
app.use(cookieParser());

app.get("/", (_req: Request, res: Response) => {
  res.send("welcome to my API");
});

app.use("/students", studentRouter); // routing student
app.use("/classes", classRouter); // routing class

app.use(errorMiddleware);
app.use(notFoundMiddleware);

app.listen(PORT, () => {
  console.log(`App run on localhost:${PORT}`);
});
