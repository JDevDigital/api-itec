import { Injectable } from '@nestjs/common';
import { MostrarDTO } from 'src/usuario/DTO/mostrar.dto';
import { CadastroDTO } from './DTO/cadastro.dto';
import * as bcrypt from 'bcrypt';
import { UsuarioRepository } from './repository/usuario.repository';
import { AtualizarDTO } from './DTO/atualizar.dto';
import { Setor } from './setor.enum';

@Injectable()
export class UsuarioService {
  constructor(private readonly repository: UsuarioRepository) {}

  async cadastro(usuario: CadastroDTO): Promise<MostrarDTO> {
    try {
      usuario.senha = await bcrypt.hash(usuario.senha, 10);
      return await this.repository.cadastro(usuario);
    } catch (error) {
      return error.message;
    }
  }

  async buscarPorID(id: string): Promise<MostrarDTO> {
    try {
      const usuario = await this.repository.buscarPorID(id);
      return usuario;
    } catch (error) {
      return error.message;
    }
  }

  async buscarPorEmail(email: string): Promise<MostrarDTO> {
    try {
      const usuario = await this.repository.buscarPorEmail(email);
      return usuario;
    } catch (error) {
      return error.message;
    }
  }

  async buscarPorSetor(setor: string): Promise<MostrarDTO[]> {
    try {
      const usuarios = await this.repository.buscarPorSetor(setor);
      return usuarios;
    } catch (error) {
      return error.message;
    }
  }

  async atualizarDados(
    id: string,
    novosDados: AtualizarDTO,
  ): Promise<MostrarDTO> {
    try {
      if (novosDados.email) {
        const usuario = await this.repository.buscarPorEmail(novosDados.email);
        if (usuario) {
          throw new Error('Email já cadastrado');
        }
      }

      const usuarioAtualizado = await this.repository.atualizarDados(
        id,
        novosDados,
      );

      return usuarioAtualizado;
    } catch (error) {
      return error.message;
    }
  }

  async atualizarSetor(id: string, setor: string): Promise<MostrarDTO> {
    try {
      if (!Object.values(Setor).includes(setor as unknown as Setor)) {
        throw new Error('Setor inválido');
      }

      const usuarioAtualizado = await this.repository.atualizarSetor(id, setor);

      return usuarioAtualizado;
    } catch (error) {
      return error.message;
    }
  }

  async remover(id: string) {
    try {
      return await this.repository.remover(id);
    } catch (error) {
      return error.message;
    }
  }
}
