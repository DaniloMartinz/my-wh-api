import express from 'express';

const app = express();
const PORT = process.env.port || 3050;

app.listen(PORT, ()=> { console.log(`Server listening on port:${PORT}`) });