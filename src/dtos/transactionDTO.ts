export interface TransactionDTO {
  id: number;
  descricao: string;
  dataTransacao: string;
  valorTransacao: number;

  cartaoMascarado: string;
  finalCartao: string;
  nomePortador: string;
  tipoLancamento: string;
  tipoTransacao: string;
}
