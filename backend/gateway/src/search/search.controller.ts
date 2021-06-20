import { Controller, Inject, Get } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller('search')
export class SearchController {
  constructor(
    @Inject('SEARCH_SERVICE') private SearchClientService: ClientProxy,
  ) {}

  @Get()
  getHello(): Observable<string> {
    const pattern = { cmd: 'hello' };
    const payload = 'search';
    return this.SearchClientService.send<string>(pattern, payload);
  }
}
