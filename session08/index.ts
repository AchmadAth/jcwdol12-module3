import express from "express";
import branchRouter from "./router/branch";
const PORT = 8000;

const app = express();
app.use(express.json());

app.use("/branches", branchRouter);

app.listen(PORT, () => {
  console.log(`App start on PORT :${PORT}`);
});
