import { ValidationError, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { BusinessException } from './shared/http/exception/business-execption';
import { ValidationFilter } from './shared/http/filter/validation-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(
    new ValidationFilter()
  );

  app.enableCors();

  app.useGlobalPipes(new ValidationPipe({
    skipMissingProperties: true,
    exceptionFactory: (errors: ValidationError[]) => {
      const messages = errors.map((error) =>
        `${Object.values(error.constraints).join('')}.`)
      return new BusinessException(messages[0]);
    }
  }));

  const options = new DocumentBuilder()
    .setTitle('NodeJS-Interview')
    .setDescription('NodeJS Interview')
    .setVersion('1.0')
    .addTag('compasso')
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api/docs', app, document);

  await app.listen(3000);
}
bootstrap();
