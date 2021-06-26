import { Controller, Inject, Get } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';

@ApiTags('Search')
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
