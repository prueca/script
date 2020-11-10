import mongoose from 'mongoose';
import { dedupe } from '../helper';

export default class MongoController {
  async index(req, res) {
    /* create model instance */
    const schema = mongoose.Schema({}, { strict: false });
    const model = mongoose.model('Collection', schema);

    /* begin query */
    const doc = await model.find({/* insert filter here */});
    res.json(doc);
    mongoose.connection.close();
  }
};
