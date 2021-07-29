import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { AdminRefreshToken } from './interface/admin-refresh-token.interface';
import { AdminRefresTokenModel } from './schemas/admin-refresh-token.schema';

@Injectable()
export class AdminRefreshTokenService {
  constructor(
    @InjectModel(AdminRefresTokenModel.name)
    private readonly adminRefreshTokenModel: Model<AdminRefresTokenModel>,
  ) {}

  async createRefreshToken(input: AdminRefreshToken): Promise<string> {
    const refreshToken = new this.adminRefreshTokenModel(input);
    await refreshToken.save();
    return refreshToken.refreshToken;
  }

  async findRefreshToken(token: string): Promise<string> {
    const refreshToken = await this.adminRefreshTokenModel.findOne({
      refreshToken: token,
    });
    if (!refreshToken) {
      throw new UnauthorizedException('User has been logged out.');
    }
    return refreshToken.userId;
  }

  async findAndRemoveToken(token: string): Promise<void> {
    await this.adminRefreshTokenModel.findOneAndRemove({ refreshToken: token });
  }
}
