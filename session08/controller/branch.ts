import { Request, Response } from "express";
import {
  createBranch,
  deleteBranch,
  findAllBranch,
  findOneBranch,
  statsBranch,
  updateBranch,
} from "../service/branch";

export async function handleCreateBranch(req: Request, res: Response) {
  const { name, location, manager } = req.body;
  try {
    const result = await createBranch({ name, location }, manager);
    res.status(201).json({
      result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "failed to insert new branch",
      error,
    });
  }
}

export async function handleGetAllBranch(req: Request, res: Response) {
  // filtering
  const { name, id, startDate, page, perPage } = req.query;
  const where: any = {};
  if (name) {
    where.name = {
      contains: name,
    };
  }
  if (id) {
    where.id = Number(id);
  }
  if (startDate) {
    where.createdAt = {
      gte: new Date(startDate as string),
    };
  }

  // pagination
  let skip = 0;
  let take = 5;
  if (perPage && !isNaN(Number(perPage))) {
    take = Number(perPage);
  }
  if (page && !isNaN(Number(page))) {
    skip = take * (Number(page) - 1);
  }

  try {
    // querying to services
    const { result, totalData } = await findAllBranch({ where, skip, take });
    res.status(200).json({
      totalData,
      result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "failed to get branches from database",
      error,
    });
  }
}

export async function handleGetOneBranch(req: Request, res: Response) {
  const id = getIdFromParams(req);
  if (id === null) {
    return res.status(400).json({
      message: "invalid id parameter",
    });
  }

  try {
    const result = await findOneBranch(id);
    if (result === null) {
      return res.status(400).json({
        message: "branch is not found",
      });
    }
    res.status(200).json({ result });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "failed to get data from database",
      error,
    });
  }
}

export async function handleUpdateBranch(req: Request, res: Response) {
  const id = getIdFromParams(req);
  if (id === null) {
    return res.status(400).json({
      message: "invalid id parameter",
    });
  }

  const { name, location } = req.body;

  try {
    const result = await updateBranch(id, { name, location });
    res.status(200).send({
      message: "success update data",
      result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: " failed to update data",
      error,
    });
  }
}

export async function handleDeleteBranch(req: Request, res: Response) {
  const id = getIdFromParams(req);
  if (id === null) {
    return res.status(400).json({
      message: "invalid id parameter",
    });
  }

  try {
    const result = await deleteBranch(id);
    res.status(200).send({
      message: "success delete data",
      result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: " failed to delete data",
      error,
    });
  }
}

export async function handleGetBranchesStats(_req: Request, res: Response) {
  try {
    const { allDataStats, statsByName } = await statsBranch();
    res.status(200).json({
      result: {
        count: allDataStats._count._all,
        createdAtMin: allDataStats._min.createdAt,
        createdAtMax: allDataStats._max.createdAt,
        byName: {
          duplicateName: statsByName.map((d) => ({
            name: d.name,
            total: d._count._all,
          })),
        },
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "failed to get branch data status",
      error,
    });
  }
}

function getIdFromParams(req: Request): number | null {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    return null;
  }
  return id;
}
