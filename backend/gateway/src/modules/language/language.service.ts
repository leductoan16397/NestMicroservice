import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class LanguageService {
  constructor(
    @Inject('LANGUAGE_SERVICE') private LanguageService: ClientProxy,
  ) {}
}
