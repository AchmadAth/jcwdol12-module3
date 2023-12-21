import { Router } from "express";
import {
  handleCreateBranch,
  handleDeleteBranch,
  handleGetAllBranch,
  handleGetBranchesStats,
  handleGetOneBranch,
  handleUpdateBranch,
} from "../controller/branch";

const branchRouter = Router();

branchRouter.post("/", handleCreateBranch);
branchRouter.get("/", handleGetAllBranch);
branchRouter.get("/stats", handleGetBranchesStats);
branchRouter.get("/:id", handleGetOneBranch);
branchRouter.put("/:id", handleUpdateBranch);
branchRouter.delete("/:id", handleDeleteBranch);

export default branchRouter;
