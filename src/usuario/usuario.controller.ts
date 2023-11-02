import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
  Param,
  Request,
} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { MostrarDTO } from 'src/usuario/DTO/mostrar.dto';
import { CadastroDTO } from './DTO/cadastro.dto';
import { ApiTags } from '@nestjs/swagger';
import { AtualizarDTO } from './DTO/atualizar.dto';

@ApiTags('Usuários')
@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post('cadastro')
  public async cadastro(@Body() usuario: CadastroDTO): Promise<MostrarDTO> {
    return await this.usuarioService.cadastro(usuario);
  }

  @Get(':id')
  public async buscarPorID(@Param('id') id: string): Promise<MostrarDTO> {
    return await this.usuarioService.buscarPorID(id);
  }

  @Get()
  public async buscarPorEmailOuSetor(
    @Query('email') email?: string,
    @Query('setor') setor?: string,
  ): Promise<MostrarDTO | MostrarDTO[]> {
    if (email) {
      return await this.usuarioService.buscarPorEmail(email);
    } else {
      return await this.usuarioService.buscarPorSetor(setor);
    }
  }

  @Put('editar-usuario/:id')
  public async atualizarDados(
    @Body() novosDados: AtualizarDTO,
    @Param('id') id: string,
  ): Promise<MostrarDTO | void> {
    return await this.usuarioService.atualizarDados(id, novosDados);
  }

  @Put('editar-nivel')
  public async atualizarSetor(@Request() request): Promise<MostrarDTO> {
    const { id, setor } = request.body;
    return await this.usuarioService.atualizarSetor(id, setor);
  }

  @Delete(':id')
  public async remover(@Param('id') id: string) {
    return await this.usuarioService.remover(id);
  }
}
