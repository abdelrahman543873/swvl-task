import { INestApplication, ValidationPipe } from '@nestjs/common';
import { AppModule } from 'src/app.module';
import { Test, TestingModule } from '@nestjs/testing';
import dotenv from 'dotenv';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from 'src/_common/exceptions/exception.filter';

export let app: INestApplication;
// this is done this way to be able to inject repositories into factories
export const moduleRef = async (): Promise<TestingModule> => {
  return await Test.createTestingModule({
    imports: [AppModule],
    providers: [
      {
        provide: APP_FILTER,
        useClass: HttpExceptionFilter,
      },
    ],
  }).compile();
};
// to be imported for making requests

beforeAll(async () => {
  jest.setTimeout(1000000);
  const module = await moduleRef();
  dotenv.config();
  app = module.createNestApplication();
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  await app.init();
});

afterAll(async () => {
  await app.close();
});
