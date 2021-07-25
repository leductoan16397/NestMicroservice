import { Controller, Get } from '@nestjs/common';

@Controller('')
export class MemeController {
  @Get()
  getHello(): any {
    return 'meme';
  }
}
