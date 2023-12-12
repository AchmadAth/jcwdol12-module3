import { Request, Response } from "express";

export default function notFoundMiddleware(_req: Request, res: Response) {
  res.status(404).json({
    message: "not found",
  });
}
