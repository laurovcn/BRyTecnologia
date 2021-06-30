import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { CreateCompanyDto } from './create-company.dto';

export class UpdateCompanyDto extends PartialType(CreateCompanyDto) {

    @ApiProperty()
    name: string;
  
    @ApiProperty()
    cnpj: string;  
   
    @ApiProperty()
    endereco: string;
}
