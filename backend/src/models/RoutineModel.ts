import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type NewRoutineProps = {
  userId: string;
  title: string;
  estimatedMinutes?: number;
  scheduledDays?: string;
}

async function create(props: NewRoutineProps) {
  const { userId, title, estimatedMinutes, scheduledDays } = props;

  return await prisma.routine.create({
    data: {
      user_id: userId,
      title: title,
      estimated_minutes: estimatedMinutes,
      scheduled_days: scheduledDays
    }
  });
}

async function validate(props: NewRoutineProps) {
  const { userId, title } = props;
  const errors = [];

  if (userId.length !== 24) errors.push('Invalid User ID');
  if (title.length < 3 || title.length > 30) errors.push('Invalid title: must have between 3 and 30 characters');

  if (errors.length) return errors;

  if (!prisma.user.findUnique({ where: { id: userId } })) errors.push('Invalid User ID');

  if (errors.length) return errors;

  return errors;
}

async function fetchByUser(userId: string) {
  return await prisma.routine.findMany({ where: { user_id: userId } });
}

async function fetchById(id: string) {
  return await prisma.routine.findUnique({ where: { id } });
}

export default {
  create, validate, fetchByUser, fetchById
}
