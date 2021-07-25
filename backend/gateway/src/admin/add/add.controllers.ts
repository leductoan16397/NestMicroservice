import { Controller, Get } from '@nestjs/common';

@Controller('')
export class AddController {
  @Get()
  getHello(): any {
    return 'add';
  }
}
