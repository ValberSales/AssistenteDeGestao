export type TransactionStatus = 'CONCILIADO' | 'CONFIRMAR VÍNCULO' | 'PENDENTE';

export interface Transaction {
  id: string;
  title: string;
  date: string; // ISO or readable text
  amount: number;
  category: string;
  status: TransactionStatus;
  type: 'BOLETO' | 'NOTA_FISCAL' | 'RECIBO' | 'OUTRO';
  attachmentName?: string;
  hasAttachment: boolean;
  notes?: string;
  bagId?: string; // If associated with a Malote
}

export interface Bag {
  id: string;
  code: string;
  createdAt: string;
  status: 'ABERTO' | 'FECHADO' | 'ENVIADO' | 'RECEBIDO';
  transactionsCount: number;
  totalAmount: number;
  notes?: string;
}

export interface UserProfile {
  name: string;
  avatar: string;
  role: string;
  email: string;
}

export interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
}
