import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export type NewExerciseProps = {
  routineId: string;
  title: string;
  description?: string;
  tags?: string;
}

async function create({ routineId, title, description, tags }: NewExerciseProps) {
  return await prisma.exercise.create({
    data: {
      routine_id: routineId,
      title,
      description,
      tags
    }
  });
}

async function fetchAll() {
  return await prisma.exercise.findMany();
}

async function fetchOne(id: string = '') {
  return await prisma.exercise.findUnique({ where: { id } });
}

export default { create, fetchAll, fetchOne };
