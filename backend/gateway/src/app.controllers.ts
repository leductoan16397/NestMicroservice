import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'auth/guards/auth.guard';
import { AppService } from './app.service';

@Controller('')
@UseGuards(AuthGuard)
export class AppController {
  @Get()
  getHello(): any {
    return 'ok';
  }
}
