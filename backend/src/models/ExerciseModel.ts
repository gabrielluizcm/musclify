import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export type NewExerciseProps = {
  routineId: string;
  title: string;
  description?: string;
  tags?: string;
}

async function create(props: NewExerciseProps) {
  const { routineId, title, description, tags } = props;
  return await prisma.exercise.create({
    data: {
      routine_id: routineId,
      title,
      description,
      tags
    }
  });
}

async function validate(props: NewExerciseProps) {
  const { routineId, title } = props;
  const errors = [];

  if (routineId.length !== 24) errors.push('Invalid Routine ID');
  if (title.length < 3 || title.length > 30) errors.push('Invalid title: must have between 3 and 30 characters');

  if (errors.length) return errors;

  if (!prisma.routine.findUnique({ where: { id: routineId } })) errors.push('Invalid Routine ID');

  if (errors.length) return errors;

  return errors;
}

async function fetchAll() {
  return await prisma.exercise.findMany();
}

async function fetchOne(id: string = '') {
  return await prisma.exercise.findUnique({ where: { id } });
}

export default { create, validate, fetchAll, fetchOne };
