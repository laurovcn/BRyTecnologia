import { BadRequestException, HttpException, HttpStatus, Res } from '@nestjs/common';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompanysService } from './companys.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Controller('companys')
export class CompanysController {
  constructor(private readonly companysService: CompanysService) {}

  @Post()
  async create(@Body() createCompanyDto: CreateCompanyDto, @Res() res) {
    try { 
      const result = await this.companysService.create(createCompanyDto);
      if (!result) {
        throw new BadRequestException('Cannot create company')
      }
      res.status(201).json({message:"Sucessfull at create company", result})

    } catch {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'Cannot create company',
      }, HttpStatus.FORBIDDEN);
    }    
  }

  @Get()
  async findAll(@Res() res) {
    try {
      const result = await this.companysService.findAll();
      if (!result) {
        throw new BadRequestException('Cannot find companys')
      }
      res.status(200).json({message:"Sucessfull at find all companys", result})

    } catch {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'Cannot find companys',
      }, HttpStatus.FORBIDDEN);
    }   
  }


  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res) {
    try { 
      const result = await this.companysService.findOne(+id);
      if (!result) {
        throw new BadRequestException('Cannot find company');
      }
      res.status(200).json({message:"Sucessfull at find company", result})

    } catch {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'Cannot find company',
      }, HttpStatus.FORBIDDEN);
     } 
   }
   @Get('employees/:id')
   async findOneWithEmployees(@Param('id') id: string, @Res() res) {
     try {
       const result = await this.companysService.findOneWithEmployees(+id);
       if (!result) {
         throw new BadRequestException('Cannot find company');
       }
       res.status(200).json({message:"Sucessfull at find employees of company", result})
 
      } catch {
       throw new HttpException({
         status: HttpStatus.FORBIDDEN,
         error: 'Cannot find company',
       }, HttpStatus.FORBIDDEN);
      }    
   }

   @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCompanyDto: UpdateCompanyDto , @Res() res) {
    try { 
      const result = await this.companysService.update(+id, updateCompanyDto);
      if (!result) {
        throw new BadRequestException('Cannot find company');
      }
       res.status(200).json({message: "Sucessfull at update company"})

    }  catch {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'Cannot find company',
      }, HttpStatus.FORBIDDEN);
     }   
  }

  @Delete(':id')
  async remove(@Param('id') id: number, @Res() res) {
   try {
    const result = await this.companysService.remove(+id);
    if (result.affected === 0) {
      throw new BadRequestException('Company id not found.');
    }
    res.status(200).json({message: "Succesfull at delete"})
    
  }  catch {
    throw new HttpException({
      status: HttpStatus.FORBIDDEN,
      error: 'Company id not found',
    }, HttpStatus.FORBIDDEN);
   }   
  }
}
