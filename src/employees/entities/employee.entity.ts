import { Company } from "src/companys/entities/company.entity";
import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";
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
    
    @ManyToMany(() => Company, company => company.employees, {cascade: true, 
        eager: true
    })
    @JoinTable()
    companys: Company[];
       
}       
