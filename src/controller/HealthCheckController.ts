import { Router, Request, Response } from 'express';
import Logger from '../Logger';
import Sequelize from '../Sequelize';

const router: Router = Router();

router.get('/', async (req: Request, res: Response) => {
  const appState = {
    message: 'Application is running.',
    success: true,
  };

  const dbState = {
    message: 'Database is available.',
    success: false,
  };
  try {
    await Sequelize
      .query('SELECT CURRENT_TIMESTAMP();')
      .then(() => dbState.success = true);
  } catch (error) {
    Logger.error(`Database is not available because of ${error.name}`);
    Logger.error(error.stack);
  }

  res
    .status(200)
    .send({
      app: appState,
      dbConnection: dbState,
    });
});

export const HealthCheckController: Router = router;
