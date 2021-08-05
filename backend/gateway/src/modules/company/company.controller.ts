import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { MessagePatternInterface } from 'interface/messageParten.interface';
import { SERVICE } from 'interface/service.enum';

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

  @Get(':id')
  findById(@Param('id') id: string) {
    const message: MessagePatternInterface = {
      service: SERVICE.COMPANY,
      action: 'findById',
    };
    return this.CompanyService.send(message, id);
  }
}
