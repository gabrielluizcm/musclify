import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function create(routineId: string) {
  return await prisma.history.create({
    data: {
      routine_id: routineId
    }
  });
}

async function fetchAllByUser(userId: string) {
  return await prisma.user.findMany({
    select: {
      Routines: {
        select: {
          Historic: true
        }
      }
    },
    where: {
      id: userId
    }
  });
}

async function fetchOne(id: string = '') {
  return await prisma.history.findUnique({ where: { id } });
}

export default { create, fetchAllByUser, fetchOne };
