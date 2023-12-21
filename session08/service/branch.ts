import { Branch } from "@prisma/client";
import { prisma } from "../index";

type BranchInput = {
  name: string;
  location: string;
};

export async function createBranch(
  newBranch: BranchInput,
  newManager: { fullName: string }
): Promise<Branch> {
  try {
    const result = await prisma.$transaction(async (tx) => {
      const data = await tx.branch.create({
        data: newBranch,
      });
      await tx.manager.create({
        data: {
          branchId: data.id,
          fullName: newManager.fullName,
        },
      });
      return data;
    });
    return result;
  } catch (error) {
    throw error;
  }
}

export async function findAllBranch({ where, skip, take }: any) {
  const result = await prisma.branch.findMany({
    where,
    skip: skip || 0,
    take: take || 0,
    include: {
      manager: {
        select: {
          fullName: true,
        },
      },
      _count: {
        select: { classes: true },
      },
    },
  });
  const totalData = await prisma.branch.count({ where });

  return { totalData, result };
}

export async function findOneBranch(id: number) {
  const data = await prisma.branch.findUnique({
    where: { id },
    include: {
      manager: {
        select: {
          id: true,
          fullName: true,
        },
      },
      classes: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });

  return data;
}

export async function updateBranch(id: number, value: BranchInput) {
  return prisma.branch.update({
    where: { id },
    data: value,
  });
}

export async function deleteBranch(id: number) {
  return prisma.branch.delete({ where: { id } });
}

export async function statsBranch() {
  const allDataStats = await prisma.branch.aggregate({
    _count: { _all: true },
    _min: { createdAt: true },
    _max: { createdAt: true },
  });

  const statsByName = await prisma.branch.groupBy({
    by: ["name"],
    _count: { _all: true },
    having: {
      NOT: {
        name: {
          _count: { equals: 1 },
        },
      },
    },
  });

  return { allDataStats, statsByName };
}
