import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from 'core/config/config.service';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log(new ConfigService().get('mongo_host'));
  console.log(new ConfigService().get('mongo_port'));
  console.log(new ConfigService().get('mongo_root_user'));
  console.log(new ConfigService().get('mongo_root_user_password'));

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.REDIS,
      options: {
        retryAttempts: 5,
        retryDelay: 3000,
        url: `redis://${new ConfigService().get(
          'redis_host',
        )}:${new ConfigService().get('redis_port')}`,
      },
    },
  );
  await app.listen();
}
bootstrap();
