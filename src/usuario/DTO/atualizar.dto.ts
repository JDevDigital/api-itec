import { ApiProperty } from '@nestjs/swagger';

export class AtualizarDTO {
  @ApiProperty()
  nome?: string;

  @ApiProperty()
  email?: string;

  @ApiProperty()
  dataNascimento?: string;

  @ApiProperty()
  endereco?: string;

  @ApiProperty()
  cep?: number;

  @ApiProperty()
  cidade?: string;

  @ApiProperty()
  estado?: string;

  @ApiProperty()
  cpf?: string;

  @ApiProperty()
  rg?: string;

  @ApiProperty()
  orgaoExpedidor?: string;

  @ApiProperty()
  contaBancaria?: string;
}
