import { NestFactory } from '@nestjs/core';
import { fastifyHelmet } from 'fastify-helmet';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import fastifyCsrf from 'fastify-csrf';
import fastifyCookie from 'fastify-cookie';
import compression from 'fastify-compress';
import { MainModule } from 'main.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { UserModule } from 'modules/user/user.module';
import { AuthModule } from 'modules/auth/auth.module';
import { ValidationPipe } from '@nestjs/common';
import { ExceptionFactory } from 'core-modules/core/exception/exceptionFactory';
import { LoggerConfig } from 'core-modules/logger/logger.config';
import { contentParser } from 'fastify-multer';
import { ConfigService } from 'core-modules/core/config/config.service';
import { JobModule } from 'modules/job/job.module';
import { CompanyModule } from 'modules/company/company.module';
import { LanguageModule } from 'modules/language/language.module';
import { SearchModule } from 'modules/search/search.module';
import { ReviewModule } from 'modules/review/review.module';
import { AdminModule } from 'admin/admin.module';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    MainModule,
    new FastifyAdapter(),
  );

  // ennable CORS
  app.enableCors();

  // register helmet plugin
  await app.register(fastifyHelmet, {
    contentSecurityPolicy: false,
  });
  // CSRF Protection
  app.register(fastifyCookie);
  app.register(fastifyCsrf);

  // register compression plugin
  app.register(compression);

  // register validatiion Pipe (validate input)
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      exceptionFactory: ExceptionFactory,
    }),
  );

  app.register(contentParser);

  // const appConfig: ConfigService = app.get('ConfigService');

  // swagger
  const swaggerOptions = new DocumentBuilder()
    .setTitle('Nest Tutorial')
    .setDescription('API Documentation')
    .setVersion('1.0.0')
    .addBasicAuth()
    .build();

  const document = SwaggerModule.createDocument(app, swaggerOptions, {
    include: [
      AuthModule,
      CompanyModule,
      ReviewModule,
      JobModule,
      UserModule,
      LanguageModule,
      SearchModule,
    ],
  });

  SwaggerModule.setup('api-docs', app, document, {
    swaggerOptions: {
      docExpansion: 'list',
      filter: true,
      showRequestDuration: true,
    },
  });

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }

  // use custom logger
  app.useLogger(LoggerConfig);

  // launch app
  await app.listen(/* appConfig.get('port') */ 8000, '0.0.0.0');
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
