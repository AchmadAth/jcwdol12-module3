import { Router } from "express";

const router = Router();

router.use((_req, _res, next) => {
  console.log("MASUK ROUTER STUDENT");
  next();
});

router.get("/", (_req, res) => {
  res.send("GET Student");
});

router.post("/", (_req, res) => {
  res.send("POST Student");
});

export default router;
