import express from 'express';
import v1ArticlesRouter from './v1/routes/articlesRouters.js';

const app = express();
const PORT = process.env.port || 3050;

app.use("/api/v1", v1ArticlesRouter );

app.listen(PORT, ()=> { console.log(`Server listening on port:${PORT}`) });