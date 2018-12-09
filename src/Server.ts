import express from 'express';

import Logger from './Logger';
import { HealthCheckController, NoteController } from './controller';

const app: express.Application = express();
const port: string = process.env.PORT || '3000';

app.use(express.json());
app.use('/health-check', HealthCheckController);
app.use('/v1/notes', NoteController);
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  Logger.error(err);
  res.status(500).end();
});

app.listen(port, () => {
  Logger.info(`Listening at http://localhost:${port}/`);
});
