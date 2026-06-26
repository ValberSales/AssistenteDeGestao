// Default fallback constants in case mockData.json fetch fails (e.g. CORS under file:// protocol)
const DEFAULT_FALLBACK_DATA = {
  "transactions": [
    {
      "id": "tx-1",
      "title": "Boleto Aluguel",
      "date": "2026-06-25T13:45:00Z",
      "amount": 25000.00,
      "category": "Infraestrutura",
      "status": "CONCILIADO",
      "type": "BOLETO",
      "hasAttachment": true,
      "attachmentName": "comprovante_aluguel_junho.pdf",
      "notes": "Pagamento de aluguel mensal da sede operacional."
    },
    {
      "id": "tx-2",
      "title": "Nota Fiscal Serviço",
      "date": "2026-06-24T19:20:00Z",
      "amount": 12500.00,
      "category": "Consultoria",
      "status": "CONFIRMAR VÍNCULO",
      "type": "NOTA_FISCAL",
      "hasAttachment": false,
      "notes": "Prestação de serviço de desenvolvimento de software."
    },
    {
      "id": "tx-3",
      "title": "Recibo Manutenção",
      "date": "2026-05-12T12:15:00Z",
      "amount": 5000.00,
      "category": "Manutenção",
      "status": "PENDENTE",
      "type": "RECIBO",
      "hasAttachment": false,
      "notes": "Manutenção técnica dos condicionadores de ar."
    },
    {
      "id": "tx-4",
      "title": "Boleto AWS Server",
      "date": "2026-06-22T10:15:00Z",
      "amount": 4500.00,
      "category": "Infraestrutura",
      "status": "CONCILIADO",
      "type": "BOLETO",
      "hasAttachment": true,
      "attachmentName": "aws_invoice_june.pdf",
      "notes": "Hospedagem de servidores de produção Pepper."
    },
    {
      "id": "tx-5",
      "title": "Recibo Coffee Break",
      "date": "2026-06-20T14:30:00Z",
      "amount": 1800.00,
      "category": "Marketing",
      "status": "CONCILIADO",
      "type": "RECIBO",
      "hasAttachment": true,
      "attachmentName": "recibo_coffee_marketing.png",
      "notes": "Alimentação para workshop de novos produtos."
    },
    {
      "id": "tx-6",
      "title": "Boleto Internet Fibra",
      "date": "2026-06-18T16:00:00Z",
      "amount": 320.00,
      "category": "Infraestrutura",
      "status": "CONCILIADO",
      "type": "BOLETO",
      "hasAttachment": true,
      "attachmentName": "provedor_link_fibra.pdf",
      "notes": "Acesso banda larga escritório central."
    },
    {
      "id": "tx-7",
      "title": "Boleto Licença Software",
      "date": "2026-06-15T09:00:00Z",
      "amount": 1500.00,
      "category": "Outros",
      "status": "PENDENTE",
      "type": "BOLETO",
      "hasAttachment": false,
      "notes": "Renovação anual do antivírus corporativo."
    },
    {
      "id": "tx-8",
      "title": "Nota Fiscal Limpeza",
      "date": "2026-06-10T11:30:00Z",
      "amount": 890.00,
      "category": "Serviços",
      "status": "CONFIRMAR VÍNCULO",
      "type": "NOTA_FISCAL",
      "hasAttachment": false,
      "notes": "Serviço terceirizado de higienização mensal."
    },
    {
      "id": "tx-9",
      "title": "Recibo Manutenção Servidores",
      "date": "2026-06-05T15:45:00Z",
      "amount": 6200.00,
      "category": "Manutenção",
      "status": "PENDENTE",
      "type": "RECIBO",
      "hasAttachment": false,
      "notes": "Suporte especializado para contingência de servidores."
    },
    {
      "id": "tx-10",
      "title": "Boleto Energia Elétrica",
      "date": "2026-05-20T17:00:00Z",
      "amount": 1250.00,
      "category": "Infraestrutura",
      "status": "CONCILIADO",
      "type": "BOLETO",
      "hasAttachment": true,
      "attachmentName": "conta_luz_maio.pdf"
    },
    {
      "id": "tx-11",
      "title": "Nota Fiscal Auditoria Contábil",
      "date": "2026-05-25T10:00:00Z",
      "amount": 9500.00,
      "category": "Consultoria",
      "status": "CONCILIADO",
      "type": "NOTA_FISCAL",
      "hasAttachment": true,
      "attachmentName": "nf_auditoria_maio.pdf"
    },
    {
      "id": "tx-12",
      "title": "Recibo Cartório Escritura",
      "date": "2026-05-28T14:00:00Z",
      "amount": 450.00,
      "category": "Outros",
      "status": "CONCILIADO",
      "type": "RECIBO",
      "hasAttachment": true,
      "attachmentName": "emolumentos_cartorio.png"
    },
    {
      "id": "tx-13",
      "title": "Boleto Aluguel Abril",
      "date": "2026-04-05T09:00:00Z",
      "amount": 25000.00,
      "category": "Infraestrutura",
      "status": "CONCILIADO",
      "type": "BOLETO",
      "hasAttachment": true,
      "attachmentName": "aluguel_abril_comprovante.pdf"
    },
    {
      "id": "tx-14",
      "title": "Recibo Motoboy Entregas",
      "date": "2026-04-10T15:20:00Z",
      "amount": 300.00,
      "category": "Serviços",
      "status": "CONCILIADO",
      "type": "RECIBO",
      "hasAttachment": true,
      "attachmentName": "motoboy_recibos_consolidado.png"
    },
    {
      "id": "tx-15",
      "title": "Nota Fiscal Campanha Social Media",
      "date": "2026-04-15T11:45:00Z",
      "amount": 7500.00,
      "category": "Marketing",
      "status": "CONCILIADO",
      "type": "NOTA_FISCAL",
      "hasAttachment": true,
      "attachmentName": "nf_social_media_abril.pdf"
    },
    {
      "id": "tx-16",
      "title": "Boleto Água e Saneamento",
      "date": "2026-04-22T16:30:00Z",
      "amount": 1100.00,
      "category": "Infraestrutura",
      "status": "CONCILIADO",
      "type": "BOLETO",
      "hasAttachment": true,
      "attachmentName": "conta_agua_abril.pdf"
    },
    {
      "id": "tx-17",
      "title": "Boleto Renovação Licença Oracle",
      "date": "2026-04-28T10:15:00Z",
      "amount": 18000.00,
      "category": "Outros",
      "status": "PENDENTE",
      "type": "BOLETO",
      "hasAttachment": false
    },
    {
      "id": "tx-18",
      "title": "Nota Fiscal Manutenção Gerador",
      "date": "2026-04-30T17:00:00Z",
      "amount": 2300.00,
      "category": "Manutenção",
      "status": "CONFIRMAR VÍNCULO",
      "type": "NOTA_FISCAL",
      "hasAttachment": false
    }
  ],
  "bags": [
    {
      "id": "bag-1",
      "code": "MAL-2026-001",
      "createdAt": "2026-06-10T14:30:00Z",
      "status": "ENVIADO",
      "transactionsCount": 15,
      "totalAmount": 18450.00,
      "notes": "Malote de despesas gerais escritório filial"
    },
    {
      "id": "bag-2",
      "code": "MAL-2026-002",
      "createdAt": "2026-06-15T11:00:00Z",
      "status": "ABERTO",
      "transactionsCount": 3,
      "totalAmount": 8900.00,
      "notes": "Despesas de reembolso de viagem diretoria"
    }
  ],
  "profiles": {
    "ana": {
      "username": "ana",
      "name": "Ana",
      "email": "ana.logs@pepper.com.br",
      "role": "Diretora Administrativa",
      "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80"
    },
    "swift": {
      "username": "swift",
      "name": "Gestor Swift",
      "email": "swift@pepper.com.br",
      "role": "Gestor Financeiro",
      "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80"
    }
  }
};

