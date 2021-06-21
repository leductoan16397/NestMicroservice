import { Module } from '@nestjs/common';
import { ConfigService } from './services/config/config.service';
import { ConfirmedStrategyService } from './services/confirmed-strategy.service';
import { PermissionController } from './permission.controller';
import { CoreModule } from 'core/core.module';

@Module({
  imports: [CoreModule],
  controllers: [PermissionController],
  providers: [ConfigService, ConfirmedStrategyService],
})
export class PermissionModule {}
