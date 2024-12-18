import helmet from 'helmet';
// import csurf from 'csurf';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { createDocument } from './swagger/swagger';
import { ConfigService } from './config/config.service';
import { Logger } from './logger/logger';
import { NestApplicationOptions, ValidationPipe } from '@nestjs/common';

const NEST_LOGGING = true;
async function bootstrap() {
  const opts: NestApplicationOptions = {};
  if (!NEST_LOGGING) {
    opts.logger = false;
  }
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1/public');

  // to protect the app from some well-known web vulnerabilities by setting HTTP headers appropriately
  app.use(helmet());

  // Cross-origin resource sharing (CORS) is a mechanism that allows resources to be requested from another domain
  app.enableCors();

  // csurf config
  // TODO: Solve csurf issue
  // app.use(csurf());

  app.useLogger(app.get(Logger));
  const configService = app.get(ConfigService);

  // validation pipeline
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  // swagger config
  const document = createDocument(app);
  SwaggerModule.setup('api/docs', app, document);
  await app.listen(configService.get().port);
}
bootstrap();
