import { Request, Response } from 'express';

import History from '../models/HistoryModel';

async function index(req: Request<object, object, { userId: string }>, res: Response) {
  try {
    const historic = await History.fetchAllByUser(req.body.userId);
    return res.status(200).json({ historic });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function create(req: Request<object, object, { routineId: string }>, res: Response) {
  try {
    const history = await History.create(req.body.routineId);
    return res.status(201).json({ history });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function fetch(req: Request<{ id: string }>, res: Response) {
  try {
    const history = await History.fetchOne(req.params.id);
    return res.status(200).json({ history });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

export default { index, create, fetch };
