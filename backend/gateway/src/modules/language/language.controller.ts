import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
@ApiTags('Language')
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
