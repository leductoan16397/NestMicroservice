import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';

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
}
