import './index.css';
import { AppStore } from './store.js';

// Setup and boot local state
AppStore.init();

// Global DOM elements references
const elements = {
  // Views
  viewDashboard: document.getElementById('view-dashboard'),
  viewReports: document.getElementById('view-reports'),
  viewBags: document.getElementById('view-bags'),
  viewSettings: document.getElementById('view-settings'),

  // Sidebar and Navbar indicators
  desktopNavItems: document.querySelectorAll('#desktop-nav .nav-item'),
  mobileNavItems: document.querySelectorAll('nav .mobile-nav-item'),
  headerGreeting: document.getElementById('header-greeting'),
  headerSub: document.getElementById('header-sub'),
  userAvatarImg: document.getElementById('user-avatar-img'),
  userDisplayName: document.getElementById('user-display-name'),
  userDisplayRole: document.getElementById('user-display-role'),
  profileDropUsername: document.getElementById('profile-drop-username'),
  profileDropEmail: document.getElementById('profile-drop-email'),
  bagCountBadge: document.getElementById('bag-count-badge'),

  // Search input
  globalSearch: document.getElementById('global-search'),
  clearSearchBtn: document.getElementById('clear-search-btn'),
  searchOverviewBanner: document.getElementById('search-overview-banner'),
  searchOverviewText: document.getElementById('search-overview-text'),
  searchTermDisplay: document.getElementById('search-term-display'),
  clearSearchBannerBtn: document.getElementById('clear-search-banner-btn'),

  // Notification panel
  notifBellBtn: document.getElementById('notif-bell-btn'),
  notifBadge: document.getElementById('notif-badge'),
  notifDropdown: document.getElementById('notif-dropdown'),
  notificationItemsContainer: document.getElementById('notification-items-container'),
  btnClearNotifications: document.getElementById('btn-clear-notifications'),

  // User Dropdown controls
  profileAvatarBtn: document.getElementById('profile-avatar-btn'),
  profileDropdown: document.getElementById('profile-dropdown'),
  btnSwitchUserDrop: document.getElementById('btn-switch-user-drop'),
  btnResetDbDrop: document.getElementById('btn-reset-db-drop'),
  btnQuickSwapAside: document.getElementById('btn-quick-swap-aside'),
  btnQuickSwapHeader: document.getElementById('btn-quick-swap'),
  btnLogoutSidebar: document.getElementById('btn-logout-sidebar'),

  // Dashboard calculations
  dashboardTotalAmount: document.getElementById('dashboard-total-amount'),
  dashboardPeriodPerformance: document.getElementById('dashboard-period-performance'),
  statPendingTickets: document.getElementById('stat-pending-tickets'),
  statMonthlyUploads: document.getElementById('stat-monthly-uploads'),
  statCardWarnings: document.getElementById('stat-card-warnings'),
  statCardUploads: document.getElementById('stat-card-uploads'),
  transactionsListContainer: document.getElementById('transactions-list-container'),
  viewAllTxsBtn: document.getElementById('view-all-txs-btn'),

  // Actions trigger Buttons
  btnAddTxAside: document.getElementById('btn-add-tx-aside'),
  quickActionNew: document.getElementById('quick-action-new'),
  quickActionExtract: document.getElementById('quick-action-extract'),
  quickActionBundle: document.getElementById('quick-action-bundle'),
  mobileCentralFab: document.getElementById('mobile-central-fab'),

  // Create Transaction Modal
  modalAddTransaction: document.getElementById('modal-add-transaction'),
  closeTxModalBtn: document.getElementById('close-tx-modal-btn'),
  formAddTxInner: document.getElementById('form-add-transaction-inner'),
  txInputTitle: document.getElementById('tx-input-title'),
  txInputAmount: document.getElementById('tx-input-amount'),
  txInputType: document.getElementById('tx-input-type'),
  txInputCategory: document.getElementById('tx-input-category'),
  txInputStatus: document.getElementById('tx-input-status'),
  txDragDrop: document.getElementById('tx-drag-drop'),
  txHiddenFileInput: document.getElementById('tx-hidden-file-input'),
  simulatedUploadFileChip: document.getElementById('simulated-upload-file-chip'),
  uploadedFilename: document.getElementById('uploaded-filename'),
  btnCancelSimulFile: document.getElementById('btn-cancel-simul-file'),
  txInputNotes: document.getElementById('tx-input-notes'),
  btnCancelTxCreation: document.getElementById('btn-cancel-tx-creation'),

  // Transaction Details Modal
  modalTxDetails: document.getElementById('modal-tx-details'),
  closeDetailsModalBtn: document.getElementById('close-details-modal-btn'),
  detailBadgeType: document.getElementById('detail-badge-type'),
  detailTitle: document.getElementById('detail-title'),
  detailDate: document.getElementById('detail-date'),
  detailAmount: document.getElementById('detail-amount'),
  detailCategory: document.getElementById('detail-category'),
  detailNotes: document.getElementById('detail-notes'),
  detailBagAssociationRow: document.getElementById('detail-bag-association-row'),
  detailAssociationBagCode: document.getElementById('detail-association-bag-code'),
  btnStatusToPending: document.getElementById('btn-status-to-pending'),
  btnStatusToConfirm: document.getElementById('btn-status-to-confirm'),
  btnStatusToConciliated: document.getElementById('btn-status-to-conciliated'),
  mockFileMissing: document.getElementById('mock-file-missing'),
  detailBtnDirectAttach: document.getElementById('detail-btn-direct-attach'),
  mockFilePresent: document.getElementById('mock-file-present'),
  mockTicketName: document.getElementById('mock-ticket-name'),
  mockTicketPrice: document.getElementById('mock-ticket-price'),
  detailBtnDelete: document.getElementById('detail-btn-delete'),
  detailBtnCloseModal: document.getElementById('detail-btn-close-modal'),

  // Create Bag Modal
  modalBagCreation: document.getElementById('modal-bag-creation'),
  closeBagModalBtn: document.getElementById('close-bag-modal-btn'),
  formBagCreationInner: document.getElementById('form-bag-creation-inner'),
  bagInputCode: document.getElementById('bag-input-code'),
  bagModalDocumentsSelector: document.getElementById('bag-modal-documents-selector'),
  bagComputedCount: document.getElementById('bag-computed-count'),
  bagComputedSum: document.getElementById('bag-computed-sum'),
  bagInputNotes: document.getElementById('bag-input-notes'),
  btnCancelBag: document.getElementById('btn-cancel-bag'),
  btnCreateBagTrigger: document.getElementById('btn-create-bag-trigger'),

  // Bags list elements
  bagsCardsContainer: document.getElementById('bags-cards-container'),

  // Reports filters / Breakdown elements
  reportFilterCategory: document.getElementById('report-filter-category'),
  reportFilterStatus: document.getElementById('report-filter-status'),
  reportCategoriesList: document.getElementById('report-categories-list'),
  reportKpiTotal: document.getElementById('report-kpi-total'),
  reportItemsCount: document.getElementById('report-items-count'),
  reportListContainer: document.getElementById('report-list-container'),
  donutTotalDesc: document.getElementById('report-donut-total-desc'),

  // Settings elements
  settingsUserAvatar: document.getElementById('settings-user-avatar'),
  settingsUserName: document.getElementById('settings-user-name'),
  settingsUserRole: document.getElementById('settings-user-role'),
  settingsUserEmail: document.getElementById('settings-user-email'),
  settingsBtnSwap: document.getElementById('settings-btn-swap'),
  themeBtnLight: document.getElementById('theme-btn-light'),
  themeBtnDark: document.getElementById('theme-btn-dark'),
  settingToggleSound: document.getElementById('setting-toggle-sound'),
  btnWipeDatabase: document.getElementById('btn-wipe-database'),
  btnRestoreSamples: document.getElementById('btn-restore-samples'),

  // Smart Chat assistant
  btnChatAiFab: document.getElementById('btn-chat-ai-fab'),
  aiChatDrawer: document.getElementById('ai-chat-drawer'),
  closeChatDrawerBtn: document.getElementById('close-chat-drawer-btn'),
  chatMessagesBody: document.getElementById('chat-messages-body'),
  aiChatInputForm: document.getElementById('ai-chat-input-form'),
  aiChatInputField: document.getElementById('ai-chat-input-field')
};

