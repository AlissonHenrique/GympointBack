import { Router } from 'express';

import Usercontroller from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import PlansController from './app/controllers/PlansController';
import StudentController from './app/controllers/StudentController';
import MatriculaController from './app/controllers/MatriculaController';
import CheckinController from './app/controllers/CheckinController';
import HelpController from './app/controllers/HelpController';
import PasswordController from './app/controllers/PasswordController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();
routes.post('/users', Usercontroller.store);
routes.post('/sessions', SessionController.store);

routes.post('/forget_password', PasswordController.store);
routes.put('/reset_password', PasswordController.update);

routes.use(authMiddleware);
routes.put('/users', Usercontroller.update);
routes.post('/plans', PlansController.store);
routes.get('/plans', PlansController.index);
routes.get('/plans/:id', PlansController.index);
routes.put('/plans/:id', PlansController.update);
routes.delete('/plans/:id', PlansController.delete);

routes.post('/student', StudentController.store);
routes.get('/student', StudentController.index);
routes.get('/student/:id', StudentController.index);
routes.put('/student/:id', StudentController.update);
routes.delete('/student/:id', StudentController.delete);

routes.post('/mat', MatriculaController.store);
routes.get('/mat', MatriculaController.index);
routes.get('/mat/:id', MatriculaController.index);
routes.put('/mat/:id', MatriculaController.update);
routes.delete('/mat/:id', MatriculaController.delete);

routes.post('/students/:id/checkins', CheckinController.store);
routes.get('/students/:id/checkins', CheckinController.index);

routes.post('/help/:id/help-orders', HelpController.store);
routes.get('/help/:id/help-orders', HelpController.index);
routes.get('/help', HelpController.index);
routes.put('/help-orders/:id/answer', HelpController.update);
export default routes;
