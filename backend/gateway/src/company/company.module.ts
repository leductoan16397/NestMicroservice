import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigService } from 'core/config/config.service';
import { CoreModule } from 'core/core.module';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: 'COMPANY_SERVICE',
        imports: [CoreModule],
        useFactory: async (configService: ConfigService) => ({
          transport: Transport.REDIS,
          options: {
            url: `redis://${configService.get(
              'redis_host',
            )}:${configService.get('redis_port')}`,
          },
        }),
        inject: [ConfigService],
      },
    ]),
  ],
  controllers: [CompanyController],
  providers: [CompanyService],
})
export class CompanyModule {}