// Application State Managers
let activeView = 'dashboard';
let currentSearchQuery = '';
let activeSelectedDetailId = null;
let simulatedFilename = '';
let soundEnabled = true;

// Active notifications queue array
let notificationsList = [
  { id: 101, text: 'Boleto Aluguel foi conciliado com sucesso por Ana.', time: 'Hoje, 10:45', unread: true },
  { id: 102, text: 'Nota fiscal anexada via Novo Envio aguarda verificação.', time: 'Ontem', unread: true },
  { id: 103, text: 'Faltam comprovantes para 3 despesas pendentes.', time: '2 dias atrás', unread: false }
];

// Helper: Format amount to Brazilian Real (R$)
const formatCurrency = (amount) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  }).format(amount);
};

// Audio simulations
const playNotificationSound = () => {
  if (!soundEnabled) return;
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    
    osc.type = 'sine';
    // Success musical high chime
    osc.frequency.setValueAtTime(880, audioCtx.currentTime); // A5
    osc.frequency.setValueAtTime(1109.73, audioCtx.currentTime + 0.08); // C#6
    
    gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);
    
    osc.start();
    osc.stop(audioCtx.currentTime + 0.35);
  } catch (e) {
    console.log('Audio Context not allowed yet', e);
  }
};

// ==========================================
//              ROUTING / VIEW TOGGLE
// ==========================================

const switchView = (targetView) => {
  activeView = targetView;
  
  // Hide all sections with smooth enter/fade classes
  const views = [elements.viewDashboard, elements.viewReports, elements.viewBags, elements.viewSettings];
  views.forEach(v => {
    v.classList.add('hidden');
    v.classList.remove('view-enter', 'view-enter-active');
  });

  // Activate destination view
  let targetNode;
  switch (targetView) {
    case 'dashboard': targetNode = elements.viewDashboard; break;
    case 'reports': targetNode = elements.viewReports; break;
    case 'bags': targetNode = elements.viewBags; break;
    case 'settings': targetNode = elements.viewSettings; break;
  }

  if (targetNode) {
    targetNode.classList.remove('hidden');
    // Force reflow
    void targetNode.offsetWidth;
    // Enter slide transition
    targetNode.classList.add('view-enter');
    requestAnimationFrame(() => {
      targetNode.classList.add('view-enter-active');
    });
  }

  // Update navigation items classes for Desktop Sidebar
  elements.desktopNavItems.forEach(item => {
    const match = item.getAttribute('data-target') === targetView;
    if (match) {
      item.classList.add('bg-white/10', 'text-white');
      item.classList.remove('text-[#bec6e0]/80', 'hover:bg-white/5');
      // Append subtle target circle dot dynamically inside button
      if (!item.querySelector('.nav-dot')) {
        const dot = document.createElement('span');
        dot.className = 'nav-dot w-1.5 h-1.5 bg-indigo-400 rounded-full';
        item.appendChild(dot);
      }
    } else {
      item.classList.remove('bg-white/10', 'text-white');
      item.classList.add('text-[#bec6e0]/80', 'hover:bg-white/5');
      const dot = item.querySelector('.nav-dot');
      if (dot) dot.remove();
    }
  });

  // Update navigation items classes for Mobile Bottom Bar
  elements.mobileNavItems.forEach(item => {
    const match = item.getAttribute('data-target') === targetView;
    if (match) {
      item.classList.add('text-indigo-600');
      item.classList.remove('text-slate-400');
      item.querySelector('.material-symbols-outlined').style.fontVariationSettings = "'FILL' 1";
    } else {
      item.classList.remove('text-indigo-600');
      item.classList.add('text-slate-400');
      item.querySelector('.material-symbols-outlined').style.fontVariationSettings = "'FILL' 0";
    }
  });

  // Sync calculations depending on selected viewport tab
  if (targetView === 'reports') renderReports();
  if (targetView === 'bags') renderBags();
  if (targetView === 'settings') renderSettings();
};

// Mount nav triggers
const initNavNavigation = () => {
  elements.desktopNavItems.forEach(btn => {
    btn.addEventListener('click', () => {
      switchView(btn.getAttribute('data-target'));
    });
  });

  elements.mobileNavItems.forEach(btn => {
    btn.addEventListener('click', () => {
      switchView(btn.getAttribute('data-target'));
    });
  });

  // Action links
  if (elements.viewAllTxsBtn) {
    elements.viewAllTxsBtn.addEventListener('click', () => switchView('reports'));
  }
};


// ==========================================
//             DATA CALCULATIONS RENDERING
// ==========================================

const renderDashboard = () => {
  const txs = AppStore.getTransactions();
  const filteredTxs = filterBySearch(txs, currentSearchQuery);
  const user = AppStore.getActiveUser();

  // Greeting
  elements.headerGreeting.textContent = `Bom dia, ${user.name}!`;
  elements.headerSub.textContent = user.role;
  elements.userAvatarImg.src = user.avatar;
  elements.userDisplayName.childNodes[0].textContent = `${user.name} `;
  elements.userDisplayRole.textContent = user.role;

  // Header quick drop details update
  elements.profileDropUsername.textContent = user.name;
  elements.profileDropEmail.textContent = user.email;

  // Compute stats values
  const totalSpend = txs.reduce((sum, t) => sum + t.amount, 0);
  elements.dashboardTotalAmount.textContent = formatCurrency(totalSpend);

  // Update period descriptive text based on operator profile
  if (user.username === 'ana') {
    elements.dashboardPeriodPerformance.textContent = '2.4% menos que mês passado';
  } else {
    elements.dashboardPeriodPerformance.textContent = 'Performance de custos otimizada';
  }

  // Pending items count (needs verification or no attachments)
  const pendings = txs.filter(t => t.status === 'PENDENTE' || t.status === 'CONFIRMAR VÍNCULO').length;
  elements.statPendingTickets.textContent = `${pendings} pendentes`;

  // Total uploads this month (number of recorded documents)
  elements.statMonthlyUploads.textContent = `${txs.length} envios`;

  // Render recent activity list container
  elements.transactionsListContainer.innerHTML = '';
  
  if (filteredTxs.length === 0) {
    elements.transactionsListContainer.innerHTML = `
      <div class="p-8 text-center text-slate-400 bg-white">
        <span class="material-symbols-outlined text-4xl block mb-2 text-slate-300">search_off</span>
        <p class="text-xs font-bold font-display">Nenhum lançamento encontrado</p>
        <p class="text-[10px] text-slate-400 mt-1">Experimente limpar seu filtro ou lançar novas despesas.</p>
      </div>
    `;
    return;
  }

  // Iterate to build individual rows
  filteredTxs.forEach(tx => {
    const itemRow = document.createElement('div');
    // Highlight items with different left border matching statuses
    let borderClass = 'border-l-4 border-l-slate-400/50';
    let labelBg = 'bg-slate-50 text-slate-600 border border-slate-200/50';
    let displayStatus = tx.status;

    if (tx.status === 'CONCILIADO') {
      borderClass = 'border-l-4 border-l-emerald-500';
      labelBg = 'bg-emerald-50 text-emerald-700 border-emerald-100';
    } else if (tx.status === 'CONFIRMAR VÍNCULO') {
      borderClass = 'border-l-4 border-l-amber-500';
      labelBg = 'bg-amber-50 text-amber-700 border-amber-100';
    } else if (tx.status === 'PENDENTE') {
      borderClass = 'border-l-4 border-l-red-500';
      labelBg = 'bg-red-50 text-red-700 border-red-100';
      displayStatus = 'NF PENDENTE';
    }

    // Determine correct document icons
    let typeIcon = 'receipt_long';
    if (tx.type === 'NOTA_FISCAL') typeIcon = 'description';
    if (tx.type === 'RECIBO') typeIcon = 'history_edu';

    itemRow.className = `flex items-center justify-between p-4 bg-white hover:bg-slate-50/50 transition-all ${borderClass}`;
    itemRow.innerHTML = `
      <div class="flex items-center gap-4 shrink-0 min-w-0 flex-1">
        <div class="w-10 h-10 rounded-xl bg-slate-50/80 border border-slate-100 flex items-center justify-center shrink-0">
          <span class="material-symbols-outlined text-slate-500 text-lg">${typeIcon}</span>
        </div>
        <div class="truncate pr-2">
          <p class="text-xs md:text-sm font-extrabold text-[#131b2e] truncate font-display select-text">${tx.title}</p>
          <div class="flex items-center gap-2 mt-0.5">
            <span class="text-[10px] text-slate-400 font-bold uppercase tracking-wider font-mono">${tx.date}</span>
            <span class="text-[10px] font-mono text-zinc-400">•</span>
            <span class="text-[10px] font-mono text-slate-400 truncate max-w-[120px]">${tx.category}</span>
          </div>
        </div>
      </div>

      <!-- Right column details badges & actions -->
      <div class="flex items-center gap-3">
        <div class="text-right shrink-0">
          <p class="text-xs md:text-sm font-black text-[#131b2e] font-display select-text">${formatCurrency(tx.amount)}</p>
          <div class="inline-block mt-1 ${labelBg} px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-wider shadow-inner">
            ${displayStatus}
          </div>
        </div>
        
        <button class="btn-open-details w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200/80 text-slate-500 hover:text-indigo-600 hover:bg-slate-50 transition-colors cursor-pointer shrink-0" data-id="${tx.id}">
          <span class="material-symbols-outlined text-base">more_vert</span>
        </button>
      </div>
    `;

    // Hook detail modal trigger
    itemRow.querySelector('.btn-open-details').addEventListener('click', () => {
      openDetailsModal(tx.id);
    });

    elements.transactionsListContainer.appendChild(itemRow);
  });
};

