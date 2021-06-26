import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";
import { Company } from "src/companys/entities/company.entity";

@Entity()
export class Employee {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;   

    @Column()
    cpf: string;

    @Column()
    email: string; 

    @Column()
    endereco: string; 
    
    @ManyToMany(() => Company, company => company.employees)
    @JoinTable()
    companys: Company[]; 

}
