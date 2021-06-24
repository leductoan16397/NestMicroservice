import {
  Injectable,
  Inject,
  CanActivate,
  ExecutionContext,
  HttpException,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authServiceClient: ClientProxy, // @Inject('USER_SERVICE') private readonly userServiceClient: ClientProxy,
  ) {}

  public async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const request = context.switchToHttp().getRequest();
      //   const userTokenInfo = await this.authServiceClient
      //     .send('verify', {
      //       token: request.headers.authorization,
      //     })
      //     .toPromise();

      //   if (!userTokenInfo || !userTokenInfo.data) {
      //     throw new HttpException(
      //       {
      //         message: userTokenInfo.message,
      //         data: null,
      //         errors: null,
      //       },
      //       userTokenInfo.status,
      //     );
      //   }

      // const userInfo = await this.userServiceClient
      //   .send('user_get_by_id', userTokenInfo.data.userId)
      //   .toPromise();

      // request.user = userInfo.user;
      request.user = '';
      return true;
    } catch (error) {
      console.log(error);
    }
  }
}
