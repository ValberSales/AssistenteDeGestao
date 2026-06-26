# Registro de Falhas e Aprendizados

Este arquivo é utilizado para registrar falhas, equívocos e problemas encontrados durante o desenvolvimento do protótipo, garantindo que o time (PO, Scrum Master, Senior e Junior Developer) aprenda com os erros e evite regressões.

| Data/Hora | Papel | Descrição da Falha | Causa Raiz | Medida Preventiva / Regra Aprendida |
|-----------|-------|--------------------|------------|-------------------------------------|
| 25/06/2026 | Scrum Master | Dificuldade inicial para localizar o PRD e designs. | Verificação inicial apenas no repositório alvo sem examinar diretórios irmãos em `/home/valber/Documentos`. | Sempre explorar diretórios irmãos se o repositório inicial estiver limpo ou com arquivos vazios. |
| 25/06/2026 | Senior Developer | Erro de Tipo (TypeError) ao carregar o test harness no navegador. | O arquivo `js/app.js` executava o boot de inicialização da UI automaticamente mesmo em ambientes de teste. | Condicionar o `boot()` à existência de um elemento de identificação da UI (ex: `#view-dashboard`) no DOM. |
| 25/06/2026 | Senior Developer | Toasts de aviso permaneciam na tela indefinidamente. | As classes do Tailwind CSS CDN não engajavam keyframes de animação de saída reais em alguns navegadores, impedindo o disparo de 'animationend'. | Adicionar um temporizador de segurança (fallback setTimeout) para forçar a remoção física do DOM. |
| 25/06/2026 | Junior Developer | Indicador dot azul ativo persistia no menu Início. | O elemento contendo a classe do dot azul estava escrito de forma estática (hardcoded) no arquivo index.html. | Revisar os templates HTML estáticos originais para garantir que nenhum estado dinâmico seja fixado no código base. |

