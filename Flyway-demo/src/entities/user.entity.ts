import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity({name:"user"})
export class User {

    @Column({name: "Id"})
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: "FirstName"})
    firstName: string;

    @Column({name: "LastName"})
    lastName: string;

}