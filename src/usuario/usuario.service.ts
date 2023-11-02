import { Injectable } from '@nestjs/common';
import { MostrarDTO } from 'src/usuario/DTO/mostrar.dto';
import { CadastroDTO } from './DTO/cadastro.dto';
import * as bcrypt from 'bcrypt';
import { UsuarioRepository } from './repository/usuario.repository';
import { ApiError } from 'src/config/ApiError';

@Injectable()
export class UsuarioService {
  constructor(private readonly repository: UsuarioRepository) {}

  async cadastro(usuario: CadastroDTO): Promise<MostrarDTO | Error> {
    try {
      usuario.senha = await bcrypt.hash(usuario.senha, 10);
      return await this.repository.cadastro(usuario);
    } catch (error) {
      const apiError = new ApiError(500, error.message, {
        stack: error.stack,
        date: new Date(),
      });

      return apiError;
    }
  }

  async buscarPorID(): Promise<MostrarDTO | void> {}

  async buscarPorEmail(): Promise<MostrarDTO | void> {}

  async buscarPorSetor(): Promise<MostrarDTO[] | void> {}

  async atualizarDados(): Promise<MostrarDTO | void> {}

  async atualizarSetor(): Promise<MostrarDTO | void> {}

  async remover() {}
}
