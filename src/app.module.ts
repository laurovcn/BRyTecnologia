import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesModule } from './employees/employees.module';
import { CompanysModule } from './companys/companys.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Dev612@dev',
      database: 'dev',
      entities: [__dirname + '/**/*.entity{.ts,.js}',],
      synchronize: true,
    }),
    EmployeesModule,
    CompanysModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
