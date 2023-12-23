import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as compression from 'compression';
import helmet from 'helmet';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger();

  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.use(helmet());
  app.use(compression());
  app.setGlobalPrefix('/api/v1');

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Gym Finder')
    .setDescription("Gym Finder API's")
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs', app, document);

  const config = app.get(ConfigService);
  const PORT = config.get<number>('PORT');

  await app.listen(PORT, async () => {
    const appBaseUrl = await app.getUrl();

    logger.log(
      `App is running on: ${appBaseUrl} and Swagger UI is on: ${appBaseUrl}/docs`,
    );
  });
}
bootstrap();
