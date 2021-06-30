import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeeDto } from './create-employee.dto';
export class UpdateEmployeeDto extends PartialType(CreateEmployeeDto) {

    @ApiProperty()
    name: string;
  
    @ApiProperty()
    cnpj: string;  
   
    @ApiProperty()
    endereco: string;
}
