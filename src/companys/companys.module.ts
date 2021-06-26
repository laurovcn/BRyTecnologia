import { Company } from './entities/company.entity';
import { Module } from '@nestjs/common';
import { CompanysService } from './companys.service';
import { CompanysController } from './companys.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Company])],
  controllers: [CompanysController],
  providers: [CompanysService]
})
export class CompanysModule {}
