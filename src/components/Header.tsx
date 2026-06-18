import React, { useState } from 'react';
import { Search, Bell, Settings, ChevronDown, LogOut, Check, Sparkles } from 'lucide-react';
import { UserProfile } from '../types';

interface HeaderProps {
  user: UserProfile;
  onLogout: () => void;
  onSearchChange: (query: string) => void;
  searchQuery: string;
  onChangeProfile: () => void;
  notificationsCount: number;
  onOpenNotifications: () => void;
  isDesktop: boolean;
}

export default function Header({
  user,
  onLogout,
  onSearchChange,
  searchQuery,
  onChangeProfile,
  notificationsCount,
  onOpenNotifications,
  isDesktop
}: HeaderProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifDropdownOpen, setNotifDropdownOpen] = useState(false);

  const notifications = [
    { id: 1, text: 'Boleto Aluguel foi conciliado com sucesso.', time: '10:45' },
    { id: 2, text: 'Nova NF anexada aguardando confirmação.', time: 'Ontem' },
    { id: 3, text: 'Faltam comprovantes em 3 transações.', time: '2 dias atrás' }
  ];

  return (
    <header className="w-full h-16 bg-white border-b border-slate-200 sticky top-0 z-40 px-6 flex items-center justify-between">
      {/* Search Input / Left Side */}
      <div className="flex-1 flex items-center gap-4 max-w-md">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input
            type="text"
            className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-slate-400 text-sm py-2 pl-10 pr-4 rounded-lg outline-none transition-all placeholder:text-slate-400 text-slate-700"
            placeholder="Buscar transações, relatórios ou malotes..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </div>

      {/* Right Menu Side */}
      <div className="flex items-center gap-4">
        {/* Quick swap user profile alert */}
        <button
          onClick={onChangeProfile}
          className="hidden sm:flex items-center gap-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-semibold px-2.5 py-1 rounded-full transition-colors active:scale-95 cursor-pointer"
          title="Alternar entre perfis Ana e Gestor Swift"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Trocar Perfil</span>
        </button>

        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setNotifDropdownOpen(!notifDropdownOpen)}
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors relative"
          >
            <Bell className="w-4 h-4" />
            {notificationsCount > 0 && (
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-600 rounded-full"></span>
            )}
          </button>

          {notifDropdownOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-white border border-slate-200 rounded-xl shadow-lg py-2 z-50 text-slate-700 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="px-4 py-2 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                <span className="font-bold text-xs text-slate-800 uppercase tracking-wider">Notificações</span>
                <span className="text-[10px] bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full font-bold">Hoje</span>
              </div>
              <div className="max-h-64 overflow-y-auto">
                {notifications.map((notif) => (
                  <div key={notif.id} className="px-4 py-3 hover:bg-slate-50 border-b border-slate-50 last:border-b-0 flex flex-col gap-0.5 pointer-events-auto cursor-pointer">
                    <p className="text-xs text-slate-700 font-medium">{notif.text}</p>
                    <span className="text-[10px] text-slate-400 font-mono">{notif.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Settings Mini Button */}
        <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors">
          <Settings className="w-4 h-4" />
        </button>

        <div className="h-6 w-[1px] bg-slate-200 mx-1"></div>

        {/* User Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 hover:bg-slate-50 p-1.5 rounded-lg transition-colors cursor-pointer"
          >
            <img
              src={user.avatar}
              alt={user.name}
              className="w-8 h-8 rounded-full object-cover border border-slate-200"
              referrerPolicy="no-referrer"
            />
            {isDesktop && (
              <div className="text-left flex flex-col">
                <span className="text-xs font-bold text-slate-800 flex items-center gap-1">
                  {user.name}
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                </span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">{user.role}</span>
              </div>
            )}
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-200 rounded-xl shadow-lg py-1.5 z-50 animate-in fade-in duration-150">
              <div className="px-4 py-2 border-b border-slate-100">
                <p className="text-xs font-bold text-slate-800">{user.name}</p>
                <p className="text-[10px] text-slate-500 truncate">{user.email}</p>
              </div>
              <button
                onClick={onChangeProfile}
                className="w-full px-4 py-2 text-left text-xs text-slate-700 hover:bg-slate-50 flex items-center gap-2 cursor-pointer font-medium"
              >
                <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                Trocar de Perfil
              </button>
              <button
                onClick={onLogout}
                className="w-full px-4 py-2 text-left text-xs text-red-600 hover:bg-red-50 flex items-center gap-2 cursor-pointer font-bold mt-1"
              >
                <LogOut className="w-3.5 h-3.5" />
                Sair da Conta
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
