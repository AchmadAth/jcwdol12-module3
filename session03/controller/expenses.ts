import { Request, Response } from "express";
import { createExpenseData, getListExpenses } from "../service/expenses";

export function handleListExpenses(req: Request, res: Response) {
  const result = getListExpenses();
  res.json({ result });
}

export function handleCreateExpense(req: Request, res: Response) {
  const result = createExpenseData({
    name: req.body.name,
    nominal: req.body.nominal,
    category: req.body.category,
  });

  res.status(201).json({ result });
}
