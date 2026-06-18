// Base State Store with LocalStorage Persistence
const INITIAL_TRANSACTIONS = [
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

const INITIAL_BAGS = [
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

const PROFILES = {
  ana: {
    username: 'ana',
    name: 'Ana',
    email: 'ana.logs@pepper.com.br',
    role: 'Diretora Administrativa',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80'
  },
  swift: {
    username: 'swift',
    name: 'Gestor Swift',
    email: 'swift@pepper.com.br',
    role: 'Gestor Financeiro',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80'
  }
};

export class AppStore {
  static init() {
    if (!localStorage.getItem('pepper_user')) {
      localStorage.setItem('pepper_user', JSON.stringify(PROFILES.ana));
    }
    if (!localStorage.getItem('pepper_transactions')) {
      localStorage.setItem('pepper_transactions', JSON.stringify(INITIAL_TRANSACTIONS));
    }
    if (!localStorage.getItem('pepper_bags')) {
      localStorage.setItem('pepper_bags', JSON.stringify(INITIAL_BAGS));
    }
    if (!localStorage.getItem('pepper_chatbot_history')) {
      localStorage.setItem('pepper_chatbot_history', JSON.stringify([
        {
          id: 'welcome',
          sender: 'ai',
          text: 'Olá! Sou seu assistente de gestão inteligente Pepper AI. Como posso ajudar com suas despesas, boletos ou malotes hoje?',
          time: 'Agora'
        }
      ]));
    }
    if (!localStorage.getItem('pepper_theme')) {
      localStorage.setItem('pepper_theme', 'light');
    }
  }

  static getActiveUser() {
    return JSON.parse(localStorage.getItem('pepper_user') || 'null');
  }

  static switchUser(username) {
    if (PROFILES[username]) {
      localStorage.setItem('pepper_user', JSON.stringify(PROFILES[username]));
      return PROFILES[username];
    }
    return null;
  }

  static getTransactions() {
    return JSON.parse(localStorage.getItem('pepper_transactions') || '[]');
  }

  static setTransactions(txList) {
    localStorage.setItem('pepper_transactions', JSON.stringify(txList));
  }

  static saveTransaction(tx) {
    const txs = this.getTransactions();
    const index = txs.findIndex(t => t.id === tx.id);
    if (index >= 0) {
      txs[index] = tx;
    } else {
      txs.unshift(tx);
    }
    this.setTransactions(txs);
  }

  static deleteTransaction(id) {
    const txs = this.getTransactions();
    const filtered = txs.filter(t => t.id !== id);
    this.setTransactions(filtered);
  }

  static getBags() {
    return JSON.parse(localStorage.getItem('pepper_bags') || '[]');
  }

  static saveBag(bag) {
    const bags = this.getBags();
    const index = bags.findIndex(b => b.id === bag.id);
    if (index >= 0) {
      bags[index] = bag;
    } else {
      bags.unshift(bag);
    }
    localStorage.setItem('pepper_bags', JSON.stringify(bags));
  }

  static getChatHistory() {
    return JSON.parse(localStorage.getItem('pepper_chatbot_history') || '[]');
  }

  static addChatMessage(message) {
    const history = this.getChatHistory();
    history.push(message);
    localStorage.setItem('pepper_chatbot_history', JSON.stringify(history));
  }

  static clearChat() {
    localStorage.setItem('pepper_chatbot_history', JSON.stringify([
      {
        id: 'welcome',
        sender: 'ai',
        text: 'Histórico redefinido. Como posso ajudar com seus dados hoje?',
        time: 'Agora'
      }
    ]));
  }

  static resetDatabase() {
    localStorage.removeItem('pepper_user');
    localStorage.removeItem('pepper_transactions');
    localStorage.removeItem('pepper_bags');
    localStorage.removeItem('pepper_chatbot_history');
    this.init();
  }

  static getTheme() {
    return localStorage.getItem('pepper_theme') || 'light';
  }

  static setTheme(theme) {
    localStorage.setItem('pepper_theme', theme);
  }
}
