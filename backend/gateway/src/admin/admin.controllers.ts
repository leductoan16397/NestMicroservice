import { Controller, Get } from '@nestjs/common';

@Controller('admin')
export class AdminController {
  @Get()
  getHello(): any {
    return 'AdminController';
  }
}