const renderBags = () => {
  const bags = AppStore.getBags();
  const txs = AppStore.getTransactions();
  elements.bagsCardsContainer.innerHTML = '';

  // Synchronize bag indicator badge
  elements.bagCountBadge.textContent = bags.length;

  if (bags.length === 0) {
    elements.bagsCardsContainer.innerHTML = `
      <div class="col-span-2 p-12 text-center text-slate-400 bg-white border border-slate-200 rounded-2xl">
        <span class="material-symbols-outlined text-5xl block mb-2 text-slate-300">inventory_2</span>
        <p class="text-sm font-black font-display text-slate-800">Nenhum malote gerado ainda</p>
        <p class="text-xs text-slate-400 mt-1 max-w-sm mx-auto">Reúna seus arquivos e clique no botão "Gerar Novo Malote" para protocolar o fechamento de despesas.</p>
      </div>
    `;
    return;
  }

  bags.forEach(bag => {
    const card = document.createElement('div');
    
    // Status style mapping
    let statusClass = 'bg-slate-100 text-slate-700';
    if (bag.status === 'ENVIADO') statusClass = 'bg-indigo-50 border border-indigo-100 text-indigo-700';
    if (bag.status === 'RECEBIDO') statusClass = 'bg-emerald-50 border border-emerald-100 text-emerald-700';
    if (bag.status === 'ABERTO') statusClass = 'bg-amber-50 border border-amber-100 text-amber-700';

    card.className = "bg-white border border-slate-200 p-5 rounded-2xl flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group";
    card.innerHTML = `
      <!-- Status Badge -->
      <div class="flex items-start justify-between">
        <div>
          <span class="${statusClass} text-[9px] font-black font-mono tracking-wider uppercase px-2.5 py-1 rounded-md mb-2 inline-block">
            ${bag.status}
          </span>
          <h4 class="text-base font-black text-slate-800 font-display select-text">${bag.code}</h4>
          <p class="text-[10px] text-slate-400 font-mono mt-0.5">Criado em: ${new Date(bag.createdAt).toLocaleDateString()}</p>
        </div>
        <div class="text-right shrink-0">
          <span class="text-[9px] text-[#76777d]/90 font-mono font-bold block uppercase tracking-wide">Valor Somado</span>
          <p class="text-base font-black text-slate-800 font-display mt-0.5 select-text">${formatCurrency(bag.totalAmount)}</p>
        </div>
      </div>

      <!-- Notes and statistics inside card -->
      <div class="my-4 pt-3 border-t border-slate-50 space-y-2">
        <p class="text-xs text-[#76777d] truncate italic">"${bag.notes || 'Sem observações operacionais registradas.'}"</p>
        <div class="flex items-center gap-2 text-[11px] text-[#131b2e] font-bold">
          <span class="material-symbols-outlined text-sm leading-none text-indigo-500">receipt_long</span>
          <span>${bag.transactionsCount} comprovantes embalados</span>
        </div>
      </div>

      <!-- Actions togglers inside bag -->
      <div class="flex gap-2 border-t border-slate-50 pt-3 mt-1 justify-end">
        ${bag.status === 'ABERTO' ? `
          <button class="btn-dispatch-bag bg-indigo-600 hover:bg-slate-800 text-white font-bold text-[10px] uppercase tracking-wider py-1.5 px-3 rounded-lg transition-colors cursor-pointer select-none" data-id="${bag.id}">
            Protocolar Envio
          </button>
        ` : ''}
        <button class="btn-print-bag text-[#131b2e] border border-slate-200 hover:bg-slate-50 font-bold text-[10px] uppercase tracking-wider py-1.5 px-3 rounded-lg transition-all cursor-pointer select-none flex items-center gap-1 shrink-0" data-id="${bag.id}">
          <span class="material-symbols-outlined text-xs">print</span>
          <span>Imprimir Guia</span>
        </button>
      </div>
    `;

    // Hook actions
    const btnDispatch = card.querySelector('.btn-dispatch-bag');
    if (btnDispatch) {
      btnDispatch.addEventListener('click', () => {
        dispatchBag(bag.id);
      });
    }

    const btnPrint = card.querySelector('.btn-print-bag');
    btnPrint.addEventListener('click', () => {
      alert(`Imprimindo Guia De Envio de Malote consolidador:\nCódigo: ${bag.code}\nQuantidade: ${bag.transactionsCount} comprovantes\nTotal: ${formatCurrency(bag.totalAmount)}\n\n(Simulação de PDF de rosto iniciada!)`);
    });

    elements.bagsCardsContainer.appendChild(card);
  });
};

const renderSettings = () => {
  const user = AppStore.getActiveUser();
  elements.settingsUserAvatar.src = user.avatar;
  elements.settingsUserName.textContent = user.name;
  elements.settingsUserRole.textContent = user.role;
  elements.settingsUserEmail.textContent = user.email;

  // Active theme indicator styling
  const currentTheme = AppStore.getTheme();
  if (currentTheme === 'dark') {
    elements.themeBtnDark.className = 'p-1.5 rounded-lg text-indigo-600 transition-all select-none bg-white shadow-xs';
    elements.themeBtnLight.className = 'p-1.5 rounded-lg text-slate-400 hover:text-[#94a3b8] transition-all select-none';
  } else {
    elements.themeBtnLight.className = 'p-1.5 rounded-lg text-indigo-600 transition-all select-none bg-white shadow-xs';
    elements.themeBtnDark.className = 'p-1.5 rounded-lg text-slate-400 hover:text-[#94a3b8] transition-all select-none';
  }
};


// ==========================================
//               REPORTS MODULE
// ==========================================

