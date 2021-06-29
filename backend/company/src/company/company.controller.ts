import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CompanyService } from './company.service';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @MessagePattern({ service: 'Company', action: 'findAll' })
  findAll(@Payload() data: any) {
    return this.companyService.findAll();
  }

  @MessagePattern({ service: 'Company', action: 'create' })
  create(@Payload() data: any) {
    return this.companyService.create(data);
  }
}
