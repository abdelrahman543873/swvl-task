import { INestApplication, ValidationPipe } from '@nestjs/common';
import { AppModule } from 'src/app.module';
import { Test, TestingModule } from '@nestjs/testing';
import dotenv from 'dotenv';

export let app: INestApplication;
// this is done this way to be able to inject repositories into factories
export const moduleRef = async (): Promise<TestingModule> => {
  return await Test.createTestingModule({
    imports: [AppModule],
  }).compile();
};
// to be imported for making requests

beforeAll(async () => {
  jest.setTimeout(1000000);
  const module = await moduleRef();
  dotenv.config();
  app = module.createNestApplication();
  await app.init();
});

afterAll(async () => {
  await app.close();
});
