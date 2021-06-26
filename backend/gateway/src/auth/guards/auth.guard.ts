import {
  Injectable,
  Inject,
  CanActivate,
  ExecutionContext,
  HttpException,
  UnauthorizedException,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { MessagePatternInterface } from 'interface/message-parten.interface';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authServiceClient: ClientProxy, // @Inject('USER_SERVICE') private readonly userServiceClient: ClientProxy,
  ) {}

  public async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization || request.headers.bearer;
    const message: MessagePatternInterface = {
      service: 'Auth',
      action: 'verify-token',
    };
    const user = await this.authServiceClient.send(message, token).toPromise();

    if (!user) {
      throw new UnauthorizedException();
    }
    request.user = user;
    return true;
  }
}
