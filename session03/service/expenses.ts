import ExpenseRepository, {
  Expense,
  InputExpense,
} from "../repository/expense";

const expenseRepository = new ExpenseRepository(`${__dirname}/../db.json`);

export function createExpenseData(data: InputExpense): Expense {
  const result = expenseRepository.add(data);
  return result;
}

export function getOneExpense(id: number): Expense | undefined {
  const result = expenseRepository.getOne(id);
  return result;
}

export function getListExpenses(): Expense[] {
  const result = expenseRepository.getAll();
  return result;
}
