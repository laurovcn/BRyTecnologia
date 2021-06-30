import { ApiProperty } from '@nestjs/swagger';

export class CreateCompanyDto {

    @ApiProperty()
    name: string;
  
    @ApiProperty()
    cnpj: string;  
   
    @ApiProperty()
    endereco: string;
}
