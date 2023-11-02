import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { UsuarioRepository } from './repository/usuario.repository';
import { ApiError } from 'src/config/ApiError';

@Module({
  providers: [UsuarioService, UsuarioRepository, ApiError],
  controllers: [UsuarioController],
})
export class UsuarioModule {}
