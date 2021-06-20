import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class SearchService {
  constructor(
    @Inject('SEARCH_SERVICE') private SearchClientService: ClientProxy,
  ) {}
}
