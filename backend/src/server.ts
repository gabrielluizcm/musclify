import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import 'dotenv/config';

import { userRoutes, exerciseRoutes, routineRoutes, historyRoutes } from './routes';

const app = express();
const PORT = process.env.APP_PORT;

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use(userRoutes);
app.use(exerciseRoutes);
app.use(routineRoutes);
app.use(historyRoutes);

app.get('/', (req, res) => {
  res.send('Musclify');
});

app.listen(PORT, () => {
  console.log(`Server running @ http://localhost:${PORT}`);
});
