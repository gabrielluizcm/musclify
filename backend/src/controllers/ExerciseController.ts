import { Request, Response } from 'express';

import Exercise, { NewExerciseProps } from '../models/ExerciseModel';

async function index(req: Request, res: Response) {
  try {
    const exercises = await Exercise.fetchAll();
    return res.status(200).json({ exercises });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function create(req: Request<object, object, NewExerciseProps>, res: Response) {
  try {
    const exercise = await Exercise.create(req.body);

    return res.status(201).json({ message: 'Exercise created succesfully', exercise });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function fetch(req: Request<{ id: string }>, res: Response) {
  try {
    const exercise = await Exercise.fetchOne(req.params.id);
    if (!exercise)
      return res.status(404).json({ message: 'Exercise not found' })
    return res.status(200).json({ exercise });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

export default {
  index, create, fetch
}
