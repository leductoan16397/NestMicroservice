import { Catch, ArgumentsHost } from '@nestjs/common';
import { BaseRpcExceptionFilter, RpcException } from '@nestjs/microservices';

@Catch(RpcException)
export class AllExceptionsFilter extends BaseRpcExceptionFilter {
  catch(exception: RpcException, host: ArgumentsHost) {
    return super.catch(exception, host);
  }
}
