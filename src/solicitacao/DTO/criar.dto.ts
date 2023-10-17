export class CriarDTO {
  nomeDoDemandante: string;
  emailDoDemandante: string;
  categoriaDeCompra: string;
  objetivo: string;
  justificativa: string;
  prazoDeEntrega: string;
  orçamentos?: string[];
  detalhes: string;
  anexos?: string[];
  status?: string;
}
