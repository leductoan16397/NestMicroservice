import { Module } from '@nestjs/common';
import { CoreModule } from 'core/core.module';
import { SearchModule } from './search/search.module';
import { JobSearchModule } from './job-search/job-search.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from 'core/config/config.service';

@Module({
  imports: [
    CoreModule,
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
    SearchModule,
    JobSearchModule,
  ],
})
export class AppModule {}
