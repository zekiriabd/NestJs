import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity({name: 'client'})
export class Client {

    @Column({name: 'clientid'})
    @PrimaryGeneratedColumn()
    clientId: number;

    @Column({name: 'firstname'})
    firstName: string;

    @Column({name: 'lastname'})
    lastName: string;

    @Column({name: 'email'})
    email: string;

    @Column({name: 'password'})
    password: string;

}