import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContabancariaModule } from './contabancaria/contabancaria.module';
import { UsuarioModule } from './usuario/usuario.module';
import { SolicitacaoModule } from './solicitacao/solicitacao.module';
import { ProjetoModule } from './projeto/projeto.module';

@Module({
  imports: [
    ContabancariaModule,
    UsuarioModule,
    SolicitacaoModule,
    ProjetoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
