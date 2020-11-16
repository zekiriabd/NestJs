import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options  = new DocumentBuilder()
  .setTitle('Cats example')
  .setDescription('The cats API description')
  .setVersion('1.0')
  .addBearerAuth( { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'bearer-key')
  .addTag('cats')
  .build();
  const document = SwaggerModule.createDocument(app, options );
  SwaggerModule.setup('swagger', app, document);
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
    allowedHeaders: 'Content-Type, Accept',
  });
  await app.listen(3000);
}
bootstrap();
