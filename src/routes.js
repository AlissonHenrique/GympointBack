import { Router } from 'express';

import Usercontroller from './controllers/UserController';
import SessionController from './controllers/SessionController';
import PlansController from './controllers/PlansController';
import authMiddleware from './middlewares/auth';

const routes = new Router();
routes.post('/users', Usercontroller.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);
routes.post('/plans', PlansController.store);
export default routes;
