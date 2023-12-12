import { Router } from "express";
import {
  handleCreateExpense,
  handleDetailExpense,
  handleListExpenses,
} from "../controller/expenses";

const router = Router();

router.get("/", handleListExpenses);
router.get("/:expenseId", handleDetailExpense);
router.post("/", handleCreateExpense);

export default router;
