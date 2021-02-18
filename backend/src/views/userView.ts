import User from '../models/User'

export default {
    render(user: User){
        return{
            id: user.id,
            name: user.name,
            email: user.email,
            cpf: user.cpf,
            about: user.about,
            github: user.github,
        }
    },

    renderMany(users: User[]){
        return users.map(user => this.render(user))
    }
}