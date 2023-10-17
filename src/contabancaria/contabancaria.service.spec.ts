import { Test, TestingModule } from '@nestjs/testing';
import { ContabancariaService } from './contabancaria.service';

describe('ContabancariaService', () => {
  let service: ContabancariaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContabancariaService],
    }).compile();

    service = module.get<ContabancariaService>(ContabancariaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
