import helmet from 'helmet';
// import csurf from 'csurf';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { createDocument } from './swagger/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

   // to protect the app from some well-known web vulnerabilities by setting HTTP headers appropriately
   app.use(helmet());

   // Cross-origin resource sharing (CORS) is a mechanism that allows resources to be requested from another domain
   app.enableCors();

   // csurf config 
   // TODO: Solve csurf issue 
  // app.use(csurf());
 
  
  // swagger config
  const document = createDocument(app);
  SwaggerModule.setup('api/docs', app, document);
  await app.listen(3000);
}
bootstrap();
