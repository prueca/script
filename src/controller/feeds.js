import { exec } from 'child_process';
import { dedupe } from '../helper';

export default class FeedsController {
  index(req, res) {
    const bash = 'ls -la';

    exec(bash, (error, stdout, stderr) => {
      if (error) {
        res.json({ error: error.message });
        return;
      }
      if (stderr) {
        res.json({ error: stderr });
        return;
      }
      res.send(stdout);
    });
  }
};
