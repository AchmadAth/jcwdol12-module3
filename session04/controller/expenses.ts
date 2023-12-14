import { Request, Response } from "express";
import {
  createExpenseData,
  getListExpenses,
  getOneExpense,
} from "../service/expenses";

export function handleListExpenses(req: Request, res: Response) {
  const result = getListExpenses();
  res.json({ result });
}

export function handleDetailExpense(req: Request, res: Response) {
  const id = req.params.expenseId;
  const result = getOneExpense(Number(id));
  if (result === undefined) {
    res.status(400).json({ message: "data with id is not found" });
    return;
  }
  res.status(200).json({ result });
}

export function handleCreateExpense(req: Request, res: Response) {
  const result = createExpenseData({
    name: req.body.name,
    nominal: req.body.nominal,
    category: req.body.category,
  });

  res.status(201).json({ result });
}
