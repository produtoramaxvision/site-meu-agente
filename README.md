# 🤖 Meu Agente - Site Institucional & Blog

<p align="center">
  <strong>Transforme Seu WhatsApp em Uma Equipe de Agentes de IA Trabalhando 24 horas</strong>
</p>

<p align="center">
  <a href="https://site.meuagente.api.br">Site</a> •
  <a href="https://app.meuagente.api.br">App</a> •
  <a href="#documentação">Docs</a> •
  <a href="#contato">Contato</a>
</p>

---

## 📋 Sobre o Projeto

Este repositório contém o **site institucional e blog** do **Meu Agente**, um micro SaaS que disponibiliza uma equipe de Agentes de IA operando diretamente no WhatsApp para executar tarefas de atendimento, operações e automação empresarial.

### 🎯 O que é o Meu Agente?

- **12 Agentes de IA** especializados (Financeiro, SDR, Marketing, Dev, Vídeo, etc.)
- **Automação 24/7** via WhatsApp Business
- **Economia de até 40h/mês** em tarefas operacionais
- **Aumento de até 35%** nas conversões com SDR virtual
- **Conformidade LGPD** e criptografia de ponta a ponta

### 📦 Planos Disponíveis

| Plano | Valor | Principais Recursos |
|-------|-------|---------------------|
| **Free** | R$ 0 | App em nuvem, agentes básicos manuais |
| **Básico** | R$ 497/mês | Exportação, Agente de Agendamento |
| **Business** | R$ 997/mês | Número dedicado, SDR, Marketing, Dev, Vídeo |
| **Premium** | R$ 1.497/mês | Confirmação, Remarketing, Follow-up, Backups |

---

## 🚀 Tecnologias

### Frontend

- **React 18** com TypeScript
- **Vite** para build otimizado
- **Tailwind CSS 3.4+** para estilização
- **shadcn/ui** para componentes UI
- **Lucide React** para ícones
- **React Router DOM** para navegação
- **Framer Motion** para animações

### Formulários e Validação

- **React Hook Form** para gestão de formulários
- **Zod** para validação de schemas

### Blog e Conteúdo

- **React Markdown** para renderização de posts
- **Gray Matter** para processamento de frontmatter
- **React Helmet Async** para SEO e meta tags

### Backend e Infraestrutura

- **Supabase** - Database, Auth, Edge Functions
- **Stripe** - Processamento de pagamentos
- **Vercel** - Hospedagem e deployment

---

## 📁 Estrutura do Projeto

```
site-meu-agente/
├── content/
│   └── blog/                    # Posts do blog em Markdown
│       ├── agentes-ia-economizar-tempo.md
│       ├── automatize-atendimento-ia-5-passos.md
│       ├── sdr-virtual-qualificar-leads.md
│       └── ...
├── docs/                        # Documentação
│   ├── guia_meu_agente.md      # Guia completo do usuário
│   ├── meu_agente_prd.md       # Product Requirements Document
│   ├── GUIA_AGENTES.md         # Referência rápida de agentes
│   ├── ONBOARDING_BUSINESS.md  # Guia de implantação Business/Premium
│   ├── CHANGELOG.md            # Histórico de mudanças
│   ├── politica-de-privacidade.md
│   ├── termos-de-uso.md
│   └── dev/                    # Documentação técnica
│       ├── ARQUITETURA.md
│       ├── FLUXO_CHECKOUT.md
│       ├── INTEGRACAO_STRIPE.md
│       └── OTIMIZACOES.md
├── public/
│   ├── sitemap.xml
│   ├── robots.txt
│   ├── _headers
│   └── fonts/
├── src/
│   ├── components/
│   │   ├── layout/             # Header, Footer
│   │   ├── sections/           # Seções da home
│   │   ├── about/              # Componentes da página Sobre
│   │   └── ui/                 # Componentes shadcn/ui
│   ├── pages/                  # Páginas da aplicação
│   ├── hooks/                  # Custom hooks
│   ├── lib/                    # Utilitários
│   ├── integrations/           # Integrações (Supabase)
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── supabase/                   # Configuração Supabase
├── package.json
├── tailwind.config.ts
├── vite.config.ts
└── tsconfig.json
```

