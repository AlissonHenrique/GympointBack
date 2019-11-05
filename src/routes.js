import { Router } from 'express';

import Usercontroller from './controllers/UserController';
import SessionController from './controllers/SessionController';

const routes = new Router();
routes.post('/users', Usercontroller.store);
routes.post('/sessions', SessionController.store);
export default routes;
