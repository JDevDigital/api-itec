export class MostrarDTO {
  id: string;
  nome: string;
  email: string;
  dataNascimento: string;
  endereco?: string;
  cep?: number;
  cidade?: string;
  estado?: string;
  cpf: string;
  rg: string;
  orgaoExpedidor: string;
  contaBancaria?: string;
  setor: number;
}