---

## 🌐 Páginas

### Páginas Principais

| Rota | Página | Descrição |
|------|--------|-----------|
| `/` | Index | Landing page com todas as seções |
| `/como-funciona` | ComoFunciona | Deep dive nos agentes e recursos |
| `/planos` | Planos | Planos, preços e calculadora ROI |
| `/sobre-nos` | SobreNos | Empresa, timeline, valores, equipe |
| `/contato` | Contato | Formulário e informações de contato |
| `/faq` | FAQ | Perguntas frequentes categorizadas |
| `/blog` | Blog | Listagem de posts com filtros |
| `/blog/:slug` | BlogPost | Post individual com TOC |
| `/guia-do-usuario` | GuiaDoUsuario | Guia do usuário (Markdown) |
| `/trabalhe-conosco` | TrabalheConosco | Vagas e cultura |
| `/status-do-sistema` | StatusDoSistema | Status dos serviços |
| `/termos-de-uso` | TermosDeUso | Termos de serviço |
| `/politica-de-privacidade` | PoliticaDePrivacidade | Política de privacidade |

### Posts do Blog

1. "Como Agentes de IA no WhatsApp Podem Economizar 40 Horas por Mês"
2. "Guia Completo: Automatize Seu Atendimento com IA em 5 Passos"
3. "SDR Virtual: Como Qualificar Leads Automaticamente pelo WhatsApp"
4. "Gestão Financeira pelo WhatsApp: Vale a Pena?"
5. "7 Exemplos Reais de Empresas que Dobraram Conversões com Agentes de IA"
6. "WhatsApp Business e IA: O Guia Definitivo para 2025"
7. "Como Otimizar Google Ads com IA: Análise Automática de Campanhas"

---

## 🛠️ Desenvolvimento

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/produtoramaxvision/site-meu-agente.git

# Navegue até o diretório
cd site-meu-agente

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:8080`

### Scripts Disponíveis

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build para produção
npm run preview      # Preview do build
npm run lint         # Linting com ESLint
npm run type-check   # Verificação de tipos TypeScript
```

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```bash
# Google Tag Manager
VITE_GTM_ID=GTM-XXXXXXX

# Site URL (para SEO e Open Graph)
VITE_SITE_URL=https://site.meuagente.api.br

# Supabase
VITE_SUPABASE_URL=https://xxx.supabase.co
VITE_SUPABASE_ANON_KEY=xxx

# Stripe
VITE_STRIPE_PUBLIC_KEY=pk_xxx
```

---

## 📦 Build e Deploy

### Build para Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`

### Deploy via Vercel

O projeto está configurado para deploy automático via Vercel:

1. Push para a branch `main`
2. Vercel detecta e faz o build automaticamente
3. Deploy em produção

### Deploy Manual

```bash
# Build
npm run build

# Preview local
npm run preview
```

---

## 📚 Documentação

### Para Usuários

| Documento | Descrição |
|-----------|-----------|
| [Guia do Usuário](docs/guia_meu_agente.md) | Manual completo de uso |
| [Guia de Agentes](docs/GUIA_AGENTES.md) | Referência rápida de comandos |
| [Onboarding Business](docs/ONBOARDING_BUSINESS.md) | Guia de implantação |
| [FAQ](docs/faq.md) | Perguntas frequentes |

### Para Desenvolvedores

| Documento | Descrição |
|-----------|-----------|
| [PRD](docs/meu_agente_prd.md) | Product Requirements Document |
| [Arquitetura](docs/dev/ARQUITETURA.md) | Arquitetura do sistema |
| [Fluxo Checkout](docs/dev/FLUXO_CHECKOUT.md) | Integração site ↔ app |
| [Integração Stripe](docs/dev/INTEGRACAO_STRIPE.md) | Setup de pagamentos |
| [Otimizações](docs/dev/OTIMIZACOES.md) | Performance e PageSpeed |
| [Changelog](docs/CHANGELOG.md) | Histórico de mudanças |