const renderReports = () => {
  const txs = AppStore.getTransactions();
  const selectedCat = elements.reportFilterCategory.value;
  const selectedStatus = elements.reportFilterStatus.value;

  // Filters logic application
  let list = txs.filter(tx => {
    const matchCat = (selectedCat === 'ALL') || (tx.category === selectedCat);
    const matchStatus = (selectedStatus === 'ALL') || (tx.status === selectedStatus);
    return matchCat && matchStatus;
  });

  // Filter with current global query additionally
  list = filterBySearch(list, currentSearchQuery);

  // Computed Values
  const totalAmount = list.reduce((sum, tx) => sum + tx.amount, 0);
  elements.reportKpiTotal.textContent = formatCurrency(totalAmount);
  elements.reportItemsCount.textContent = `${list.length} transações encontradas`;
  elements.donutTotalDesc.textContent = formatDescValue(totalAmount);

  // Render detail individual log list
  elements.reportListContainer.innerHTML = '';
  if (list.length === 0) {
    elements.reportListContainer.innerHTML = `
      <div class="p-8 text-center text-slate-400">
        <span class="material-symbols-outlined text-4xl block mb-2 text-slate-300">hourglass_empty</span>
        <p class="text-xs font-bold font-display">Sem lançamentos para os filtros aplicados</p>
      </div>
    `;
    return;
  }

  list.forEach(tx => {
    const item = document.createElement('div');
    item.className = 'py-3.5 flex items-center justify-between hover:bg-slate-50/50 rounded-lg px-2 transition-colors';
    
    let badgeClass = 'bg-slate-50 text-slate-700';
    if (tx.status === 'CONCILIADO') badgeClass = 'bg-emerald-50 text-emerald-700';
    if (tx.status === 'CONFIRMAR VÍNCULO') badgeClass = 'bg-amber-50 text-amber-700';
    if (tx.status === 'PENDENTE') badgeClass = 'bg-red-50 text-red-700';

    item.innerHTML = `
      <div class="flex items-center gap-3 min-w-0 flex-1 truncate pr-3">
        <span class="w-2.5 h-2.5 rounded-full shrink-0" style="background-color: ${getCategoryColor(tx.category)}"></span>
        <div class="min-w-0">
          <p class="text-xs font-bold text-[#131b2e] font-display truncate select-text">${tx.title}</p>
          <span class="text-[9px] text-[#76777d] font-mono leading-none">${tx.date} • ${tx.category}</span>
        </div>
      </div>
      <div class="flex items-center gap-3 shrink-0">
        <span class="text-xs font-extrabold text-[#131b2e] font-display select-text">${formatCurrency(tx.amount)}</span>
        <span class="${badgeClass} text-[8px] font-black uppercase px-2 py-0.5 rounded-md tracking-wider">${tx.status}</span>
        <button class="btn-mini-detail p-1 rounded-md text-slate-400 hover:text-[#131b2e] transition-colors cursor-pointer" data-id="${tx.id}">
          <span class="material-symbols-outlined text-base">arrow_forward</span>
        </button>
      </div>
    `;

    item.querySelector('.btn-mini-detail').addEventListener('click', () => {
      openDetailsModal(tx.id);
    });

    elements.reportListContainer.appendChild(item);
  });

  // Calculate category distribution percentages
  const distribution = {};
  txs.forEach(tx => {
    distribution[tx.category] = (distribution[tx.category] || 0) + tx.amount;
  });

  elements.reportCategoriesList.innerHTML = '';
  const totalTxsSpend = Object.values(distribution).reduce((sum, v) => sum + v, 0);

  Object.entries(distribution).forEach(([category, val]) => {
    const pct = totalTxsSpend > 0 ? (val / totalTxsSpend) * 100 : 0;
    const catItem = document.createElement('div');
    catItem.className = 'space-y-1.5';
    catItem.innerHTML = `
      <div class="flex items-center justify-between text-[11px] font-medium leading-none">
        <div class="flex items-center gap-2">
          <span class="w-2.5 h-2.5 rounded-xs block shrink-0" style="background-color: ${getCategoryColor(category)}"></span>
          <span class="text-slate-800 font-extrabold select-all">${category}</span>
        </div>
        <span class="text-slate-500 font-bold select-all">${formatCurrency(val)} (${pct.toFixed(0)}%)</span>
      </div>
      <div class="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
        <div class="h-full rounded-full transition-all duration-300" style="width: ${pct}%; background-color: ${getCategoryColor(category)}"></div>
      </div>
    `;
    elements.reportCategoriesList.appendChild(catItem);
  });

  // Dynamically update SVG segments offsets corresponding to actual percentage values
  updateSvgChartSegments(distribution, totalTxsSpend);
};

const formatDescValue = (amount) => {
  if (amount >= 1000) {
    return `R$ ${(amount / 1000).toFixed(1)}k`;
  }
  return formatCurrency(amount);
};

const getCategoryColor = (category) => {
  switch (category) {
    case 'Infraestrutura': return '#131b2e';
    case 'Consultoria': return '#10b981';
    case 'Manutenção': return '#f59e0b';
    case 'Marketing': return '#ec4899';
    case 'Serviços': return '#8b5cf6';
    default: return '#94a3b8';
  }
};

const updateSvgChartSegments = (dist, total) => {
  const infraPct = dist['Infraestrutura'] && total > 0 ? (dist['Infraestrutura'] / total) * 100 : 0;
  const consultPct = dist['Consultoria'] && total > 0 ? (dist['Consultoria'] / total) * 100 : 0;
  const maintPct = dist['Manutenção'] && total > 0 ? (dist['Manutenção'] / total) * 100 : 0;

  const segment1 = document.querySelector('.chart-segment-infra');
  const segment2 = document.querySelector('.chart-segment-consult');
  const segment3 = document.querySelector('.chart-segment-mainten');

  if (segment1 && segment2 && segment3) {
    // Rounding stroke percentages for dashing SVG layout
    const v1 = infraPct.toFixed(1);
    const r1 = (100 - infraPct).toFixed(1);
    segment1.setAttribute('stroke-dasharray', `${v1} ${r1}`);
    segment1.setAttribute('stroke-dashoffset', '0');

    const v2 = consultPct.toFixed(1);
    const r2 = (100 - consultPct).toFixed(1);
    segment2.setAttribute('stroke-dasharray', `${v2} ${r2}`);
    segment2.setAttribute('stroke-dashoffset', `-${v1}`);

    const v3 = maintPct.toFixed(1);
    const r3 = (100 - maintPct).toFixed(1);
    segment3.setAttribute('stroke-dasharray', `${v3} ${r3}`);
    segment3.setAttribute('stroke-dashoffset', `-${parseFloat(v1) + parseFloat(v2)}`);
  }
};


// ==========================================
//               SEARCH CONTROLS
// ==========================================

const filterBySearch = (arr, term) => {
  if (!term) return arr;
  const lower = term.toLowerCase();
  return arr.filter(t => 
    t.title.toLowerCase().includes(lower) ||
    t.category.toLowerCase().includes(lower) ||
    t.status.toLowerCase().includes(lower) ||
    (t.notes && t.notes.toLowerCase().includes(lower))
  );
};

const handleGlobalSearch = (query) => {
  currentSearchQuery = query.trim();
  
  // Show/Hide search banner alert if search is active
  if (currentSearchQuery) {
    elements.clearSearchBtn.classList.remove('hidden');
    elements.searchOverviewBanner.classList.remove('hidden');
    elements.searchTermDisplay.textContent = `"${currentSearchQuery}"`;
  } else {
    elements.clearSearchBtn.classList.add('hidden');
    elements.searchOverviewBanner.classList.add('hidden');
  }

  // Refresh active tabs data renders
  if (activeView === 'dashboard') renderDashboard();
  if (activeView === 'reports') renderReports();
};


// ==========================================
//        MODAL: MANAGE TRANSACTION CREATION
// ==========================================

const openAddTransactionModal = () => {
  // Generate random draft file details
  simulatedFilename = '';
  elements.simulatedUploadFileChip.classList.add('hidden');
  elements.txHiddenFileInput.value = '';
  elements.formAddTxInner.reset();
  
  // Pre-generate random invoice values for fun mockup
  const randTitles = ['Ticket Alimentação', 'Licença Softwares', 'Hospedagem AWS', 'Comissão Corretor', 'Consumo Energia'];
  elements.txInputTitle.placeholder = `Ex: ${randTitles[Math.floor(Math.random() * randTitles.length)]}`;

  elements.modalAddTransaction.classList.remove('hidden');
  playNotificationSound();
};

const closeAddTransactionModal = () => {
  elements.modalAddTransaction.classList.add('hidden');
};

const handleFileSimulate = (name) => {
  simulatedFilename = name || 'recibo_fiscal_06.png';
  elements.uploadedFilename.textContent = simulatedFilename;
  elements.simulatedUploadFileChip.classList.remove('hidden');
  
  // Update status dropdown to Confirm automatically to match "confirm link" flow when an attachment is attached!
  elements.txInputStatus.value = 'CONFIRMAR VÍNCULO';
};

// ==========================================
//          MODAL: DETAILS VIEW
// ==========================================

