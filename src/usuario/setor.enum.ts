import { registerEnumType } from '@nestjs/graphql';

export enum Setor {
  ADMINISTRADOR,
  FINANCEIRO,
  MEMBRO,
}

registerEnumType(Setor, {
  name: 'Setor',
  description: 'Setores existentes no sistema.',
});
