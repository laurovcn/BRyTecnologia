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
    return await this.employeesRepository.find({relations: ["companys"]});
  }

  async findOne(id: number) {
    return this.employeesRepository.findOne({id});
  }

  async findOneWithCompanys(id: number) {
    return this.employeesRepository.findOne({id}, {relations:["companys"]});
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    await this.employeesRepository.update({id}, updateEmployeeDto);
    return await this.employeesRepository.findOne({id});
  }

  async remove(id: number) {
    return await this.employeesRepository.delete(id);
  }
}
