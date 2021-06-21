import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'auth/auth.module';
import { ConfigService } from 'core/config/config.service';
import { CoreModule } from 'core/core.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    CoreModule,
    AuthModule,
    MongooseModule.forRoot('mongodb://mongo:27017/nest-mern', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }),
    MongooseModule.forRootAsync({
      useFactory: (configService = new ConfigService()) => ({
        uri: `mongodb://${configService.get('mongo_host')}:${configService.get(
          'mongo_port',
        )}/nest-mern`,
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
