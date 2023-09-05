import { Schema, Document } from 'mongoose';

import mongoose from '../config/database';
import { download, upload } from '../config/pictures';

type ExerciseI18nType = {
  title: string;
  desc: string;
  tags: string[];
}

interface ExerciseInterface extends Document {
  weight?: number;
  reps?: number;
  time?: number;
  i18n: {
    en: ExerciseI18nType;
    pt: ExerciseI18nType;
  }
  pictureName: string;
  pictureData64?: string;
}

const exerciseSchema = new Schema<ExerciseInterface>({
  weight: Number,
  reps: Number,
  time: Number,
  i18n: {
    type: {
      en: {
        title: { type: String, required: true },
        desc: { type: String, required: true },
        tags: { type: Array, required: true }
      },
      pt: {
        title: { type: String, required: true },
        desc: { type: String, required: true },
        tags: { type: Array, required: true }
      }
    },
    required: true
  },
  pictureName: { type: String, required: true }
});

const ExerciseModel = mongoose.model<ExerciseInterface>('Exercise', exerciseSchema);

export type NewExerciseProps = {
  i18n: {
    en: ExerciseI18nType;
    pt: ExerciseI18nType;
  };
  pictureBase64: string;
}

async function create({ i18n, pictureBase64 }: NewExerciseProps) {
  const pictureName = upload(pictureBase64, 'exercises');
  return await ExerciseModel.create({
    i18n, pictureName
  });
}

async function fetchAll() {
  const exercises = await ExerciseModel.find().lean().exec();
  // todo optimization
  exercises.forEach((exercise) => {
    const pictureData64 = download(exercise.pictureName, 'exercises');
    exercise.pictureData64 = pictureData64;
  })
  return exercises;
}

async function fetchOne(id: string = '') {
  const exercise = await ExerciseModel.findById(id).lean().exec();
  if (!exercise) return false;
  const pictureData64 = download(exercise.pictureName, 'exercises');
  exercise.pictureData64 = pictureData64
  return exercise;
}

export default { create, fetchAll, fetchOne };
