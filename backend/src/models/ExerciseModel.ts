import { Schema, Document } from 'mongoose';
import mongoose from '../config/database';

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
  picture_id?: string;
}

const exerciseSchema = new Schema<ExerciseInterface>({
  weight: { type: Number },
  reps: { type: Number },
  time: { type: Number },
  i18n: {
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
  picture_id: { type: String }
});

const ExerciseModel = mongoose.model<ExerciseInterface>('Exercise', exerciseSchema);

export type NewExerciseProps = {
  i18n: {
    en: ExerciseI18nType;
    pt: ExerciseI18nType;
  };
  picture_base64?: string;
}

async function create({ i18n }: NewExerciseProps) {
  return await ExerciseModel.create({
    i18n
  });
}

export default { create };
