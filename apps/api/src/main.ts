import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const port = process.env.PORT || 3000;
  const host = process.env.HOST || undefined;
  app.enableCors({origin: process.env.ORIGIN, credentials: true});
  await app.listen(port, host);
}

void bootstrap();
