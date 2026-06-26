# Assistente de Gestão - Financeiro Inteligente (Protótipo Frontend)

Este é o protótipo do front-end do **Assistente de Gestão**, um assistente corporativo inteligente e painel de controle de despesas para filiais. Ele foi desenvolvido como uma Single Page Application (SPA) responsiva utilizando **apenas HTML, JavaScript e CSS puros**, sem o uso de frameworks (como React ou Angular) ou TypeScript, garantindo compatibilidade direta para hospedagem estática no **GitHub Pages** sem a necessidade de pipelines de deploy.

---

## 🚀 Funcionalidades Principais

1. **Painel Início (Dashboard)**:
   - Apresentação de saldo total somado de gastos.
   - Indicadores visuais de boletos pendentes de comprovante digital e quantidade de envios efetuados.
   - Feed interativo de Atividades Recentes com color-coding por status (`CONCILIADO`, `CONFIRMAR VÍNCULO`, `NF PENDENTE`).
   - Ações Rápidas (Novo Envio de Documento, Gerar Novo Malote e Importação simulada de Extratos).

2. **Relatório Financeiro**:
   - Gráfico de rateio por categoria gerado dinamicamente via **SVG inline** e porcentagens de rateio.
   - Filtros dinâmicos por categoria e por status de conciliação.
   - Busca global e análise individualizada de comprovantes.

3. **Gerenciador de Malotes**:
   - Agrupamento físico de comprovantes pendentes de envio postal à matriz controladoria.
   - Selecionador de boletos disponíveis para fechamento, exibindo totalizador de valores e soma em tempo real.
   - Ações de emissão/impressão de protocolo (Guia de Rosto) e despacho.

4. **Ajustes e Aparência**:
   - Alternância rápida de operador (`Ana - Diretora` vs `Swift - Gestor Financeiro`) com atualizações dinâmicas no painel.
   - Seleção de Aparência / Tema do sistema (Suporte a **Modo Escuro / Dark Mode** e Modo Claro).
   - Controle de preferências de som (efeito de alerta sonoro via **Web Audio API**).
   - Ações administrativas: esvaziar localStorage ou restaurar base de dados para amostras originais de teste.

5. **Assistente de Gestão Chatbot**:
   - Assistente inteligente flutuante que responde a perguntas naturais sobre saldo financeiro, malotes, pendências de comprovante ou estatísticas de relatórios.
   - Atalhos/Chips com presets de perguntas frequentes para facilitar a interação.

6. **Busca Global**:
   - Barra de pesquisa integrada no cabeçalho que filtra instantaneamente as despesas exibidas nos painéis com base no título, categoria, status ou notas de lançamento.

---

## 🛠️ Arquitetura e Tecnologia

- **Linguagem**: JavaScript Vanilla (ES6+) modularizado.
- **Estilização**: Tailwind CSS (carregado via CDN oficial com configurações de marca customizadas em tempo de execução) e CSS customizado para transições de tela e scrollbars (`css/style.css`).
- **Persistência**: Operações gravadas diretamente no **`localStorage`** do navegador para simular comportamento estático e persistente.
- **Mock de Dados**: Base de dados default declarada em arquivo físico (`mockData.json`) e carregada de forma resiliente (**Hybrid Mock Loader**) com fallback automático integrado em JS, permitindo que a página funcione perfeitamente tanto hospedada na web quanto aberta diretamente via protocolo local `file://` (evitando bloqueios de CORS do navegador).
- **Som**: Sons gerados programaticamente usando a **Web Audio API** nativa (sem carregar arquivos de áudio pesados).

---

## 💻 Como Rodar o Projeto

Como o protótipo é 100% estático, existem duas maneiras muito fáceis de executá-lo localmente:

### Opção 1: Direto no Navegador (Mais Rápido)
1. Dê um duplo clique no arquivo `index.html` em sua pasta.
2. O navegador abrirá a aplicação imediatamente. Graças ao nosso *Hybrid Mock Loader*, os dados padrão serão carregados com sucesso mesmo sem um servidor local rodando!

### Opção 2: Servidor Estático Local (Recomendado)
Para testar a importação real do arquivo de dados e simular um ambiente de produção web, você pode subir um servidor local rápido utilizando o terminal:

**Com Python 3:**
```bash
python3 -m http.server 3000
```
**Com Node.js (via npx):**
```bash
npx serve -p 3000
```
Abra o navegador em `http://localhost:3000` para navegar na aplicação.
