import { Branch, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: ["query"],
});

type BranchInput = {
  name: string;
  location: string;
};

export async function createBranch(newBranch: BranchInput): Promise<Branch> {
  return prisma.branch.create({
    data: newBranch,
  });
}

export async function findAllBranch({ where, skip, take }: any) {
  const result = await prisma.branch.findMany({
    where,
    skip: skip || 0,
    take: take || 0,
  });
  const totalData = await prisma.branch.count({ where });

  return { totalData, result };
}

export async function findOneBranch(id: number) {
  const data = await prisma.branch.findUnique({ where: { id } });

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
