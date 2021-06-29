import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company } from './entities/company.entity';
@Injectable()
export class CompanysService {
  constructor(
    @InjectRepository(Company)
    private companysRepository: Repository<Company>,
  ) {}

   async create(createCompanyDto: CreateCompanyDto) {
    return await this.companysRepository.save(createCompanyDto);
  }

  async findAll() {
    return await this.companysRepository.find();
  }

  async findOne(id: number) {
    return this.companysRepository.findOne({id});
  }
  
  async update(id: number, updateCompanyDto: UpdateCompanyDto) {
    return await this.companysRepository.update({id}, updateCompanyDto);   
  }

  async remove(id: number) {
    return await this.companysRepository.delete(id);
  }
}
