import { Router } from "express";
import {
  handleCreateArticle,
  handleGetArticleDetail,
} from "../controller/article";

const articleRouter = Router();

articleRouter.post("/", handleCreateArticle);
articleRouter.get("/:id", handleGetArticleDetail);

export default articleRouter;
