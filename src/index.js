import express from 'express';
import bodyParser from 'body-parser'
import v1ArticlesRouter from './v1/routes/articlesRouters.js';

const app = express();
const PORT = process.env.port || 3050;

app.use(bodyParser.json());
app.use("/api/v1/articles", v1ArticlesRouter );

app.listen(PORT, ()=> { console.log(`Server listening on port:${PORT}`) });