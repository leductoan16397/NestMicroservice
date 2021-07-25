import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'modules/auth/guards/auth.guard';
import { AppService } from './main.service';

@Controller('')
@UseGuards(AuthGuard)
export class AppController {
  @Get()
  getHello(): any {
    return 'ok';
  }
}
