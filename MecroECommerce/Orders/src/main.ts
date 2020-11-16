import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const option = new DocumentBuilder()
  .setTitle('Order API')
  .setDescription('Order Microservice API')
  .setVersion('1.0.0')
  .build();
  
  const doc = SwaggerModule.createDocument(app,option);
  SwaggerModule.setup('Order/swagger',app,doc);
  await app.listen(7003);
}

bootstrap();
