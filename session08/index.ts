import express from "express";
import { PrismaClient } from "@prisma/client";

import branchRouter from "./router/branch";
const PORT = 8000;

export const prisma = new PrismaClient({
  log: ["query"],
});

const app = express();
app.use(express.json());

app.use("/branches", branchRouter);

prisma
  .$connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App start on PORT :${PORT}`);
    });
  })
  .catch((error) => {
    console.error("FAILED TO CONNECT TO DATABASE");
    console.error(error);
  });
