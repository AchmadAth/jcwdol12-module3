import { Router } from "express";
import {
  handleCreateExpense,
  handleListExpenses,
} from "../controller/expenses";

const router = Router();

router.get("/", handleListExpenses);
router.post("/", handleCreateExpense);

export default router;