### Legal

| Documento | Descrição |
|-----------|-----------|
| [Termos de Uso](docs/termos-de-uso.md) | Termos de serviço |
| [Política de Privacidade](docs/politica-de-privacidade.md) | LGPD e privacidade |

---

## 🎨 Design System

### Paleta de Cores

O projeto utiliza um design system monocromático baseado em HSL:

- **Brand**: Preto/Cinza com gradientes `brand-900` → `brand-700`
- **Accent**: Verde para CTAs e elementos de destaque
- **Semantic**: Verde (sucesso), Amarelo (aviso), Vermelho (erro)

### Tipografia

- **Fonte**: Inter (Google Fonts)
- **Headings**: 600-700 weight
- **Body**: 400-500 weight

### Componentes

- Customizados do shadcn/ui
- Animações com Framer Motion
- Glassmorphism com `backdrop-filter`

---

## 🔍 SEO

### Implementação

- ✅ Componente `<SEO>` reutilizável
- ✅ Open Graph tags para redes sociais
- ✅ Twitter Card tags
- ✅ Structured Data (JSON-LD)
- ✅ Sitemap.xml dinâmico
- ✅ Robots.txt otimizado

### Schemas JSON-LD

- **Home/Planos**: `SoftwareApplication` com ofertas
- **FAQ**: `FAQPage` com perguntas/respostas
- **Blog**: `Article` com autor e data
- **Organização**: `Organization` com contatos

---

## ♿ Acessibilidade

- ✅ Contraste WCAG AA
- ✅ Foco visível em controles
- ✅ `aria-labels` em botões icon-only
- ✅ Navegação por teclado
- ✅ Suporte a `prefers-reduced-motion`
- ✅ Textos alternativos em imagens

---

## 📊 Performance

### Otimizações

- ✅ Lazy loading de imagens
- ✅ Code splitting automático
- ✅ Compressão de assets
- ✅ Fontes otimizadas
- ✅ Animações CSS preferidas

### Metas Lighthouse

| Métrica | Meta |
|---------|------|
| Performance | 90+ |
| Accessibility | 95+ |
| Best Practices | 95+ |
| SEO | 100 |

---

## 📝 Como Adicionar Posts ao Blog

1. **Crie** um arquivo `.md` em `content/blog/`
2. **Adicione** o frontmatter:

```markdown
---
title: "Título do Post"
slug: "titulo-do-post"
description: "Descrição para SEO"
category: "Automação"
tags: ["IA", "WhatsApp"]
author: "Equipe Meu Agente"
date: "2025-12-07"
coverImage: "/placeholder.svg"
readTime: "8 min"
featured: true
---

# Título do Post

Conteúdo em Markdown...
```

3. **Adicione** os metadados em `src/lib/blog.ts`
4. **Atualize** o `public/sitemap.xml`

---

## 🤝 Contribuindo

1. Fork o repositório
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

---

## 📞 Contato

**Meu Agente**  
São Paulo, Brasil

| Canal | Contato |
|-------|---------|
| 📧 Email | contato@meuagente.api.br |
| 📧 Comercial | comercial@meuagente.api.br |
| 📞 WhatsApp | (11) 95118-2561 |
| 🌐 Site | https://site.meuagente.api.br |
| 📱 App | https://app.meuagente.api.br |

### Redes Sociais

- [Facebook](https://facebook.com/meuagente)
- [Instagram](https://instagram.com/meu_agente)
- [LinkedIn](https://linkedin.com/company/meuagente)
- [YouTube](https://youtube.com/@meuagente)

---

## 📄 Licença

© 2025 Meu Agente. Todos os direitos reservados.

Este é um projeto proprietário. Não é permitida a reprodução, distribuição ou modificação sem autorização prévia.

---

<p align="center">
  Feito com ❤️ pela equipe <strong>Meu Agente</strong>
</p>
