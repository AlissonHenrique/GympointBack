import { Router } from 'express';

import Usercontroller from './controllers/UserController';
import SessionController from './controllers/SessionController';
import PlansController from './controllers/PlansController';
import StudentController from './controllers/StudentController';
import authMiddleware from './middlewares/auth';

const routes = new Router();
routes.post('/users', Usercontroller.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);
routes.post('/plans', PlansController.store);
routes.get('/plans', PlansController.index);
routes.post('/student', StudentController.store);
routes.get('/student', StudentController.index);
export default routes;
