import express, { Handler, Request, Response } from "express";
import expensesRouter from "./router/expenses";
import ActorRepository from "./repository/actor";

const PORT = 8000;
const app = express();
app.use(express.json());

// inject router
app.use("/expenses", expensesRouter);

app.get("/actors", async (_req, res) => {
  const repositoryActor = new ActorRepository();

  const result = (await repositoryActor.getAll()) as any[];
  res.json({ length: result.length, result });
});

// error handling global middleware
app.use((err: Error, _req: Request, res: Response, _next: Handler) => {
  console.log(`FATAL ERROR`, err.stack);
  res.status(500).json({
    message: err.message,
  });
});

// 404 global middleware
app.use((req, res) => {
  console.log(`404: ${req.method} ${req.path}`);
  res.status(404).json({
    message: "not found",
  });
});

app.listen(PORT, () => {
  console.log(`App start on localhost:${PORT}`);
});
