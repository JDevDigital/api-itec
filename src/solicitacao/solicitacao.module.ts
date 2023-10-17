import { Module } from '@nestjs/common';
import { SolicitacaoService } from './solicitacao.service';
import { SolicitacaoController } from './solicitacao.controller';

@Module({
  providers: [SolicitacaoService],
  controllers: [SolicitacaoController]
})
export class SolicitacaoModule {}
