import Router from 'express';
import Home from '../controllers/HomeController';

const homeRouter = new Router();

homeRouter.get('/', Home.index);

export default homeRouter;
