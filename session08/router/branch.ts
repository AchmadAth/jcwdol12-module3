import { Router } from "express";
import {
  handleCreateBranch,
  handleDeleteBranch,
  handleGetAllBranch,
  handleGetOneBranch,
  handleUpdateBranch,
} from "../controller/branch";

const branchRouter = Router();

branchRouter.post("/", handleCreateBranch);
branchRouter.get("/", handleGetAllBranch);
branchRouter.get("/:id", handleGetOneBranch);
branchRouter.put("/:id", handleUpdateBranch);
branchRouter.delete("/:id", handleDeleteBranch);

export default branchRouter;
