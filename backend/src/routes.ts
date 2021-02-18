import { Router } from 'express'

import userController from './controllers/userController'

const Routes = Router()

Routes.post('/users', userController.CreateUser)
Routes.get('/users', userController.IndexUser)
Routes.delete('/users/:id', userController.DeleteUser)
Routes.put('/users/:id', userController.EditUser)
Routes.get('/users/:id', userController.ShowUser)

export default Routes