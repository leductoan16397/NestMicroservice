import { Module, OnModuleInit } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigService } from 'core-modules/core/config/config.service';
import { CoreModule } from 'core-modules/core/core.module';
import { CompanyController } from './company.controller';

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
})
export class CompanyModule implements OnModuleInit {
  onModuleInit() {
    console.log(`CompanyModule has been initialized.`);
  }
}
