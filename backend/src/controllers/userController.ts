import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import User from '../models/User'
import UserView from '../views/userView'

export default {

    async CreateUser(req: Request, res: Response){
        const {
            name,
            email,
            cpf,
            about,
            github
        } = req.body
    
        const usersRepository = getRepository(User)
        
        const user = usersRepository.create({
            name,
            email,
            cpf,
            about,
            github
        })
    
        await usersRepository.save(user)
    
        return(res.json(user))
    },

    async IndexUser(req: Request, res: Response){
        const usersRepository = getRepository(User)

        let users = await usersRepository.find()

        return res.json(UserView.renderMany(users))
    },




    async DeleteUser(req: Request, res: Response){
        const usersRepository = getRepository(User)
        const { id } = req.params

        let {name} = await usersRepository.findOneOrFail(id)
        await usersRepository.delete(id)

        return res.status(201).json({message: `User ${name} successfully deleted`})
        
    },



    async EditUser(req: Request, res: Response) {

        
        const { id } = req.params
        const usersRepository = getRepository(User)
        
        const {
            name,
            email,
            cpf,
            about,
            github
        } = req.body
        

        const updatedUser = usersRepository.update(id, {
            name: name,
            email: email,
            cpf: cpf,
            about: about,
            github: github
        })

        

        try {
            await usersRepository.save(updatedUser)
            return res.status(201).json({message: `User ${name} successfully updated`})
        } catch (error) {
            return res.status(502).json({message: `User ${name} updated with warning: ${error.message}`})
        }

        
    }
}