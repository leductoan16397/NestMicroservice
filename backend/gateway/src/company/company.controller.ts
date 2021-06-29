import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { MessagePatternInterface } from 'interface/messageParten.interface';
import { SERVICE } from 'interface/service.enum';
import { Observable } from 'rxjs';
import { CreateCompanyDto } from './dto/create-company.dto';

@ApiTags('Company')
@Controller('company')
export class CompanyController {
  constructor(@Inject('COMPANY_SERVICE') private CompanyService: ClientProxy) {}

  @Get()
  getHello(): Observable<string> {
    const pattern = { cmd: 'hello' };
    const payload = 'company';
    return this.CompanyService.send<string>(pattern, payload);
  }

  @Get('findall')
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
}
