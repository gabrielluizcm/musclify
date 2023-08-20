import { Schema, Document } from 'mongoose';
import mongoose from '../config/database';

type ExerciseI18nType = {
  title: string;
  desc: string;
  tags: string[];
}

interface ExerciseInterface extends Document {
  name: string;
  weight?: number;
  reps?: number;
  time?: number;
  i18n?: {
    en: ExerciseI18nType;
    pt: ExerciseI18nType;
  }
  picture_id?: string;
}

const exerciseSchema = new Schema<ExerciseInterface>({
  name: { type: String, required: true },
  weight: { type: Number },
  reps: { type: Number },
  time: { type: Number },
  i18n: {
    required: false,
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
  name: string;
  i18n: {
    en: ExerciseI18nType;
    pt: ExerciseI18nType;
  };
  picture_base64?: string;
}

async function create(props: NewExerciseProps) {
  const { name, i18n } = props;
  return await ExerciseModel.create({
    name, i18n
  });
}

export default { create };
