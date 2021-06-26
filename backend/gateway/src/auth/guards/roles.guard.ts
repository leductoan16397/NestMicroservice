import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  public async canActivate(context: ExecutionContext): Promise<boolean> {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (roles.length < 1) {
      return true;
    }
    const { user } = context.switchToHttp().getRequest();

    const hasRole = () =>
      user.roles.some((role: string) => roles.includes(role));

    if (!user) {
      throw new UnauthorizedException('Unauthorized');
    }
    if (!(user.roles && hasRole())) {
      throw new ForbiddenException('Forbidden');
    }
    return user && user.roles && hasRole();
  }
}
