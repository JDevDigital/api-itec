import { Module } from '@nestjs/common';
import { ContabancariaService } from './contabancaria.service';
import { ContabancariaController } from './contabancaria.controller';

@Module({
  providers: [ContabancariaService],
  controllers: [ContabancariaController]
})
export class ContabancariaModule {}
