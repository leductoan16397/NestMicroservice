import { Controller, Inject, Get, Post, Body } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { MessagePatternInterface } from 'interface/messageParten.interface';
import { SERVICE } from 'interface/service.enum';
import { Observable } from 'rxjs';
import { JobSearchDto } from './dto/job-search.dto';

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

  @Post('jobsearch')
  searchJob(@Body() { text }: JobSearchDto) {
    const message: MessagePatternInterface = {
      service: SERVICE.JOBSEARCH,
      action: 'search',
    };
    return this.SearchClientService.send<string>(message, text || ' ');
  }
}
