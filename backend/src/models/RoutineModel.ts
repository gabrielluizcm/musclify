import { Schema, Document } from 'mongoose';

import mongoose from '../config/database';

// import UserModel from './UserModel';
// import ExerciseModel from './ExerciseModel';

type RoutineExerciseType = {
  exerciseId: string;
  reps: number;
  weight?: number;
  time?: number;
}

export interface RoutineInterface extends Document {
  userId: string;
  name: string;
  exercises: RoutineExerciseType[];
}

const routineSchema = new Schema<RoutineInterface>({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  exercises: [{
    exerciseId: { type: String, required: true },
    reps: { type: Number, required: true },
    weight: Number,
    time: Number
  }]
})

const RoutineModel = mongoose.model<RoutineInterface>('Routine', routineSchema);

async function create(props: RoutineInterface) {
  return await RoutineModel.create(props);
}

// thought about commented validations and more but since inputs will be
// controlled on frontend those will keep disabled for now
async function validate({ name }: RoutineInterface) {
  const errors = [];

  // if (userId.length !== 24) errors.push('Invalid User ID');
  if (name.length < 3 || name.length > 30) errors.push('Invalid name: must have between 3 and 30 characters');
  // if (exercises.length > 16) errors.push('Invalid exercises array: length over the 16 exercises max');

  // if (errors.length) return errors;

  // if (!UserModel.findById(userId)) errors.push('Invalid User ID');

  // if (errors.length) return errors;

  // exercises.forEach((exercise, index) => {
  //   if (!ExerciseModel.fetchOne(exercise.exerciseId)) errors.push(`Invalid ID for exercise ${index}`);
  // })

  return errors;
}

async function fetchByUser(userId: string) {
  return await RoutineModel.find({ userId });
}

async function fetchById(id: string = '') {
  return await RoutineModel.findById(id);
}

export default {
  create, validate, fetchByUser, fetchById
}
