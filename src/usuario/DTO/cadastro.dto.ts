import { ApiProperty } from '@nestjs/swagger';

export class CadastroDTO {
  @ApiProperty()
  nome: string;

  @ApiProperty()
  dataNascimento: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  senha: string;

  @ApiProperty()
  endereco?: string;

  @ApiProperty()
  bairro?: string;

  @ApiProperty()
  cidade?: string;

  @ApiProperty()
  cep?: number;

  @ApiProperty()
  estado?: string;

  @ApiProperty()
  setor: string;

  @ApiProperty()
  cpf: string;

  @ApiProperty()
  rg: string;

  @ApiProperty()
  orgaoExpedidor: string;

  @ApiProperty()
  contaBancaria?: string;
}
