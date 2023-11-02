import { Injectable } from '@nestjs/common';
import { MostrarDTO } from 'src/usuario/DTO/mostrar.dto';
import { CadastroDTO } from './DTO/cadastro.dto';

@Injectable()
export class UsuarioService {
  constructor() {}

  async cadastro(usuario: CadastroDTO): Promise<MostrarDTO | void> {
    console.log(usuario);
  }

  async buscarPorID(): Promise<MostrarDTO | void> {}

  async buscarPorEmail(): Promise<MostrarDTO | void> {}

  async buscarPorSetor(): Promise<MostrarDTO[] | void> {}

  async atualizarDados(): Promise<MostrarDTO | void> {}

  async atualizarSetor(): Promise<MostrarDTO | void> {}

  async remover() {}
}
