/**
 * Generates a styled DOM element representing a transaction row.
 * @param {Object} tx - The transaction object.
 * @param {Function} onOpenDetails - Callback triggered when clicking detail details button.
 * @param {Function} formatCurrency - Currency formatter helper.
 * @param {Function} formatFriendlyDate - Friendly date formatter helper.
 * @returns {HTMLElement} The created DOM element.
 */
export function createTransactionRow(tx, onOpenDetails, formatCurrency, formatFriendlyDate) {
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

  const friendlyDate = formatFriendlyDate(tx.date);

  itemRow.className = `flex items-center justify-between p-4 bg-white hover:bg-slate-50/50 transition-all ${borderClass}`;
  itemRow.innerHTML = `
    <div class="flex items-center gap-4 shrink-0 min-w-0 flex-1">
      <div class="w-10 h-10 rounded-xl bg-slate-50/80 border border-slate-100 flex items-center justify-center shrink-0">
        <span class="material-symbols-outlined text-slate-500 text-lg">${typeIcon}</span>
      </div>
      <div class="truncate pr-2 text-left">
        <p class="text-xs md:text-sm font-extrabold text-[#131b2e] truncate font-display select-text">${tx.title}</p>
        <div class="flex items-center gap-2 mt-0.5">
          <span class="text-[10px] text-slate-400 font-bold uppercase tracking-wider font-mono">${friendlyDate}</span>
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

  // Attach click listener directly
  itemRow.querySelector('.btn-open-details').addEventListener('click', () => {
    onOpenDetails(tx.id);
  });

  return itemRow;
}
