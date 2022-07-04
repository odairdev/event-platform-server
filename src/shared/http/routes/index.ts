import { userRoutes } from './user.routes';
import { Router } from "express";

const routes = Router()

routes.use(userRoutes)

export { routes }