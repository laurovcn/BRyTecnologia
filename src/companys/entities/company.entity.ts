
import { Employee } from "src/employees/entities/employee.entity";
import {Entity, PrimaryGeneratedColumn, Column, ManyToMany} from "typeorm";
@Entity()
export class Company {

    @PrimaryGeneratedColumn()
    id: number; 
    
    @Column()
    name: string;

    @Column({unique: true})
    cnpj: string;

    @Column()
    endereco: string;

    @ManyToMany(() => Employee, employee => employee.companys)
    employees: Employee[];

}

