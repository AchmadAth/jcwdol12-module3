import express from "express";

const PORT = 8080;

const app = express();

app.get("/api", async (_req, res) => {
  res.send("welcome to my API");
});

app.post("/api", async (req, res) => {
  const requesterName = req.header("name");
  res.send(`you got me, ${requesterName}`);
});

app.patch("/api", async (_req, res) => {
  res.send("/api patch");
});

app.put("/api", async (_req, res) => {
  res.send("/api put");
});

app.delete("/api", async (_req, res) => {
  res.send("/api delete");
});

app.use(async (_req, res) => {
  res.status(404).json({ message: "page not found" });
});

app.listen(PORT, () => {
  console.log(`success: API server start on localhost:${PORT}`);
});
