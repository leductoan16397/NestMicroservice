import { Delete, Put } from '@nestjs/common';
import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { MessagePatternInterface } from 'interface/messageParten.interface';
import { SERVICE } from 'interface/service.enum';
import { Observable } from 'rxjs';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@ApiTags('Company')
@Controller('company')
export class CompanyController {
  constructor(@Inject('COMPANY_SERVICE') private CompanyService: ClientProxy) {}

  @Get()
  findAll() {
    const message: MessagePatternInterface = {
      service: SERVICE.COMPANY,
      action: 'findAll',
    };
    return this.CompanyService.send(message, {});
  }

  @Post()
  create(@Body() data: CreateCompanyDto) {
    const message: MessagePatternInterface = {
      service: SERVICE.COMPANY,
      action: 'create',
    };
    return this.CompanyService.send(message, data);
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    const message: MessagePatternInterface = {
      service: SERVICE.COMPANY,
      action: 'findById',
    };
    return this.CompanyService.send(message, id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() input: UpdateCompanyDto) {
    const message: MessagePatternInterface = {
      service: SERVICE.COMPANY,
      action: 'update',
    };
    return this.CompanyService.send(message, { id, input });
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    const message: MessagePatternInterface = {
      service: SERVICE.COMPANY,
      action: 'deleteById',
    };
    return this.CompanyService.send(message, id);
  }
}
