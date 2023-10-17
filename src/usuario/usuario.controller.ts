import { Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { MostrarDTO } from 'src/usuario/DTO/mostrar.dto';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post('cadastro')
  public async cadastro(): Promise<MostrarDTO | void> {
    return await this.usuarioService.cadastro();
  }

  @Get(':id')
  public async buscarPorID(): Promise<MostrarDTO | void> {
    return await this.usuarioService.buscarPorID();
  }

  @Get()
  public async buscarPorEmail(
    @Query('email') email: string,
  ): Promise<MostrarDTO | void> {
    console.log(email);
    return await this.usuarioService.buscarPorEmail();
  }

  @Get()
  public async buscarPorNivel(
    @Query('nivel') nivel: string,
  ): Promise<MostrarDTO[] | void> {
    console.log(nivel);
    return await this.usuarioService.buscarPorNivel();
  }

  @Put('editar-usuario')
  public async atualizarDados(): Promise<MostrarDTO | void> {
    return await this.usuarioService.atualizarDados();
  }

  @Put('editar-nivel')
  public async atualizarNivel(): Promise<MostrarDTO | void> {
    return await this.usuarioService.atualizarNivel();
  }

  @Delete(':id')
  public async remover() {
    return await this.usuarioService.remover();
  }
}
