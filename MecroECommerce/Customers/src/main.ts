import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const option = new DocumentBuilder()
  .setTitle('Customer API')
  .setDescription('Customer Microservice API')
  .setVersion('1.0.0')
  .build();
  
  const doc = SwaggerModule.createDocument(app,option);
  SwaggerModule.setup('Customer/swagger',app,doc);
  await app.listen(7002);
}
bootstrap();
