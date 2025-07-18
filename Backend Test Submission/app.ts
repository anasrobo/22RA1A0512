import express from 'express';
import averageRouter from './routes/average';
import logMiddleware from './middlewares/logMiddleware';

const app = express();

app.use(express.json());
app.use(logMiddleware);
app.use('/average', averageRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 