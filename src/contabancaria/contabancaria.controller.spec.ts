import { Test, TestingModule } from '@nestjs/testing';
import { ContabancariaController } from './contabancaria.controller';

describe('ContabancariaController', () => {
  let controller: ContabancariaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContabancariaController],
    }).compile();

    controller = module.get<ContabancariaController>(ContabancariaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
