import { Employee } from './entities/employee.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Repository } from 'typeorm';
@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private employeesRepository: Repository<Employee>,   
  ) {}
  
  async create(createEmployeeDto: CreateEmployeeDto) {    
      return await this.employeesRepository.save(createEmployeeDto);   
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
