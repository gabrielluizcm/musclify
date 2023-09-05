import { Request, Response } from 'express';

import Routine, { RoutineInterface } from '../models/RoutineModel';

async function create(req: Request<object, object, RoutineInterface>, res: Response) {
  try {
    const errors = await Routine.validate(req.body);
    if (errors.length)
      return res.status(400).json({ message: 'Invalid inputs', errors });

    const routine = Routine.create(req.body);

    return res.status(201).json({ message: 'Routine created successfully', routine });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function fetch(req: Request<{ id: string }>, res: Response) {
  try {
    const routine = await Routine.fetchById(req.params.id);
    if (!routine)
      return res.status(404).json({ message: 'Routine not found' })
    return res.status(200).json({ routine });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

export default {
  create, fetch
}
