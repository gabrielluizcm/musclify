import { Schema, Document } from 'mongoose';
import validator from 'validator';
import bcryptjs from 'bcryptjs';

import mongoose from '../config/database';

interface UserInterface extends Document {
  username: string;
  email: string;
  password: string;
  role: string;
  name: string;
  age?: string;
  weight?: string;
}

const userSchema = new Schema<UserInterface>({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  name: { type: String, required: true },
  age: { type: Number },
  weight: { type: Number },
});

const UserModel = mongoose.model<UserInterface>('User', userSchema);

export type NewUserProps = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
}

async function create(props: NewUserProps) {
  const { username, email, password, name } = props;
  const salt = bcryptjs.genSaltSync();
  const cryptPassword = bcryptjs.hashSync(password, salt);
  return await UserModel.create({
    username, email, name,
    role: 'user',
    password: cryptPassword
  });
}

export type UserJwtType = {
  id: string;
  name: string;
  email: string;
}

async function login(props: { email: string, password: string }): Promise<UserJwtType | false> {
  const { email, password } = props;
  const user = await UserModel.findOne({ email });

  if (!user) return false;

  if (!bcryptjs.compareSync(password, user.password)) return false;

  return { id: user.id, name: user.name, email: user.email };
}

async function validate(props: NewUserProps) {
  const errors = [];
  const { username, email, password, confirmPassword, name } = props;

  if (username.length < 3 || username.length > 30) errors.push('Invalid name: must have between 3 and 30 characters');
  if (!validator.isEmail(email)) errors.push('Invalid email');
  if (password.length < 6 || password.length > 18) errors.push('Invalid password: must have between 6 and 18 characters');
  if (password !== confirmPassword) errors.push('Passwords must match');
  if (!name.length || name.length > 36) errors.push('Invalid name: must have and least 1 character and 36 max');

  if (!errors.length && await UserModel.findOne({ email }))
    errors.push('Email already registered');

  return errors;
}

async function findById(id: string): Promise<UserInterface | null> {
  return UserModel.findOne({ _id: id });
}

export default { create, validate, login, findById };
