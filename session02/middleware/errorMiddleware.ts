import { Handler, Request, Response } from "express";

export default function errorMiddleware(
  err: Error,
  _req: Request,
  res: Response,
  _next: Handler
) {
  console.log(err.stack);
  res.status(500).json({
    message: err.message,
  });
}