const openDetailsModal = (id) => {
  const tx = AppStore.getTransactions().find(t => t.id === id);
  if (!tx) return;

  activeSelectedDetailId = id;
  
  // Fill text fields
  elements.detailBadgeType.textContent = tx.type;
  elements.detailTitle.textContent = tx.title;
  elements.detailDate.textContent = tx.date;
  elements.detailAmount.textContent = formatCurrency(tx.amount);
  elements.detailCategory.textContent = tx.category;
  elements.detailNotes.textContent = tx.notes || 'Nenhuma anotação vinculada a esta despesa.';

  // Check if inside a Malote/Bag
  if (tx.bagId) {
    elements.detailBagAssociationRow.classList.remove('hidden');
    elements.detailAssociationBagCode.textContent = tx.bagId;
    // Disable statuses updates panel once transactional record is blocked inside Malote batch
    elements.detailBtnDelete.classList.add('opacity-40', 'cursor-not-allowed');
    elements.detailBtnDelete.disabled = true;
  } else {
    elements.detailBagAssociationRow.classList.add('hidden');
    elements.detailBtnDelete.classList.remove('opacity-40', 'cursor-not-allowed');
    elements.detailBtnDelete.disabled = false;
  }

  // Set visual status interactive state togglers colors
  updateDetailsActionsButtons(tx.status);

  // Setup simulated file details inside iframe browser
  if (tx.hasAttachment) {
    elements.mockFileMissing.classList.add('hidden');
    elements.mockFilePresent.classList.remove('hidden');
    elements.mockTicketName.textContent = tx.title;
    elements.mockTicketPrice.textContent = formatCurrency(tx.amount);
  } else {
    elements.mockFileMissing.classList.remove('hidden');
    elements.mockFilePresent.classList.add('hidden');
  }

  elements.modalTxDetails.classList.remove('hidden');
};

const closeDetailsModal = () => {
  elements.modalTxDetails.classList.add('hidden');
  activeSelectedDetailId = null;
};

const updateDetailsActionsButtons = (activeStatus) => {
  const btns = [
    { el: elements.btnStatusToPending, state: 'PENDENTE', baseClass: 'border-red-100 bg-white hover:bg-red-50 text-red-600', activeClass: 'bg-red-600 text-white border-red-600 shadow-sm' },
    { el: elements.btnStatusToConfirm, state: 'CONFIRMAR VÍNCULO', baseClass: 'border-amber-100 bg-white hover:bg-amber-50 text-amber-600', activeClass: 'bg-amber-500 text-white border-amber-500 shadow-sm' },
    { el: elements.btnStatusToConciliated, state: 'CONCILIADO', baseClass: 'border-emerald-100 bg-white hover:bg-emerald-50 text-emerald-600', activeClass: 'bg-emerald-500 text-white border-emerald-500 shadow-sm' }
  ];

  btns.forEach(b => {
    b.el.className = b.el.className.replace(/bg-\w+-\d+\stext-\w+-\d+|bg-\w+\stext-white|border-\w+-\d+/g, '').trim();
    if (activeStatus === b.state) {
      b.el.className += ' ' + b.activeClass;
    } else {
      b.el.className += ' ' + b.baseClass;
    }
  });
};

const changeSelectedTransactionStatus = (newStatus) => {
  if (!activeSelectedDetailId) return;
  const txs = AppStore.getTransactions();
  const txIndex = txs.findIndex(t => t.id === activeSelectedDetailId);
  if (txIndex < 0) return;

  // Prevent changing status if transactional line is already sealed inside an operational malote
  if (txs[txIndex].bagId) {
    alert('Não é possível editar este comprovante porque ele já encontra-se selado e enviado dentro de um malote fechado.');
    return;
  }

  const prevStatus = txs[txIndex].status;
  txs[txIndex].status = newStatus;

  // Automatically add attachment simulation details if moving from "PENDENTE" to "CONFIRMAR VÍNCULO" without an attachment
  if (newStatus === 'CONFIRMAR VÍNCULO' && !txs[txIndex].hasAttachment) {
    txs[txIndex].hasAttachment = true;
    txs[txIndex].attachmentName = `recibo_auto_upload_${Date.now().toString().slice(-4)}.pdf`;
    
    // Trigger desktop custom inline notifications alert
    createTopAlertToast('Comprovante digital inserido automaticamente no lote!');
  }

  AppStore.setTransactions(txs);
  updateDetailsActionsButtons(newStatus);
  
  // Re-fill iframe representation details
  if (txs[txIndex].hasAttachment) {
    elements.mockFileMissing.classList.add('hidden');
    elements.mockFilePresent.classList.remove('hidden');
    elements.mockTicketName.textContent = txs[txIndex].title;
    elements.mockTicketPrice.textContent = formatCurrency(txs[txIndex].amount);
  }

  // Hook notification record logs
  const user = AppStore.getActiveUser();
  const notifMsg = `Comprovante "${txs[txIndex].title}" alterado para ${newStatus} por ${user.name}`;
  addNewNotificationLog(notifMsg);

  // Sync widgets
  renderDashboard();
  playNotificationSound();
};

const deleteSelectedTransaction = () => {
  if (!activeSelectedDetailId) return;
  
  const tx = AppStore.getTransactions().find(t => t.id === activeSelectedDetailId);
  if (tx && tx.bagId) {
    alert('Esta transação já pertence a um malote enviado e não pode ser destruída.');
    return;
  }

  if (confirm(`Tem certeza de que deseja descartar permanentemente o comprovante "${tx.title}"?`)) {
    AppStore.deleteTransaction(activeSelectedDetailId);
    addNewNotificationLog(`Comprovante "${tx.title}" excluído do livro razão.`);
    closeDetailsModal();
    renderDashboard();
    playNotificationSound();
  }
};


// ==========================================
//          MODAL: BATCHES BUNDLE CREATE
// ==========================================

const openBagCreationModal = () => {
  const txs = AppStore.getTransactions();
  elements.bagModalDocumentsSelector.innerHTML = '';
  
  // Set incremental index serial number
  const bagsCount = AppStore.getBags().length;
  elements.bagInputCode.value = `MAL-2026-00${bagsCount + 1}`;
  elements.bagInputNotes.value = '';

  // Get all transactions not associated with any malote bags yet
  const availableTxs = txs.filter(t => !t.bagId);

  if (availableTxs.length === 0) {
    elements.bagModalDocumentsSelector.innerHTML = `
      <p class="text-center py-6 text-slate-400 text-xs font-bold leading-normal">
        Nenhum boleto ou nota fiscal disponível para fechamento.<br>
        <span class="text-[10px] text-slate-400 font-normal">Todos os comprovantes ativos já foram atribuídos a malotes anteriores!</span>
      </p>
    `;
    elements.bagComputedSum.textContent = formatCurrency(0);
    elements.bagComputedCount.textContent = '0 documentos';
  } else {
    availableTxs.forEach(tx => {
      const row = document.createElement('label');
      row.className = 'flex items-center justify-between gap-3 p-2.5 rounded-xl hover:bg-white border border-transparent hover:border-slate-100 transition-colors cursor-pointer select-none';
      row.innerHTML = `
        <div class="flex items-center gap-2.5 min-w-0">
          <input type="checkbox" value="${tx.id}" class="bag-doc-check w-4 h-4 rounded-md text-indigo-600 focus:ring-0 cursor-pointer" />
          <div class="truncate">
            <span class="text-xs font-bold text-slate-800 block truncate">${tx.title}</span>
            <span class="text-[9px] text-slate-400 font-mono">${tx.category} • ${tx.status}</span>
          </div>
        </div>
        <span class="text-xs font-extrabold text-slate-800 font-mono">${formatCurrency(tx.amount)}</span>
      `;

      // Recalculate quantities sum upon actions selection
      row.querySelector('.bag-doc-check').addEventListener('change', updateBagModalCalculations);

      elements.bagModalDocumentsSelector.appendChild(row);
    });
  }

  updateBagModalCalculations();
  elements.modalBagCreation.classList.remove('hidden');
};

const closeBagCreationModal = () => {
  elements.modalBagCreation.classList.add('hidden');
};

const updateBagModalCalculations = () => {
  const checkboxes = document.querySelectorAll('.bag-doc-check:checked');
  const txs = AppStore.getTransactions();
  
  let totalNum = 0;
  let sumAmount = 0;

  checkboxes.forEach(cb => {
    const item = txs.find(t => t.id === cb.value);
    if (item) {
      totalNum++;
      sumAmount += item.amount;
    }
  });

  elements.bagComputedCount.textContent = `${totalNum} documento${totalNum !== 1 ? 's' : ''} selecionado${totalNum !== 1 ? 's' : ''}`;
  elements.bagComputedSum.textContent = formatCurrency(sumAmount);
};

