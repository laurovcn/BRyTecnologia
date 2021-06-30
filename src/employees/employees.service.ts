import { Company } from './../companys/entities/company.entity';
import { Employee } from './entities/employee.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Repository } from 'typeorm';
import {getConnection} from "typeorm";
import { CreateCompanyDto } from 'src/companys/dto/create-company.dto';
@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private employeesRepository: Repository<Employee>,   
  ) {}
  
  async create(createEmployeeDto: CreateEmployeeDto) {    
      return await this.employeesRepository.save(createEmployeeDto);   
  } 

  async addCompany(createCompanyDto: CreateCompanyDto) {    
    const add = await getConnection().manager.findOne(Employee, createCompanyDto);

    add.companys = await getConnection()
        .createQueryBuilder()
        .relation(Employee, "id")
        .of(add) // you can use just post id as well 
        .loadMany();

    add.companys = await getConnection()
        .createQueryBuilder()
        .relation(Company, "id")
        .of(add) // you can use just post id as well
        .loadOne();   
  } 

  async findAll() {    
     return await this.employeesRepository.find()      
  }

  async findOne(id: number) {    
      return this.employeesRepository.findOne({id});  
  } 

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return await this.employeesRepository.update({id}, updateEmployeeDto);
  }

  async remove(id: number) {
    return await this.employeesRepository.delete(id);
  }
}
