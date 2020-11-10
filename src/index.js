import express from 'express';
import logger from 'morgan';
import mongoose from 'mongoose';
import mongodb from './config/mongo';
import { PORT, BASE_URL } from './config/app';
import routes from './routes';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', routes);

/* catch 404 and forward to error handler */
app.use((req, res) => res.json({ error: 'Page not found' }));

/* connect to mongodb database */
mongoose.connect(mongodb, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log(`Database connection established - ${mongodb}...`))
  .catch(err => console.log(err.message));

/* start */
app.listen(PORT).on('listening', () => {
  console.log(`App is running - ${BASE_URL}`);
});