const saveBagFromModalSubmission = (e) => {
  let notesValue = elements.bagInputNotes.value.trim();
  e.preventDefault();
  
  const selectedCheckboxes = document.querySelectorAll('.bag-doc-check:checked');
  if (selectedCheckboxes.length === 0) {
    alert('Erro: Selecione ao menos um comprovante para incluir no fechamento do malote.');
    return;
  }

  const code = elements.bagInputCode.value;
  const txIdsSelected = Array.from(selectedCheckboxes).map(cb => cb.value);

  const txs = AppStore.getTransactions();
  let accumulatedSum = 0;

  // Bind transactions to the bag and save
  txIdsSelected.forEach(id => {
    const idx = txs.findIndex(t => t.id === id);
    if (idx >= 0) {
      txs[idx].bagId = code;
      accumulatedSum += txs[idx].amount;
    }
  });

  AppStore.setTransactions(txs);

  // Generate new Bag object
  const newBag = {
    id: `bag-${Date.now()}`,
    code: code,
    createdAt: new Date().toISOString(),
    status: 'ENVIADO',
    transactionsCount: txIdsSelected.length,
    totalAmount: accumulatedSum,
    notes: notesValue || 'Fechamento rápido de despesas.'
  };

  AppStore.saveBag(newBag);
  addNewNotificationLog(`Malote consolidado ${code} fechado e enviado para a auditoria.`);

  closeBagCreationModal();
  switchView('bags');
  createTopAlertToast(`Malote "${code}" criado com êxito!`);
  playNotificationSound();
};

const dispatchBag = (id) => {
  const bags = AppStore.getBags();
  const idx = bags.findIndex(b => b.id === id);
  if (idx < 0) return;

  bags[idx].status = 'ENVIADO';
  localStorage.setItem('pepper_bags', JSON.stringify(bags));
  
  addNewNotificationLog(`Envio físico confirmado para o malote ${bags[idx].code}.`);
  renderBags();
  playNotificationSound();
  alert(`Protocolo de envio consolidado!\nO Malote ${bags[idx].code} agora encontra-se em trânsito postal para a matriz.`);
};


// ==========================================
//               USER SWAP DIALOGS
// ==========================================

const switchActiveUser = () => {
  const user = AppStore.getActiveUser();
  const nextTarget = user.username === 'ana' ? 'swift' : 'ana';
  const swapped = AppStore.switchUser(nextTarget);

  createTopAlertToast(`Sessão mudada para: ${swapped.name}`, 'sync');

  // Trigger page views update
  renderDashboard();
  if (activeView === 'reports') renderReports();
  if (activeView === 'settings') renderSettings();

  playNotificationSound();
};


// ==========================================
//          ALERST CHIPS & TOAST DIALOG
// ==========================================

const createTopAlertToast = (text, iconName = 'done') => {
  const container = document.createElement('div');
  container.className = 'fixed top-4 inset-x-4 md:left-auto md:right-4 md:w-80 bg-[#131b2e] text-white border border-[#3f465c]/35 rounded-2xl p-4 flex items-center gap-3 shadow-2xl z-50 animate-in slide-in-from-top-12 duration-300 pointer-events-auto select-none';
  container.innerHTML = `
    <span class="material-symbols-outlined text-indigo-400 bg-white/10 p-2 rounded-xl border border-white/10">${iconName}</span>
    <div class="flex-1 truncate">
      <p class="text-xs font-black font-display text-white">Mensagem do sistema</p>
      <p class="text-[10px] text-[#bec6e0]/90 truncate mt-0.5 leading-none font-medium">${text}</p>
    </div>
  `;

  document.body.appendChild(container);

  // Automatically sweep away
  setTimeout(() => {
    container.classList.add('animate-out', 'fade-out', 'slide-out-to-top-12', 'duration-300');
    container.addEventListener('animationend', () => {
      container.remove();
    });
  }, 4000);
};


// ==========================================
//             ALERTS BELL & NOTIFS
// ==========================================

const loadNotificationLogs = () => {
  elements.notificationItemsContainer.innerHTML = '';
  // Keep only first 4 items for aesthetic cleanliness
  const unreadCount = notificationsList.filter(n => n.unread).length;
  
  if (unreadCount > 0) {
    elements.notifBadge.classList.remove('hidden');
  } else {
    elements.notifBadge.classList.add('hidden');
  }

  notificationsList.forEach(item => {
    const row = document.createElement('div');
    row.className = `p-3.5 hover:bg-slate-50 border-b border-slate-50 flex items-start gap-2.5 transition-colors cursor-pointer select-text ${item.unread ? 'bg-indigo-50/20' : ''}`;
    row.innerHTML = `
      <span class="w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${item.unread ? 'bg-indigo-500' : 'bg-slate-300'}"></span>
      <div class="flex-1 truncate">
        <p class="text-xs text-slate-700 font-extrabold font-display leading-tight truncate-two-lines whitespace-normal select-all">${item.text}</p>
        <span class="text-[9px] text-slate-400 font-mono font-semibold block mt-1">${item.time}</span>
      </div>
    `;

    // Click to mark as read
    row.addEventListener('click', () => {
      item.unread = false;
      loadNotificationLogs();
    });

    elements.notificationItemsContainer.appendChild(row);
  });
};

const addNewNotificationLog = (text) => {
  notificationsList.unshift({
    id: Date.now(),
    text: text,
    time: 'Agora mesmo',
    unread: true
  });
  loadNotificationLogs();
};


// ==========================================
//          SMART Assistant CHAT BOT
// ==========================================

const toggleChatDrawer = () => {
  const isHidden = elements.aiChatDrawer.classList.contains('hidden');
  
  if (isHidden) {
    elements.aiChatDrawer.classList.remove('hidden');
    elements.aiChatDrawer.classList.add('flex');
    renderChatHistory();
  } else {
    elements.aiChatDrawer.classList.add('hidden');
    elements.aiChatDrawer.classList.remove('flex');
  }
};

const renderChatHistory = () => {
  const history = AppStore.getChatHistory();
  elements.chatMessagesBody.innerHTML = '';

  history.forEach(item => {
    const box = document.createElement('div');
    const isAi = item.sender === 'ai';
    
    // Aesthetic alignments based on sender
    if (isAi) {
      box.className = 'max-w-[85%] bg-white border border-slate-100 p-3.5 rounded-2xl rounded-tl-sm self-start shadow-xs flex flex-col gap-1 inline-block animate-in fade-in duration-200';
      box.innerHTML = `
        <span class="text-[8px] font-mono tracking-widest uppercase font-black text-indigo-500 mb-0.5 leading-none block">Pepper AI Assessor</span>
        <div class="text-xs font-semibold leading-relaxed text-slate-700 select-text">${formatMarkdownText(item.text)}</div>
        <span class="text-[8px] text-slate-400 font-mono text-right mt-1 font-bold leading-none">${item.time || 'Agora'}</span>
      `;
    } else {
      box.className = 'max-w-[85%] bg-[#131b2e] text-white p-3.5 rounded-2xl rounded-tr-sm self-end shadow-md flex flex-col gap-1 ml-auto animate-in fade-in duration-200';
      box.innerHTML = `
        <span class="text-[8px] font-mono tracking-widest uppercase font-black text-[#bec6e0]/80 mb-0.5 leading-none block">Operador Logs</span>
        <div class="text-xs font-medium leading-relaxed text-[#f2f4f6] select-text">${item.text}</div>
        <span class="text-[8px] text-[#bec6e0]/70 font-mono text-right mt-1 font-bold leading-none">${item.time || 'Agora'}</span>
      `;
    }

    elements.chatMessagesBody.appendChild(box);
  });

  // Scroll smoothly to bottom
  elements.chatMessagesBody.scrollTop = elements.chatMessagesBody.scrollHeight;
};

