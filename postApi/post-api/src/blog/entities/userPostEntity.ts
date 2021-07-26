import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserPostEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({ length: 100})
    name:string;

    @Column({ length: 100})
    email:string;

    @Column({ length: 100})
    password:string;



}