import { Injectable, Logger } from '@nestjs/common';
import { FastifyRequest } from 'fastify';
import { getClientIp } from 'request-ip';
import { lookup } from 'geoip-country';
import Cryptr from 'cryptr';
import { ConfigService } from 'core/config/config.service';

@Injectable()
export class AuthService {
  cryptr: any;
  private readonly logger = new Logger(AuthService.name);
  constructor(private readonly appConfig: ConfigService) {
    this.cryptr = new Cryptr(appConfig.get('encrypt_jwt_secret'));
  }

  getReqInfo(request: FastifyRequest) {
    return {
      ip: this.getIp(request),
      browser: this.getBrowserInfo(request),
      country: this.getCountry(request),
    };
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
}
