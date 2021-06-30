import { ApiProperty } from '@nestjs/swagger';

export class CreateEmployeeDto {
    
    @ApiProperty()
    name: string;
  
    @ApiProperty()
    cpf: string;
  
    @ApiProperty()
    email: string;

    @ApiProperty()
    endereco: string;
}
