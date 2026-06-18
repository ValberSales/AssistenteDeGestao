import { Transaction, Bag, UserProfile } from '../types';

export const INITIAL_USER: UserProfile = {
  name: 'Ana',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
  role: 'Diretora Administrativa',
  email: 'ana.logs@pepper.com.br'
};

export const INITIAL_USER_ALT: UserProfile = {
  name: 'Gestor Swift',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
  role: 'Diretor Financeiro',
  email: 'swift@pepper.com.br'
};

export const INITIAL_TRANSACTIONS: Transaction[] = [
  {
    id: 'tx-1',
    title: 'Boleto Aluguel',
    date: 'Hoje, 10:45',
    amount: 25000.00,
    category: 'Infraestrutura',
    status: 'CONCILIADO',
    type: 'BOLETO',
    hasAttachment: true,
    attachmentName: 'comprovante_aluguel_junho.pdf',
    notes: 'Pagamento de aluguel mensal da sede operacional.'
  },
  {
    id: 'tx-2',
    title: 'Nota Fiscal Serviço',
    date: 'Ontem, 16:20',
    amount: 12500.00,
    category: 'Consultoria',
    status: 'CONFIRMAR VÍNCULO',
    type: 'NOTA_FISCAL',
    hasAttachment: false,
    notes: 'Prestação de serviço de desenvolvimento de software.'
  },
  {
    id: 'tx-3',
    title: 'Recibo Manutenção',
    date: '12 Mai, 09:15',
    amount: 5000.00,
    category: 'Manutenção',
    status: 'PENDENTE',
    type: 'RECIBO',
    hasAttachment: false,
    notes: 'Manutenção técnica dos condicionadores de ar.'
  }
];

export const INITIAL_BAGS: Bag[] = [
  {
    id: 'bag-1',
    code: 'MAL-2026-001',
    createdAt: '2026-06-10T14:30:00Z',
    status: 'ENVIADO',
    transactionsCount: 15,
    totalAmount: 18450.00,
    notes: 'Malote de despesas gerais escritório filial'
  },
  {
    id: 'bag-2',
    code: 'MAL-2026-002',
    createdAt: '2026-06-15T11:00:00Z',
    status: 'ABERTO',
    transactionsCount: 3,
    totalAmount: 8900.00,
    notes: 'Despesas de reembolso de viagem diretoria'
  }
];

export const FAQ_RESPONSES = [
  {
    keywords: ['pendente', 'comprovante', 'boleto'],
    reply: 'Você tem atualmente **3 pendentes** em comprovantes de gastos. Recomendamos anexar os recibos e notas fiscais para o correto fechamento!'
  },
  {
    keywords: ['conciliado', 'aluguel'],
    reply: 'O **Boleto Aluguel** no valor de **R$ 25.000,00** já foi **conciliado** com sucesso hoje às 10:45.'
  },
  {
    keywords: ['saldo', 'gasto', 'total'],
    reply: 'O saldo total de gastos registrados no mês atual é de **R$ 42.500,00**, apresentando uma redução de **2.4% menos que o mês passado**!'
  },
  {
    keywords: ['gerar', 'malote', 'enviar'],
    reply: 'Para gerar um novo **Malote**, acesse a aba "Malotes" ou clique na ação rápida "Gerar Malote" para empacotar os boletos e enviar ao operacional!'
  }
];
