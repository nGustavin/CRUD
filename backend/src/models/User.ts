import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('users')
export default class User {
    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column()
    name: string;
    @Column()
    email: string;
    @Column()
    cpf: number;
    @Column()
    about: string;
    @Column()
    github: string;
}