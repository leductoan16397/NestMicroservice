import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class CompanyService {
  constructor(@Inject('COMPANY_SERVICE') private CompanyService: ClientProxy) {}
}
