import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller('language')
export class LanguageController {
  constructor(
    @Inject('LANGUAGE_SERVICE') private LanguageService: ClientProxy,
  ) {}

  @Get()
  getHello(): Observable<string> {
    const pattern = { cmd: 'hello' };
    const payload = 'language';
    return this.LanguageService.send<string>(pattern, payload);
  }
}
