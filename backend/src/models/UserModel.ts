import { PrismaClient } from '@prisma/client';
import validator from 'validator';
import bcryptjs from 'bcryptjs';

const prisma = new PrismaClient();

export type NewUserProps = {
  id: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  age?: number;
  weight?: number;
}

async function create(props: NewUserProps) {
  const { name, email, password, age, weight } = props;
  const cryptPassword = bcryptjs.hashSync(password, 8);
  return await prisma.user.create({
    data: {
      name,
      email,
      age,
      weight,
      password: cryptPassword
    }
  });
}

export type UserJwtType = {
  id: string;
  name: string;
  email: string;
}

async function login(props: { email: string, password: string }): Promise<UserJwtType | false> {
  const { email, password } = props;
  const user = await prisma.user.findUnique({
    where: { email },
    select: {
      id: true,
      name: true,
      email: true,
      password: true
    }
  });

  if (!user) return false;

  if (!bcryptjs.compareSync(password, user.password)) return false;

  return { id: user.id, name: user.name, email: user.email };
}

async function validate(props: NewUserProps) {
  const errors = [];
  const { email, password, confirmPassword, name } = props;

  if (!validator.isEmail(email)) errors.push('Invalid email');
  if (password.length < 6 || password.length > 18) errors.push('Invalid password: must have between 6 and 18 characters');
  if (password !== confirmPassword) errors.push('Passwords must match');
  if (!name.length || name.length > 36) errors.push('Invalid name: must have and least 1 character and 36 max');

  if (!errors.length && await prisma.user.count({ where: { email } }))
    errors.push('Email already registered');

  return errors;
}

async function findById(id: string) {
  return prisma.user.findUnique({ where: { id } });
}

async function loadUserWithRoutines(id: string) {
  return prisma.user.findUnique({
    where: { id },
    include: {
      Routines: {
        include: {
          Exercises: true
        }
      }
    }
  })
}

export default { create, validate, login, findById, loadUserWithRoutines };
