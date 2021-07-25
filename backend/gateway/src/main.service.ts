import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(@Inject('MATH_SERVICE') private client: ClientProxy) {}

  getHello(): Observable<string> {
    const pattern = { cmd: 'hello' };
    const payload = [1, 2, 3];
    return this.client.send<string>(pattern, payload);
  }
}
