import { Schema, Document } from 'mongoose';
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

export default UserModel;
