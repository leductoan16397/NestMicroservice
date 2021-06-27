import {
  Injectable,
  Inject,
  CanActivate,
  ExecutionContext,
  HttpException,
  UnauthorizedException,
  HttpStatus,
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
    try {
      const user = await this.authServiceClient
        .send(message, token)
        .toPromise();

      if (!user) {
        throw new UnauthorizedException();
      }
      request.user = user;
      return true;
    } catch (error) {
      if (error.error?.name === 'TokenExpiredError') {
        throw new HttpException(error.message, HttpStatus.UNAUTHORIZED);
      }
      if (error.error?.type === 'Auth') {
        throw new HttpException(error.message, HttpStatus.UNAUTHORIZED);
      }
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
