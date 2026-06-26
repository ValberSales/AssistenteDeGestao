/**
 * Generates a styled DOM element representing a Chat bubble.
 * @param {Object} item - The message object containing sender, text, time.
 * @param {Function} formatMarkdownText - Markdown formatting helper.
 * @returns {HTMLElement} The created DOM element.
 */
export function createChatBubble(item, formatMarkdownText) {
  const box = document.createElement('div');
  const isAi = item.sender === 'ai';
  
  if (isAi) {
    box.className = 'max-w-[85%] bg-white border border-slate-100 p-3.5 rounded-2xl rounded-tl-sm self-start shadow-xs flex flex-col gap-1 inline-block animate-in fade-in duration-200 text-left';
    box.innerHTML = `
      <span class="text-[8px] font-mono tracking-widest uppercase font-black text-indigo-500 mb-0.5 leading-none block">Assistente de Gestão</span>
      <div class="text-xs font-semibold leading-relaxed text-slate-700 select-text">${formatMarkdownText(item.text)}</div>
      <span class="text-[8px] text-slate-400 font-mono text-right mt-1 font-bold leading-none">${item.time || 'Agora'}</span>
    `;
  } else {
    box.className = 'max-w-[85%] bg-[#131b2e] text-white p-3.5 rounded-2xl rounded-tr-sm self-end shadow-md flex flex-col gap-1 ml-auto animate-in fade-in duration-200 text-left';
    box.innerHTML = `
      <span class="text-[8px] font-mono tracking-widest uppercase font-black text-[#bec6e0]/80 mb-0.5 leading-none block">Operador Logs</span>
      <div class="text-xs font-medium leading-relaxed text-[#f2f4f6] select-text">${item.text}</div>
      <span class="text-[8px] text-[#bec6e0]/70 font-mono text-right mt-1 font-bold leading-none">${item.time || 'Agora'}</span>
    `;
  }

  return box;
}
