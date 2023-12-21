import { Request, Response } from "express";
import { createArticle, getArticleDetail } from "../service/article";

export async function handleCreateArticle(req: Request, res: Response) {
  const { title, content, coverImg, categoryId, tags } = req.body;
  try {
    const result = await createArticle(
      { title, content, coverImg, categoryId },
      tags
    );
    res.status(201).json({
      message: "create article successful",
      result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "failed to create article",
      error,
    });
  }
}

export async function handleGetArticleDetail(req: Request, res: Response) {
  const { id } = req.params;
  const articleId = Number(id);

  if (isNaN(articleId)) {
    return res.status(400).json({
      message: "article id is not valid",
    });
  }

  try {
    const result = await getArticleDetail(articleId);
    res.status(200).json({ result });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "failed to get article details",
      error,
    });
  }
}
