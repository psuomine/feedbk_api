import express from 'express'
import { v1Router } from './api/v1';

const app = express();

const PORT = 8000;

app.use('/api/v1', v1Router)

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});