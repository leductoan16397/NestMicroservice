import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'auth/auth.module';
import { ConfigService } from 'core/config/config.service';
import { CoreModule } from 'core/core.module';
import { ExceptionFilter } from 'core/exception/rpc-exception.filter';
import { UserModule } from 'user/user.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [CoreModule],
      useFactory: async (configService: ConfigService) => ({
        uri: `mongodb://${configService.get(
          'mongo_root_user',
        )}:${configService.get('mongo_root_user_password')}@${configService.get(
          'mongo_host',
        )}:${configService.get('mongo_port')}/${configService.get(
          'database',
        )}?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false`,
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
      }),
      inject: [ConfigService],
    }),
    CoreModule,
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
