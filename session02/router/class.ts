import { Router } from "express";

const router = Router();
router.get("/", (_req, res) => {
  res.send("GET Class");
});

router.post("/", (_req, res) => {
  res.send("POST Class");
});

export default router;
