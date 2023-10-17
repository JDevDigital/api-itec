export class CadastroDTO {
  nome: string;
  email: string;
  senha: string;
  dataNascimento: string;
  endereco?: string;
  cep?: number;
  cidade?: string;
  estado?: string;
  cpf: string;
  rg: string;
  orgaoExpedidor: string;
  contaBancaria?: string;
  nivelUsuario: number;
}
