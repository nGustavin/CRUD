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

        const usersRepo = getRepository(User)
        
        const { id } = req.params

        const data = req.body

        const name = data.name
        try {
            await usersRepo.update(id, data)
            return res.status(201).json({message: `User ${name} successfully updated`})
        } catch (error) {
            return res.status(500).json({message: `Internal server error, try again later`})
        }
    },




    async ShowUser(req: Request, res: Response){
        const userRepo = getRepository(User)

        const { id } = req.params

        try{
            const user = await userRepo.findOneOrFail(id)
            return res.status(200).json(user)
        }catch(err){
            return res.status(500).json({Error: "User not found"})
        }

    } 
}