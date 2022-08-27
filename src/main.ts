import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { createDocument } from './swagger/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // swagger config
  const document = createDocument(app);
  SwaggerModule.setup('api/docs', app, document);
  await app.listen(3000);
}
bootstrap();