export class AppStore {
  /**
   * Initializes the database in localStorage.
   * If mockData.json is available via fetch, it will load it;
   * otherwise, it will use the embedded defaults.
   * @returns {Promise<void>} Resolves when state is initialized
   */
  static async init() {
    // Check if store already initialized in localStorage
    const userStored = localStorage.getItem('pepper_user');
    const txsStored = localStorage.getItem('pepper_transactions');
    const bagsStored = localStorage.getItem('pepper_bags');

    if (userStored && txsStored && bagsStored) {
      // Already fully initialized, no fetch needed
      return Promise.resolve();
    }

    try {
      // Try to load mockData.json from the server
      const response = await fetch('mockData.json');
      if (!response.ok) {
        throw new Error(`Failed to fetch mockData: ${response.status}`);
      }
      const data = await response.json();
      this.populateData(data);
    } catch (err) {
      console.warn('Hybrid Mock Loader: Falling back to embedded mock database. (This is normal when opened via file:// protocol due to CORS)', err);
      this.populateData(DEFAULT_FALLBACK_DATA);
    }
  }

  static populateData(data) {
    if (!localStorage.getItem('pepper_user')) {
      localStorage.setItem('pepper_user', JSON.stringify(data.profiles.ana));
    }
    if (!localStorage.getItem('pepper_transactions')) {
      localStorage.setItem('pepper_transactions', JSON.stringify(data.transactions));
    }
    if (!localStorage.getItem('pepper_bags')) {
      localStorage.setItem('pepper_bags', JSON.stringify(data.bags));
    }
    if (!localStorage.getItem('pepper_chatbot_history')) {
      localStorage.setItem('pepper_chatbot_history', JSON.stringify([
        {
          id: 'welcome',
          sender: 'ai',
          text: 'Olá! Sou seu Assistente de Gestão inteligente. Como posso ajudar com suas despesas, boletos ou malotes hoje?',
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
    const profiles = DEFAULT_FALLBACK_DATA.profiles; // Fallback profiles map
    if (profiles[username]) {
      localStorage.setItem('pepper_user', JSON.stringify(profiles[username]));
      return profiles[username];
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
    
    // Repopulate from scratch
    this.populateData(DEFAULT_FALLBACK_DATA);
  }

  static getTheme() {
    return localStorage.getItem('pepper_theme') || 'light';
  }

  static setTheme(theme) {
    localStorage.setItem('pepper_theme', theme);
  }
}
