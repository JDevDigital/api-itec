import { ApiProperty } from '@nestjs/swagger';
import { Setor } from '../setor.enum';
import { Field } from '@nestjs/graphql';

export class CadastroDTO {
  @ApiProperty()
  nome: string;

  @ApiProperty()
  dataNascimento: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  telefone: string;

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
  @Field(() => Setor)
  setor: Setor;

  @ApiProperty()
  cpf: string;

  @ApiProperty()
  rg: string;

  @ApiProperty()
  orgaoExpedidor: string;

  @ApiProperty()
  contaBancaria?: string;
}