// Simulated friendly localized Markdown parsers for chatbot bolding
const formatMarkdownText = (text) => {
  return text.replace(/\*\*(.*?)\*\*/g, '<strong class="font-extrabold text-[#131b2e]">$1</strong>')
             .replace(/`([^`]+)`/g, '<code class="bg-indigo-50 text-indigo-600 px-1 py-0.5 rounded-sm font-mono text-[10px]">$1</code>');
};

const processAIQuery = (queryText) => {
  const txs = AppStore.getTransactions();
  const userName = AppStore.getActiveUser().name;
  const lower = queryText.toLowerCase();

  let responseText = '';

  if (lower.includes('saldo') || lower.includes('gast') || lower.includes('custo') || lower.includes('dinheir')) {
    const total = txs.reduce((sum, t) => sum + t.amount, 0);
    responseText = `Olá **${userName}**! Atualmente, o saldo total somado de todas as despesas registradas no banco de dados local da filial é de **${formatCurrency(total)}**.\n\nEste mês apresenta uma ótima eficiência de gestão com base em reduções operacionais consolidadas.`;
  } 
  else if (lower.includes('pend') || lower.includes('comprovant') || lower.includes('nf') || lower.includes('fata')) {
    const pendingsList = txs.filter(t => t.status === 'PENDENTE' || t.status === 'CONFIRMAR VÍNCULO');
    if (pendingsList.length === 0) {
      responseText = 'Ótimas notícias! **Todos os comprovantes foram devidamente anexados** e conciliados com a controladoria central. No momento, não restam pendências financeiras no painel!';
    } else {
      responseText = `No momento, identifiquei **${pendingsList.length} despesa${pendingsList.length !== 1 ? 's' : ''} pendente${pendingsList.length !== 1 ? 's' : ''}** de comprovante digital de pagamento:\n\n` +
      pendingsList.map(t => `- **${t.title}** (${formatCurrency(t.amount)})`).join('\n') +
      `\n\nPor favor, utilize o botão **"Novo Envio"** ou acesse os detalhes do boleto para anexá-los.`;
    }
  } 
  else if (lower.includes('malot') || lower.includes('enviar') || lower.includes('logistic')) {
    const bagsCount = AppStore.getBags().length;
    responseText = `Você possui **${bagsCount} malote${bagsCount !== 1 ? 's' : ''} gerado${bagsCount !== 1 ? 's' : ''}** no sistema no momento.\n\n**Como criar um malote?**\n1. Vá até a aba **"Malotes"** no painel lateral;\n2. Clique em **"Gerar Novo Malote"**;\n3. Selecione os comprovantes digitais que deseja consolidar;\n4. Se necessário, salve-o e imprima a folha de rosto postal.`;
  } 
  else if (lower.includes('relatori') || lower.includes('analis') || lower.includes('distribuic')) {
    const total = txs.reduce((sum, t) => sum + t.amount, 0);
    const infra = txs.filter(t => t.category === 'Infraestrutura').reduce((sum, t) => sum + t.amount, 0);
    const consult = txs.filter(t => t.category === 'Consultoria').reduce((sum, t) => sum + t.amount, 0);
    const maint = txs.filter(t => t.category === 'Manutenção').reduce((sum, t) => sum + t.amount, 0);

    responseText = `Aqui está o sumário de rateio por categoria para os **${txs.length} comprovantes** cadastrados:\n\n` +
      `- **Infraestrutura**: ${formatCurrency(infra)} (${(total > 0 ? (infra/total * 100) : 0).toFixed(0)}%)\n` +
      `- **Consultoria**: ${formatCurrency(consult)} (${(total > 0 ? (consult/total * 100) : 0).toFixed(0)}%)\n` +
      `- **Manutenção**: ${formatCurrency(maint)} (${(total > 0 ? (maint/total * 100) : 0).toFixed(0)}%)\n\n` +
      `Para uma visualização detalhada com estatísticas, visite a aba **"Relatórios"** no menu principal.`;
  } 
  else {
    responseText = `Entendi sua dúvida, **${userName}**. Como seu assistente financeiro Pepper, estou habilitado a fazer auditorias rápidas no banco local de despesas.\n\nVocê pode me perguntar sobre:\n- \`Saldo de Gastos\`\n- \`Pendências de Comprovantes\`\n- \`Estatísticas de Relatórios\`\n- \`Guia de Malotes\``;
  }

  // Record user bubble
  AppStore.addChatMessage({
    id: `u-${Date.now()}`,
    sender: 'user',
    text: queryText,
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  });
  renderChatHistory();

  // Simulate thinking bubble response delay
  setTimeout(() => {
    AppStore.addChatMessage({
      id: `ai-${Date.now()}`,
      sender: 'ai',
      text: responseText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });
    renderChatHistory();
    playNotificationSound();
  }, 400);
};


// ==========================================
//          IMMEDIATE ANEXO SIMULATION
// ==========================================

const handleSimulatedStatementImport = () => {
  if (confirm('Simular upload de extrato OFX/PDF bancário de conciliação?\n\nEste utilitário simulará o recebimento de extrato eletrônico e injetará 2 novas cobranças de despesas no banco de dados local.')) {
    const userName = AppStore.getActiveUser().name;
    
    const simNewTxs = [
      {
        id: `tx-ext-${Date.now()}-1`,
        title: 'Fornecedor de Logística Speed',
        date: 'Hoje, 08:30',
        amount: 8350.00,
        category: 'Serviços',
        status: 'CONFIRMAR VÍNCULO',
        type: 'NOTA_FISCAL',
        hasAttachment: true,
        attachmentName: 'comprovante_logistica_03.pdf',
        notes: 'Simulado via importação automática de extrato.'
      },
      {
        id: `tx-ext-${Date.now()}-2`,
        title: 'Campanha Google Premium',
        date: 'Ontem, 20:10',
        amount: 3200.00,
        category: 'Marketing',
        status: 'CONCILIADO',
        type: 'OUTRO',
        hasAttachment: false,
        notes: 'Débito automático simulado via extrato.'
      }
    ];

    simNewTxs.forEach(t => AppStore.saveTransaction(t));
    addNewNotificationLog(`Extrato bancário reconciliador processado por ${userName}.`);
    
    renderDashboard();
    playNotificationSound();
    createTopAlertToast('Extrato processado: 2 novos lançamentos anexados!');
  }
};


// ==========================================
//             EVENT LISTENERS
// ==========================================

