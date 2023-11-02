import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { MostrarDTO } from 'src/usuario/DTO/mostrar.dto';
import { CadastroDTO } from './DTO/cadastro.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Usuários')
@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post('cadastro')
  public async cadastro(
    @Body() usuario: CadastroDTO,
  ): Promise<MostrarDTO | Error> {
    return await this.usuarioService.cadastro(usuario);
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
    return await this.usuarioService.buscarPorSetor();
  }

  @Put('editar-usuario')
  public async atualizarDados(): Promise<MostrarDTO | void> {
    return await this.usuarioService.atualizarDados();
  }

  @Put('editar-nivel')
  public async atualizarNivel(): Promise<MostrarDTO | void> {
    return await this.usuarioService.atualizarSetor();
  }

  @Delete(':id')
  public async remover() {
    return await this.usuarioService.remover();
  }
}
