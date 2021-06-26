
import {Entity, PrimaryGeneratedColumn, Column, ManyToMany} from "typeorm";
import { Employee } from "src/employees/entities/employee.entity";

@Entity()
export class Company {

    @PrimaryGeneratedColumn()
    id: number; 
    
    @Column()
    name: string;

    @Column()
    cnpj: string;

    @Column()
    endereco: string; 

    @ManyToMany(() => Employee, employee => employee.companys)
    employees: Employee[];
    
}

