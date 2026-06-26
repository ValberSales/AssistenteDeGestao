/**
 * Generates a styled DOM element representing a Bag (Malote) card.
 * @param {Object} bag - The bag object.
 * @param {Function} onDispatch - Callback triggered when dispatching a bag.
 * @param {Function} onPrint - Callback triggered when printing a bag details.
 * @param {Function} formatCurrency - Currency formatter helper.
 * @returns {HTMLElement} The created DOM element.
 */
export function createBagCard(bag, onDispatch, onPrint, formatCurrency) {
  const card = document.createElement('div');
  
  // Status style mapping
  let statusClass = 'bg-slate-100 text-slate-700';
  if (bag.status === 'ENVIADO') statusClass = 'bg-indigo-50 border border-indigo-100 text-indigo-700';
  if (bag.status === 'RECEBIDO') statusClass = 'bg-emerald-50 border border-emerald-100 text-emerald-700';
  if (bag.status === 'ABERTO') statusClass = 'bg-amber-50 border border-amber-100 text-amber-700';

  card.className = "bg-white border border-slate-200 p-5 rounded-2xl flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group text-left";
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
        <button class="btn-dispatch-bag bg-indigo-600 hover:bg-slate-800 text-white font-bold text-[10px] uppercase tracking-wider py-1.5 px-3 rounded-lg transition-colors cursor-pointer select-none">
          Protocolar Envio
        </button>
      ` : ''}
      <button class="btn-print-bag text-[#131b2e] border border-slate-200 hover:bg-slate-50 font-bold text-[10px] uppercase tracking-wider py-1.5 px-3 rounded-lg transition-all cursor-pointer select-none flex items-center gap-1 shrink-0">
        <span class="material-symbols-outlined text-xs">print</span>
        <span>Imprimir Guia</span>
      </button>
    </div>
  `;

  // Hook elements event listeners
  const btnDispatch = card.querySelector('.btn-dispatch-bag');
  if (btnDispatch) {
    btnDispatch.addEventListener('click', () => {
      onDispatch(bag.id);
    });
  }

  const btnPrint = card.querySelector('.btn-print-bag');
  btnPrint.addEventListener('click', () => {
    onPrint(bag);
  });

  return card;
}
