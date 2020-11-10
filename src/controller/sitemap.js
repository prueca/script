import fs from 'fs';
import parser from 'xml2json';
import { dedupe } from '../helper';

export default class SitemapController {
  index(req, res) {
    fs.readFile( './sample.xml', function(err, data) {
      if (err) {
        res.json({ error: err });
        return;
      }
    
      const json = parser.toJson(data);
      res.json(json);
    });
  }
};
