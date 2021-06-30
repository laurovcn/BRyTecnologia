import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, HttpException, HttpStatus, Res } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { CreateCompanyDto } from 'src/companys/dto/create-company.dto';
@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post()
  async create(@Body() createEmployeeDto: CreateEmployeeDto, @Res() res) {
    try {
      const result = await this.employeesService.create(createEmployeeDto);
      if (!result) {
        throw new BadRequestException('Cannot create employee')
      }
      res.status(201).json({message:"Sucessfull at create employee", result})

    } catch {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'Cannot create employee',
      }, HttpStatus.FORBIDDEN);
    }    
  }

  @Post('add')
  async addCompany(@Body() createCompanyDto: CreateCompanyDto) {   
     return await this.employeesService.addCompany(createCompanyDto);     
  }

  @Get()
  async findAll(@Res() res) {
    try {
      const result = await this.employeesService.findAll();
      if (!result) {
        throw new BadRequestException('Cannot find employees')
      }
      res.status(200).json({message:"Sucessfull at find all employees", result})

    } catch {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'Cannot find employees',
      }, HttpStatus.FORBIDDEN);
    }   
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res) {
    try { 
      const result = await this.employeesService.findOne(+id);
      if (!result) {
        throw new BadRequestException('Cannot find employee');
      }
      res.status(200).json({message:"Sucessfull at find employee", result})

    } catch {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'Cannot find employee',
      }, HttpStatus.FORBIDDEN);
     } 
   } 

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateEmployeeDto: UpdateEmployeeDto , @Res() res) {
    try { 
      const result = await this.employeesService.update(+id, updateEmployeeDto);
      if (!result) {
        throw new BadRequestException('Cannot find employee');
      }
       res.status(200).json({message: "Sucessfull at update"})

    }  catch {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'Cannot find employee',
      }, HttpStatus.FORBIDDEN);
     }   
  }
 
  @Delete(':id')
  async remove(@Param('id') id: number, @Res() res) {
   try {
    const result = await this.employeesService.remove(+id);
    if (result.affected === 0) {
      throw new BadRequestException('Employee id not found.');
    }
    res.status(200).json({message: "Succesfull at delete"})
    
  }  catch {
    throw new HttpException({
      status: HttpStatus.FORBIDDEN,
      error: 'Employee id not found',
    }, HttpStatus.FORBIDDEN);
   }   
  }

}
