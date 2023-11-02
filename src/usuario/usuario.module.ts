import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { UsuarioRepository } from './repository/usuario.repository';

@Module({
  providers: [UsuarioService, UsuarioRepository],
  controllers: [UsuarioController],
})
export class UsuarioModule {}
