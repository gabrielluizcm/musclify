import { Request, Response } from 'express';

import Exercise, { NewExerciseProps } from '../models/ExerciseModel';

async function create(req: Request<object, object, NewExerciseProps>, res: Response) {
  try {
    // todo input validation and image upload
    const exercise = await Exercise.create(req.body);

    return res.status(201).json({ message: 'Exercise created succesfully', exercise });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

export default {
  create,
}
