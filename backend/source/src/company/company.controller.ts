import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CompanyService } from './company.service';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @MessagePattern({ service: 'Company', action: 'findAll' })
  findAll() {
    return this.companyService.findAll();
  }
  @MessagePattern({ service: 'Company', action: 'findByCompanyName' })
  findByCompanyName(@Payload() companyName: string) {
    return this.companyService.findByCompanyName(companyName);
  }

  @MessagePattern({ service: 'Company', action: 'create' })
  create(@Payload() data: any) {
    return this.companyService.create(data);
  }

  @MessagePattern({ service: 'Company', action: 'findById' })
  findCompanyById(@Payload() id: any) {
    return this.companyService.findById(id);
  }

  @MessagePattern({ service: 'Company', action: 'update' })
  updateCompanyById(@Payload() data: any) {
    const { id, input } = data;
    return this.companyService.updateById(id, input);
  }

  @MessagePattern({ service: 'Company', action: 'deleteById' })
  deleteCompanyById(@Payload() id: any) {
    return this.companyService.deleteById(id);
  }
}
