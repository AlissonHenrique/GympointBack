import { Router } from 'express';

import Usercontroller from './controllers/UserController';
import SessionController from './controllers/SessionController';
import PlansController from './controllers/PlansController';
import StudentController from './controllers/StudentController';
import MatriculaController from './controllers/MatriculaController';
import CheckinController from './controllers/CheckinController';
import HelpController from './controllers/HelpController';
import authMiddleware from './middlewares/auth';

const routes = new Router();
routes.post('/users', Usercontroller.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);
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
routes.get('/mat/:id', MatriculaController.index);
routes.get('/mat', MatriculaController.index);
routes.put('/mat/:id', MatriculaController.update);
routes.delete('/mat/:id', MatriculaController.delete);

routes.post('/students/:id/checkins', CheckinController.store);
routes.get('/students/:id/checkins', CheckinController.index);

routes.post('/help/:id/help-orders', HelpController.store);
routes.get('/help/:id/help-orders', HelpController.index);
routes.get('/help', HelpController.index);
routes.put('/help-orders/:id/answer', HelpController.update);
export default routes;
