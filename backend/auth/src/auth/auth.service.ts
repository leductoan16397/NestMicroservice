import { JwtPayload } from './interfaces/jwt-payload.interface';
import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
  Logger,
} from '@nestjs/common';
import { addHours } from 'date-fns';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserInterface } from 'user/interfaces/user.interface';
import { v4 } from 'uuid';
import { FastifyRequest } from 'fastify';
import { getClientIp } from 'request-ip';
import { lookup } from 'geoip-country';
import Cryptr from 'cryptr';
import { CreateUserDto } from 'user/dto/create-user.dto';
import { UserService } from 'user/user.service';
import { VerifyUuidDto } from 'auth/dto/verify-uuid.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { RefreshAccessTokenDto } from './dto/refresh-access-token.dto';
import { CreateForgotPasswordDto } from './dto/create-forgot-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { UserModel } from 'user/schemas/user.schema';
import { ForgotPasswordService } from '../forgot-password/forgot-password.service';
import { RefreshTokenService } from 'refresh-token/refresh-token.service';
import { ForgotPasswordInterFace } from 'forgot-password/interfaces/forgot-password.interface';
import { ForgotPasswordModel } from 'forgot-password/schemas/forgot-password.schema';
import { RefreshToken } from 'refresh-token/interface/refresh-token.interface';
import { ConfigService } from 'core/config/config.service';
import { ReqInfo } from './interfaces/requestInfo.interface';
import { RpcException } from '@nestjs/microservices';
import { ManagerUserService } from 'manager-user/manager-user.service';
import { AdminRefreshTokenService } from 'admin-refresh-token/admin-refresh-token.service';
import { AdminRefreshToken } from 'admin-refresh-token/interface/admin-refresh-token.interface';
import { LoginInfo, RefreshTokenInfo } from './interfaces/adminInterface';
import { ManagerUserModel } from 'manager-user/schemas/manager-user.schema';

@Injectable()
export class AuthService {
  cryptr: any;
  jwt: any;
  private readonly logger = new Logger(AuthService.name);
  constructor(
    private readonly appConfig: ConfigService,
    @InjectModel(UserModel.name) private readonly userModel: Model<UserModel>,
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    private readonly managerUserService: ManagerUserService,
    private readonly adminRefreshTokenService: AdminRefreshTokenService,
    private readonly refreshTokenService: RefreshTokenService,
    private readonly forgotPasswordService: ForgotPasswordService,
  ) {
    this.cryptr = new Cryptr(appConfig.get('encrypt_jwt_secret'));
  }

  private async createAccessToken(userId: string): Promise<string> {
    const accessToken = this.jwtService.sign({ userId });
    return this.encryptText(accessToken);
  }

  private async createRefreshToken(reqInfo: ReqInfo, userId: string) {
    const input: RefreshToken = {
      userId,
      refreshToken: v4(),
      ip: reqInfo.ip,
      browser: reqInfo.browser,
      country: reqInfo.country,
    };
    const refreshToken = await this.refreshTokenService.createRefreshToken(
      input,
    );
    return refreshToken;
  }

  async findRefreshToken(token: string) {
    const userId = await this.refreshTokenService.findRefreshToken(token);
    return userId;
  }

  async validateUser(jwtPayload: JwtPayload): Promise<any> {
    const user = await this.userModel.findOne({
      _id: jwtPayload.userId,
      verified: true,
    });
    if (!user) {
      throw new UnauthorizedException('User not found.');
    }
    return user;
  }

  verifyToken = async (token: string): Promise<any> => {
    try {
      const jwtToken = this.jwtExtractor(token);
      const jwtPayload = this.jwtService.verify(jwtToken);
      const user = await this.validateUser(jwtPayload);
      return user;
    } catch (error) {
      throw new RpcException(error);
    }
  };

  private jwtExtractor(token: string): string {
    try {
      token = this.cryptr.decrypt(token);
      return token;
    } catch (error) {
      throw new RpcException('Token incorrect');
      // throw { type: 'Auth', message: 'Token incorrect' };
    }
  }

  returnJwtExtractor() {
    return this.jwtExtractor;
  }

  getIp(req: FastifyRequest): string {
    return getClientIp(req);
  }

  getBrowserInfo(req: FastifyRequest): string {
    return req.headers['user-agent'] || 'XX';
  }

  getCountry(req: FastifyRequest): string {
    return lookup(this.getIp(req))?.country || 'XX';
  }

  encryptText(text: string): string {
    return this.cryptr.encrypt(text);
  }

  async saveForgotPassword(
    req: ReqInfo,
    createForgotPasswordDto: CreateForgotPasswordDto,
  ) {
    const forgotPassword: ForgotPasswordInterFace = {
      email: createForgotPasswordDto.email,
      verification: v4(),
      expires: addHours(new Date(), this.userService.HOURS_TO_VERIFY),
      ip: req.ip,
      browser: req.browser,
      country: req.country,
    };
    await this.forgotPasswordService.createForgotPassword(forgotPassword);
  }

  async setForgotPasswordFirstUsed(
    req: ReqInfo,
    forgotPassword: ForgotPasswordModel,
  ) {
    forgotPassword.firstUsed = true;
    forgotPassword.ipChanged = req.ip;
    forgotPassword.browserChanged = req.browser;
    forgotPassword.countryChanged = req.country;
    await forgotPassword.save();
  }

