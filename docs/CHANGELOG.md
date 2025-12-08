# 📋 Changelog - Meu Agente

Todas as alterações significativas deste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/),
e este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

---

## [Não Publicado]

### Planejado
- Sistema de notificações in-app
- Dashboard de analytics público
- Página de cases de sucesso

---

## [2.1.0] - 2025-12-07

### ✨ Adicionado
- **GUIA_AGENTES.md**: Novo guia de referência rápida para todos os 12 agentes organizados por plano
- **ONBOARDING_BUSINESS.md**: Guia de implementação para clientes Business/Premium com timeline de 2 semanas
- **docs/dev/**: Nova pasta para documentação técnica separada do conteúdo de usuário final
- **docs/dev/ARQUITETURA.md**: Documentação completa da arquitetura do site
- Sistema de changelog formal

### 🔄 Alterado
- **guia_meu_agente.md**: Reescrito completamente
  - Expandido de foco único (Agente Financeiro) para cobertura de todos os 12 agentes
  - Reorganizado por plano (Free → Básico → Business → Premium)
  - Adicionadas seções de troubleshooting, integrações e FAQ
  - Atualizado para refletir todos os recursos atuais da plataforma
  
- **meu_agente_prd.md**: Atualizado para versão 2.0
  - Adicionado roadmap 2023-2026
  - Incluído FAQ técnico completo
  - Adicionado glossário de termos
  - Métricas de sucesso expandidas
  
- **README.md**: Completamente reescrito
  - Visão geral completa do projeto
  - Documentação de estrutura de pastas
  - Stack tecnológico detalhado
  - Guias de contribuição
  
- **politica-de-privacidade.md**: Atualizada data de vigência para 07/12/2025

- **termos-de-uso.md**: 
  - Atualizada data de vigência para 07/12/2025
  - Adicionados agentes Premium à lista (Confirmação, Resumo de Grupos, Remarketing, Follow-up)

### 📦 Movido
- `FLUXO_CHECKOUT_SITE_PARA_APP.md` → `docs/dev/FLUXO_CHECKOUT.md`
- `GUIA_IMPLANTACAO_STRIPE_SITE.md` → `docs/dev/INTEGRACAO_STRIPE.md`
- `OTIMIZACOES_PAGESPEED.md` → `docs/dev/OTIMIZACOES.md`

### 🗑️ Removido
- Referências obsoletas a funcionalidades descontinuadas na documentação

---

## [2.0.0] - 2025-11-XX

### ✨ Adicionado
- **4 Novos Agentes Premium**:
  - Agente Confirmação: Confirma agendamentos automaticamente
  - Agente Resumo de Grupos: Sumariza conversas de grupos
  - Agente Remarketing: Reengaja clientes inativos
  - Agente Follow-up: Acompanha leads e oportunidades
  
- **Plano Premium** (R$ 1.497/mês):
  - Acesso a todos os 12 agentes
  - Onboarding VIP com gerente dedicado
  - Suporte prioritário 24/7
  - API completa
  - Usuários ilimitados

- Página de Status do Sistema (`/status`)
- Página de Trabalhe Conosco (`/trabalhe-conosco`)
- Widget de chat flutuante
- Newsletter signup no footer
- Calculadora de ROI na página de planos

### 🔄 Alterado
- Redesign completo da homepage
- Novo sistema de navegação mobile
- Performance otimizada (Lighthouse 90+)
- Animações com Framer Motion
- Nova identidade visual com gradientes

---

## [1.5.0] - 2025-08-XX

### ✨ Adicionado
- **Plano Business** (R$ 997/mês)
- **4 Novos Agentes Business**:
  - Agente SDR: Qualificação de leads
  - Agente Marketing: Campanhas automatizadas
  - Agente Dev: Assistente de código
  - Agente Vídeo: Transcrição e resumos

- Blog integrado com Markdown
- Sistema de SEO dinâmico com React Helmet
- Integração com Google Tag Manager
- Schemas JSON-LD para rich snippets

### 🔄 Alterado
- Migração de Create React App para Vite
- Upgrade para React 18
- Nova estrutura de componentes com shadcn/ui

### 🐛 Corrigido
- Problemas de responsividade em tablets
- Erros de SEO em páginas dinâmicas

---

## [1.0.0] - 2025-03-XX

### ✨ Adicionado
- **Lançamento Inicial do Site**
- Landing page institucional
- **Plano Free** (R$ 0)
- **Plano Básico** (R$ 497/mês)
- **4 Agentes Iniciais**:
  - Agente Financeiro (todos os planos)
  - Agente Web Search (todos os planos)
  - Agente Scrape/Extract (todos os planos)
  - Agente Agendamento (Básico+)

- Páginas:
  - Home
  - Planos
  - Como Funciona
  - FAQ
  - Contato
  - Sobre Nós
  - Política de Privacidade
  - Termos de Uso

- Integração com Supabase (Auth)
- Integração com Stripe (Pagamentos)
- Deploy automatizado via Vercel

---

## Legenda de Tipos

| Tipo | Descrição |
|------|-----------|
| ✨ **Adicionado** | Novas funcionalidades |
| 🔄 **Alterado** | Mudanças em funcionalidades existentes |
| 🗑️ **Removido** | Funcionalidades removidas |
| 🐛 **Corrigido** | Correções de bugs |
| 🔒 **Segurança** | Correções de vulnerabilidades |
| 📦 **Movido** | Arquivos/código reorganizado |

---

## Links de Versões

- [2.1.0]: Versão atual com documentação completa
- [2.0.0]: Lançamento do Plano Premium e novos agentes
- [1.5.0]: Plano Business e migração para Vite
- [1.0.0]: Lançamento inicial

---

## Como Contribuir com o Changelog

Ao fazer um PR, adicione suas mudanças na seção `[Não Publicado]` no topo deste arquivo.

Formato de entrada:
```
- **Nome do recurso**: Descrição breve da mudança
```

O mantenedor moverá as entradas para uma nova versão ao fazer o release.

---

© 2025 Meu Agente. Todos os direitos reservados.