const initEventListeners = () => {
  // Global search input
  elements.globalSearch.addEventListener('input', (e) => handleGlobalSearch(e.target.value));
  elements.clearSearchBtn.addEventListener('click', () => {
    elements.globalSearch.value = '';
    handleGlobalSearch('');
  });
  elements.clearSearchBannerBtn.addEventListener('click', () => {
    elements.globalSearch.value = '';
    handleGlobalSearch('');
  });

  // Notifications Bell dropdown trigger
  elements.notifBellBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    elements.notifDropdown.classList.toggle('hidden');
    elements.profileDropdown.classList.add('hidden');
  });

  elements.btnClearNotifications.addEventListener('click', () => {
    notificationsList.forEach(n => n.unread = false);
    loadNotificationLogs();
    createTopAlertToast('Notificações limpas!', 'done_all');
  });

  // User Profile controls
  elements.profileAvatarBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    elements.profileDropdown.classList.toggle('hidden');
    elements.notifDropdown.classList.add('hidden');
  });

  // Click outside to hide notifications / dropdown panels
  document.addEventListener('click', () => {
    elements.notifDropdown.classList.add('hidden');
    elements.profileDropdown.classList.add('hidden');
  });

  // Prevent dropdown closing when clicking inside
  elements.notifDropdown.addEventListener('click', (e) => e.stopPropagation());
  elements.profileDropdown.addEventListener('click', (e) => e.stopPropagation());

  // Quick swap profiles
  elements.btnSwitchUserDrop.addEventListener('click', switchActiveUser);
  elements.btnQuickSwapAside.addEventListener('click', switchActiveUser);
  elements.btnQuickSwapHeader.addEventListener('click', switchActiveUser);
  
  elements.btnResetDbDrop.addEventListener('click', () => {
    if (confirm('Limpar banco de dados local e restaurar despesas padrões do protótipo?')) {
      AppStore.resetDatabase();
      loadNotificationLogs();
      renderDashboard();
      createTopAlertToast('Base de dados Pepper redefinida!', 'restart_alt');
      playNotificationSound();
    }
  });

  elements.btnLogoutSidebar.addEventListener('click', () => {
    alert('Sessão encerrada com sucesso! (Fluxo simulado de logout)');
  });

  // Action Buttons clicks Modals triggerings
  elements.btnAddTxAside.addEventListener('click', openAddTransactionModal);
  elements.quickActionNew.addEventListener('click', openAddTransactionModal);
  elements.mobileCentralFab.addEventListener('click', openAddTransactionModal);
  
  elements.quickActionExtract.addEventListener('click', handleSimulatedStatementImport);
  elements.quickActionBundle.addEventListener('click', openBagCreationModal);
  if (elements.btnCreateBagTrigger) {
    elements.btnCreateBagTrigger.addEventListener('click', openBagCreationModal);
  }

  // Add transaction Modal close button
  elements.closeTxModalBtn.addEventListener('click', closeAddTransactionModal);
  elements.btnCancelTxCreation.addEventListener('click', closeAddTransactionModal);

  // Attachment / File Simulating triggers
  elements.txDragDrop.addEventListener('click', () => {
    elements.txHiddenFileInput.click();
  });

  elements.txHiddenFileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
      handleFileSimulate(e.target.files[0].name);
    }
  });

  // Drag and drop events
  elements.txDragDrop.addEventListener('dragover', (e) => {
    e.preventDefault();
    elements.txDragDrop.classList.add('border-indigo-400', 'bg-indigo-50/10');
  });

  elements.txDragDrop.addEventListener('dragleave', () => {
    elements.txDragDrop.classList.remove('border-indigo-400', 'bg-indigo-50/10');
  });

  elements.txDragDrop.addEventListener('drop', (e) => {
    e.preventDefault();
    elements.txDragDrop.classList.remove('border-indigo-400', 'bg-indigo-50/10');
    if (e.dataTransfer.files.length > 0) {
      handleFileSimulate(e.dataTransfer.files[0].name);
    }
  });

  elements.btnCancelSimulFile.addEventListener('click', (e) => {
    e.stopPropagation();
    simulatedFilename = '';
    elements.simulatedUploadFileChip.classList.add('hidden');
    elements.txHiddenFileInput.value = '';
    elements.txInputStatus.value = 'PENDENTE';
  });

  // Form submission handler
  elements.formAddTxInner.addEventListener('submit', (e) => {
    e.preventDefault();

    const titleVal = elements.txInputTitle.value.trim();
    const amountVal = parseFloat(elements.txInputAmount.value);
    const typeVal = elements.txInputType.value;
    const categoryVal = elements.txInputCategory.value;
    const statusVal = elements.txInputStatus.value;
    const notesVal = elements.txInputNotes.value.trim();

    if (!titleVal || isNaN(amountVal)) {
      alert('Erro: Insira título e valor de cobrança válidos.');
      return;
    }

    const hasFile = !!simulatedFilename;

    const newTx = {
      id: `tx-${Date.now()}`,
      title: titleVal,
      date: 'Hoje, ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      amount: amountVal,
      category: categoryVal,
      status: statusVal,
      type: typeVal,
      hasAttachment: hasFile,
      attachmentName: simulatedFilename || undefined,
      notes: notesVal
    };

    AppStore.saveTransaction(newTx);
    addNewNotificationLog(`Comprovante "${titleVal}" de ${formatCurrency(amountVal)} enviado por ${AppStore.getActiveUser().name}`);

    closeAddTransactionModal();
    renderDashboard();
    
    // Highlight with slide alerts
    createTopAlertToast('Despesa lançada com sucesso!');
    playNotificationSound();
  });

  // Details Modal controls Actions
  elements.closeDetailsModalBtn.addEventListener('click', closeDetailsModal);
  elements.detailBtnCloseModal.addEventListener('click', closeDetailsModal);
  elements.detailBtnDelete.addEventListener('click', deleteSelectedTransaction);

  elements.btnStatusToPending.addEventListener('click', () => changeSelectedTransactionStatus('PENDENTE'));
  elements.btnStatusToConfirm.addEventListener('click', () => changeSelectedTransactionStatus('CONFIRMAR VÍNCULO'));
  elements.btnStatusToConciliated.addEventListener('click', () => changeSelectedTransactionStatus('CONCILIADO'));
  
  elements.detailBtnDirectAttach.addEventListener('click', () => {
    // Generate immediate simulated file attachment
    const txs = AppStore.getTransactions();
    const idx = txs.findIndex(t => t.id === activeSelectedDetailId);
    if (idx >= 0) {
      txs[idx].hasAttachment = true;
      txs[idx].attachmentName = `boleto_vinculo_${Date.now().toString().slice(-4)}.png`;
      txs[idx].status = 'CONFIRMAR VÍNCULO';
      AppStore.setTransactions(txs);
      
      addNewNotificationLog(`Comprovante anexado no boleto "${txs[idx].title}".`);
      createTopAlertToast('Documento anexado!');
      
      // Refresh modal and dashboard
      openDetailsModal(activeSelectedDetailId);
      renderDashboard();
      playNotificationSound();
    }
  });

  // Bag model closing closing
  elements.closeBagModalBtn.addEventListener('click', closeBagCreationModal);
  elements.btnCancelBag.addEventListener('click', closeBagCreationModal);
  elements.formBagCreationInner.addEventListener('submit', saveBagFromModalSubmission);

  // Settings clicks
  elements.settingsBtnSwap.addEventListener('click', switchActiveUser);
  elements.themeBtnLight.addEventListener('click', () => {
    AppStore.setTheme('light');
    document.documentElement.classList.remove('dark');
    renderSettings();
  });
  elements.themeBtnDark.addEventListener('click', () => {
    AppStore.setTheme('dark');
    document.documentElement.classList.add('dark');
    renderSettings();
  });

  elements.settingToggleSound.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    elements.settingToggleSound.setAttribute('data-active', soundEnabled ? 'true' : 'false');
    
    const slider = elements.settingToggleSound.querySelector('div');
    if (soundEnabled) {
      elements.settingToggleSound.classList.replace('bg-slate-300', 'bg-indigo-600');
      slider.classList.replace('translate-x-0', 'translate-x-4');
    } else {
      elements.settingToggleSound.classList.replace('bg-indigo-600', 'bg-slate-300');
      slider.classList.replace('translate-x-4', 'translate-x-0');
    }
  });

  elements.btnWipeDatabase.addEventListener('click', () => {
    if (confirm('ATENÇÃO: Deseja esvaziar todo o histórico e despesas salvas? Isso não afetará as amostras se você recarregar a página.')) {
      localStorage.clear();
      AppStore.init();
      switchView('dashboard');
      renderDashboard();
      createTopAlertToast('Banco de dados local limpo!', 'delete_forever');
    }
  });

  elements.btnRestoreSamples.addEventListener('click', () => {
    AppStore.resetDatabase();
    switchView('dashboard');
    renderDashboard();
    createTopAlertToast('Amostras de teste originais restauradas!', 'settings_backup_restore');
    playNotificationSound();
  });

  // Smart Chat fab and drawer buttons
  elements.btnChatAiFab.addEventListener('click', toggleChatDrawer);
  elements.closeChatDrawerBtn.addEventListener('click', toggleChatDrawer);

  elements.aiChatInputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = elements.aiChatInputField.value.trim();
    if (!text) return;
    elements.aiChatInputField.value = '';
    processAIQuery(text);
  });

  // preset chips prompt assistants
  document.querySelectorAll('.chat-preset').forEach(chip => {
    chip.addEventListener('click', () => {
      const query = chip.textContent;
      processAIQuery(query);
    });
  });

  // Close modals when ESC pressed
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAddTransactionModal();
      closeDetailsModal();
      closeBagCreationModal();
      elements.aiChatDrawer.classList.add('hidden');
      elements.aiChatDrawer.classList.remove('flex');
    }
  });

  // Hook reports tab filters
  elements.reportFilterCategory.addEventListener('change', renderReports);
  elements.reportFilterStatus.addEventListener('change', renderReports);
};


// ==========================================
//              INITIAL BOOT
// ==========================================

const init = () => {
  // Apply initial dark theme class if persisted
  const selectedTheme = AppStore.getTheme();
  if (selectedTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  initNavNavigation();
  initEventListeners();
  
  // First load renders
  renderDashboard();
  loadNotificationLogs();
  
  console.log('Pepper Ledger Admin system initialized with total success!');
};

// Start the core Vanilla framework application
window.addEventListener('DOMContentLoaded', init);
init();