  async findForgotPasswordByEmail(
    resetPasswordDto: ResetPasswordDto,
  ): Promise<ForgotPasswordModel> {
    const forgotPassword =
      await this.forgotPasswordService.findForgotPasswordByEmail(
        resetPasswordDto.email,
      );
    return forgotPassword;
  }

  async findForgotPasswordByUuid(
    verifyUuidDto: VerifyUuidDto,
  ): Promise<ForgotPasswordModel> {
    const forgotPassword =
      await this.forgotPasswordService.findForgotPasswordByUuid(
        verifyUuidDto.verification,
      );
    return forgotPassword;
  }

  async create(createUserDto: CreateUserDto): Promise<UserInterface> {
    const user = new this.userModel(createUserDto);
    await this.userService.isEmailUnique(user.email);
    this.userService.setRegistrationInfo(user);
    await user.save();
    return this.userService.buildRegistrationInfo(user);
  }

  async verifyEmail(reqInfo: any, verifyUuidDto: VerifyUuidDto) {
    const user = await this.userService.findByVerification(
      verifyUuidDto.verification,
    );
    await this.userService.setUserAsVerified(user);
    return {
      fullName: user.fullName,
      email: user.email,
      accessToken: await this.createAccessToken(user._id),
      refreshToken: await this.createRefreshToken(reqInfo, user._id),
    };
  }

  async login(reqInfo: ReqInfo, loginUserDto: LoginUserDto) {
    const user = await this.userService.findUserByEmail(loginUserDto.email);
    this.userService.isUserBlocked(user);
    await this.userService.checkPassword(loginUserDto.password, user);
    await this.userService.passwordsAreMatch(user);
    return {
      fullName: user.fullName,
      email: user.email,
      accessToken: await this.createAccessToken(user._id),
      refreshToken: await this.createRefreshToken(reqInfo, user._id),
    };
  }

  async refreshAccessToken(refreshAccessTokenDto: RefreshAccessTokenDto) {
    const userId = await this.findRefreshToken(
      refreshAccessTokenDto.refreshToken,
    );
    const user = await this.userModel.findById(userId);
    if (!user) {
      throw new BadRequestException('Bad request');
    }
    return {
      accessToken: await this.createAccessToken(user._id),
    };
  }

  async forgotPassword(
    req: ReqInfo,
    createForgotPasswordDto: CreateForgotPasswordDto,
  ) {
    await this.userService.findByEmail(createForgotPasswordDto.email);
    await this.saveForgotPassword(req, createForgotPasswordDto);
    return {
      email: createForgotPasswordDto.email,
      message: 'verification sent.',
    };
  }

  async forgotPasswordVerify(req: ReqInfo, verifyUuidDto: VerifyUuidDto) {
    const forgotPassword = await this.findForgotPasswordByUuid(verifyUuidDto);
    await this.setForgotPasswordFirstUsed(req, forgotPassword);
    return {
      email: forgotPassword.email,
      message: 'now reset your password.',
    };
  }

  async resetPassword(resetPasswordDto: ResetPasswordDto) {
    const forgotPassword = await this.findForgotPasswordByEmail(
      resetPasswordDto,
    );
    await this.forgotPasswordService.setForgotPasswordFinalUsed(forgotPassword);
    await this.userService.resetUserPassword(resetPasswordDto);
    return {
      email: resetPasswordDto.email,
      message: 'password successfully changed.',
    };
  }

  private async createAdminRefreshToken(userId: string): Promise<string> {
    const input: AdminRefreshToken = {
      userId,
      refreshToken: v4(),
    };
    const refreshToken = await this.adminRefreshTokenService.createRefreshToken(
      input,
    );
    return refreshToken;
  }

  async adminLogin(email: string, password: string): Promise<LoginInfo> {
    const user: ManagerUserModel =
      await this.managerUserService.findUserByEmail(email);
    await this.managerUserService.checkPassword(password, user);
    return {
      fullName: user.fullName,
      email: user.email,
      roles: user.roles,
      accessToken: await this.createAccessToken(user._id),
      refreshToken: await this.createAdminRefreshToken(user._id),
      expires: addHours(new Date(), 1),
    };
  }

  async adminLogout(refreshToken: string): Promise<any> {
    return await this.adminRefreshTokenService.findAndRemoveToken(refreshToken);
  }

  async adminRefreshAccessToken(
    refreshToken: string,
  ): Promise<RefreshTokenInfo> {
    const userId = await this.adminRefreshTokenService.findRefreshToken(
      refreshToken,
    );
    const user = await this.managerUserService.findUerById(userId);
    if (!user) {
      throw new BadRequestException('Bad request');
    }
    return {
      accessToken: await this.createAccessToken(user._id),
      expires: addHours(new Date(), 1),
    };
  }

  async adminResetPassword(email: string, password: string): Promise<void> {
    return await this.managerUserService.changePassword(email, password);
  }

  adminVerifyToken = async (token: string): Promise<ManagerUserModel> => {
    try {
      const jwtToken = this.jwtExtractor(token);
      const jwtPayload = this.jwtService.verify(jwtToken);
      const user = await this.managerUserService.validateUser(jwtPayload);
      return user;
    } catch (error) {
      throw new RpcException(error);
    }
  };
}
