import { readFileSync, writeFileSync } from "fs";

export type InputExpense = {
  name: string;
  nominal: number;
  category: string;
};

export type Expense = {
  id: number;
  createdAt: Date;
} & InputExpense;

export default class ExpenseRepository {
  _jsonPath: string;

  constructor(jsonPath: string) {
    this._jsonPath = jsonPath;
  }

  add(data: InputExpense): Expense {
    const expenses = this._readJson();
    const newID = expenses.map((d) => d.id).sort((a, b) => b - a)[0] + 1 || 1;
    const result = {
      id: newID,
      createdAt: new Date(),
      ...data,
    };
    expenses.push(result);
    this._writeJson(expenses);
    return result;
  }

  getAll(): Expense[] {
    return this._readJson();
  }

  getOne(id: number): Expense | undefined {
    const expenses = this._readJson();
    const expense = expenses.filter((d) => d.id === id)[0];
    if (!expense) {
      return undefined;
    }

    return expense;
  }

  _writeJson(rawData: Expense[]) {
    writeFileSync(this._jsonPath, JSON.stringify(rawData, null, 2));
  }

  _readJson(): Expense[] {
    const rawData = readFileSync(this._jsonPath);
    return JSON.parse(rawData.toString());
  }
}
