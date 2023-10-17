import { Injectable } from '@nestjs/common';
import { MostrarDTO } from 'src/usuario/DTO/mostrar.dto';

@Injectable()
export class UsuarioService {
  constructor() {}

  async cadastro(): Promise<MostrarDTO | void> {}

  async buscarPorID(): Promise<MostrarDTO | void> {}

  async buscarPorEmail(): Promise<MostrarDTO | void> {}

  async buscarPorNivel(): Promise<MostrarDTO[] | void> {}

  async atualizarDados(): Promise<MostrarDTO | void> {}

  async atualizarNivel(): Promise<MostrarDTO | void> {}

  async remover() {}
}
