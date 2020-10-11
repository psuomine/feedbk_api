import express from 'express'

const app = express();

const PORT = 8000;

app.get('/', (req,res) => {
    console.log("RESS")
    res.send('Express + TypeScript Server123');
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});