import { Request, Response } from 'express';

import Exercise, { NewExerciseProps } from '../models/ExerciseModel';

async function create(req: Request<object, object, NewExerciseProps>, res: Response) {
  try {
    if (!req.body.pictureBase64)
      return res.status(500).json({ message: 'Picture file not available' });

    const exercise = await Exercise.create(req.body);

    return res.status(201).json({ message: 'Exercise created succesfully', exercise });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

export default {
  create,
}
