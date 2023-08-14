import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import 'dotenv/config';

const app = express();
const PORT = process.env.APP_PORT;

app.use(cors());
app.use(helmet());

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(PORT, () => {
  console.log(`Server running @ http://localhost:${PORT}`);
});