# 🏗️ ARQUITETURA - Meu Agente Site

**Versão:** 1.0  
**Última Atualização:** Dezembro/2025

---

## 📋 Índice

1. [Visão Geral](#visão-geral)
2. [Stack Tecnológico](#stack-tecnológico)
3. [Estrutura do Projeto](#estrutura-do-projeto)
4. [Arquitetura de Componentes](#arquitetura-de-componentes)
5. [Fluxo de Dados](#fluxo-de-dados)
6. [Integrações](#integrações)
7. [Build e Deploy](#build-e-deploy)
8. [Performance](#performance)
9. [SEO e Acessibilidade](#seo-e-acessibilidade)
10. [Segurança](#segurança)

---

## 🎯 Visão Geral

Este repositório contém o **site institucional e blog** do Meu Agente. É uma **Single Page Application (SPA)** construída com React, servindo como:

- **Landing page** para conversão de visitantes
- **Blog** para conteúdo educacional e SEO
- **Portal de informações** sobre planos e funcionalidades
- **Gateway de checkout** redirecionando para o app principal

### Diagrama de Arquitetura Alto Nível

```
┌─────────────────────────────────────────────────────────────────┐
│                           USUÁRIO                                │
└──────────────────────────────┬──────────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│                        VERCEL (CDN)                             │
│                     site.meuagente.api.br                        │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                   React SPA (Vite)                       │   │
│  │  • Landing Pages    • Blog    • Planos    • Contato      │   │
│  └────────────────────────────┬────────────────────────────┘   │
└───────────────────────────────┼─────────────────────────────────┘
                                │
           ┌────────────────────┼────────────────────┐
           │                    │                    │
           ▼                    ▼                    ▼
┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│    SUPABASE     │  │     STRIPE      │  │   MEU AGENTE    │
│   (Backend)     │  │   (Payments)    │  │      APP        │
│                 │  │                 │  │                 │
│ • Auth          │  │ • Checkout      │  │ • Dashboard     │
│ • Database      │  │ • Subscriptions │  │ • Agentes IA    │
│ • Edge Functions│  │ • Portal        │  │ • WhatsApp      │
│ • Realtime      │  │                 │  │                 │
└─────────────────┘  └─────────────────┘  └─────────────────┘
```

---

## 🚀 Stack Tecnológico

### Frontend

| Tecnologia | Versão | Propósito |
|------------|--------|-----------|
| **React** | 18.x | Framework UI |
| **TypeScript** | 5.x | Type safety |
| **Vite** | 5.x | Build tool |
| **Tailwind CSS** | 3.4+ | Estilização |
| **shadcn/ui** | Latest | Componentes UI |
| **React Router DOM** | 6.x | Roteamento |
| **React Hook Form** | 7.x | Formulários |
| **Zod** | 3.x | Validação de schemas |

### Conteúdo e SEO

| Tecnologia | Propósito |
|------------|-----------|
| **React Markdown** | Renderização de posts |
| **Gray Matter** | Frontmatter parsing |
| **React Helmet Async** | Meta tags dinâmicas |
| **JSON-LD** | Structured data |

### Backend e Infraestrutura

| Tecnologia | Propósito |
|------------|-----------|
| **Supabase** | Database, Auth, Edge Functions |
| **Stripe** | Pagamentos e assinaturas |
| **Vercel** | Hospedagem e CDN |

### Bibliotecas Auxiliares

| Biblioteca | Propósito |
|------------|-----------|
| **Lucide React** | Ícones |
| **Framer Motion** | Animações |
| **Recharts** | Gráficos |
| **Embla Carousel** | Carrosséis |
| **@tanstack/react-query** | Data fetching |

---

## 📁 Estrutura do Projeto

```
site-meu-agente/
├── content/                    # Conteúdo estático
│   └── blog/                   # Posts em Markdown
│       ├── post-1.md
│       └── post-2.md
│
├── docs/                       # Documentação
│   ├── guia_meu_agente.md     # Guia do usuário
│   ├── meu_agente_prd.md      # PRD
│   ├── GUIA_AGENTES.md        # Referência de agentes
│   ├── ONBOARDING_BUSINESS.md # Onboarding
│   ├── CHANGELOG.md           # Histórico
│   ├── politica-de-privacidade.md
│   ├── termos-de-uso.md
│   └── dev/                   # Docs técnicos
│       ├── ARQUITETURA.md
│       ├── FLUXO_CHECKOUT.md
│       ├── INTEGRACAO_STRIPE.md
│       └── OTIMIZACOES.md
│
├── public/                    # Assets estáticos
│   ├── sitemap.xml
│   ├── robots.txt
│   ├── _headers              # Headers Vercel
│   ├── _redirects            # Redirects Vercel
│   └── fonts/                # Fontes locais
│
├── src/
│   ├── components/
│   │   ├── layout/           # Header, Footer
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   │
│   │   ├── sections/         # Seções da home
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AgentsSection.tsx
│   │   │   ├── PricingSection.tsx
│   │   │   ├── FeaturesSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   └── ...
│   │   │
│   │   ├── about/            # Página Sobre
│   │   │   ├── AboutHero.tsx
│   │   │   ├── TeamGrid.tsx
│   │   │   └── ...
│   │   │
│   │   ├── ui/               # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── ...
│   │   │
│   │   ├── ChatWidget.tsx    # Widget flutuante
│   │   ├── SEO.tsx           # Componente SEO
│   │   ├── GTM.tsx           # Google Tag Manager
│   │   └── NewsletterSignup.tsx
│   │
│   ├── pages/                # Páginas da aplicação
│   │   ├── Index.tsx         # Home
│   │   ├── Planos.tsx        # Preços
│   │   ├── ComoFunciona.tsx  # Produto
│   │   ├── Blog.tsx          # Lista de posts
│   │   ├── BlogPost.tsx      # Post individual
│   │   ├── FAQ.tsx
│   │   ├── Contato.tsx
│   │   └── ...
│   │
│   ├── hooks/                # Custom hooks
│   │   ├── use-mobile.tsx
│   │   ├── use-subscription.ts
│   │   └── use-toast.ts
│   │
│   ├── lib/                  # Utilitários
│   │   ├── utils.ts          # Helpers gerais (cn, etc.)
│   │   ├── blog.ts           # Processamento de blog
│   │   └── seo.ts            # Schemas JSON-LD
│   │
│   ├── integrations/         # Integrações externas
│   │   └── supabase/
│   │       ├── client.ts
│   │       └── types.ts
│   │
│   ├── App.tsx               # Componente raiz + rotas
│   ├── main.tsx              # Entry point
│   └── index.css             # CSS global + design tokens
│
├── supabase/                 # Configuração Supabase local
│   └── config.toml
│
├── package.json
├── tailwind.config.ts
├── vite.config.ts
├── tsconfig.json
├── components.json           # Configuração shadcn/ui
└── vercel.json               # Configuração Vercel
```

---

## 🧩 Arquitetura de Componentes

### Hierarquia de Componentes

```
App.tsx
├── BrowserRouter
│   ├── Header (global)
│   ├── Routes
│   │   ├── Index
│   │   │   ├── HeroSection
│   │   │   ├── LogosSection
│   │   │   ├── AgentsSection
│   │   │   ├── FeaturesSection
│   │   │   ├── HowItWorksSection
│   │   │   ├── ExamplesSection
│   │   │   ├── PricingSection
│   │   │   ├── IntegrationsSection
│   │   │   ├── TestimonialsSection
│   │   │   ├── SecuritySection
│   │   │   ├── FaqSection
│   │   │   └── FinalCTASection
│   │   │
│   │   ├── Planos
│   │   ├── ComoFunciona
│   │   ├── Blog
│   │   ├── BlogPost
│   │   └── ...
│   │
│   ├── Footer (global)
│   └── ChatWidget (global, fixed)
│
└── Toaster (notificações)
```

### Padrões de Componentes

#### 1. Page Components
Componentes de página completa com SEO integrado:

```tsx
// pages/Planos.tsx
export default function Planos() {
  return (
    <>
      <SEO
        title="Planos e Preços | Meu Agente"
        description="..."
        canonicalUrl="/planos"
      />
      <main>
        <PricingHero />
        <PricingCards />
        <ROICalculator />
        <FAQ />
      </main>
    </>
  );
}
```

#### 2. Section Components
Seções reutilizáveis da home:

```tsx
// components/sections/PricingSection.tsx
export function PricingSection() {
  const plans = [...];
  return (
    <section id="precos" className="py-20">
      <Container>
        <SectionHeader />
        <PlanCards plans={plans} />
      </Container>
    </section>
  );
}
```

#### 3. UI Components (shadcn/ui)
Componentes primitivos customizados:

```tsx
// components/ui/button.tsx
const buttonVariants = cva(
  "inline-flex items-center justify-center...",
  {
    variants: {
      variant: { default, outline, ghost, ... },
      size: { sm, md, lg, ... }
    }
  }
);
```

---

## 🔄 Fluxo de Dados

### 1. Conteúdo do Blog (Build-time)

```
content/blog/*.md
       │
       ▼ (gray-matter)
   frontmatter + content
       │
       ▼ (src/lib/blog.ts)
   postsData array
       │
       ▼ (React components)
   Blog.tsx / BlogPost.tsx
```

### 2. Checkout Flow (Runtime)

```
Usuário clica em "Assinar"
       │
       ▼
Verifica sessão Supabase
       │
       ├── Não autenticado ──▶ Redireciona para App
       │                       /auth?redirect=checkout&plan=X
       │
       └── Autenticado ──────▶ Chama Edge Function
                                create-checkout-session
                                       │
                                       ▼
                              Retorna URL do Stripe
                                       │
                                       ▼
                              Redireciona para Stripe Checkout
                                       │
                                       ▼
                              Webhook atualiza Supabase
                                       │
                                       ▼
                              Usuário retorna para success_url
```

### 3. Newsletter Signup

```
Usuário preenche email
       │
       ▼
Validação Zod
       │
       ▼
Envia para Supabase (ou API externa)
       │
       ▼
Toast de confirmação
```

---

## 🔗 Integrações

### Supabase

**Arquivo:** `src/integrations/supabase/client.ts`

```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
```

**Uso Principal:**
- Autenticação de usuários (login/cadastro)
- Chamada de Edge Functions (checkout, portal)
- Futuramente: newsletter, contato

### Stripe

**Arquivo:** `src/hooks/use-subscription.ts`

**Edge Functions utilizadas:**
- `create-checkout-session`: Cria sessão de checkout
- `create-portal-session`: Portal do cliente
- `stripe-webhook`: Recebe eventos do Stripe

### Google Tag Manager

**Arquivo:** `src/components/GTM.tsx`

**Configuração:**
```typescript
const gtmId = import.meta.env.VITE_GTM_ID;
```

---

## 🏗️ Build e Deploy

### Build Local

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview local
npm run preview
```

### Deploy (Vercel)

**Configuração:** `vercel.json`

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

**Processo:**
1. Push para `main` → Vercel detecta
2. Build automático via Vite
3. Deploy para CDN global
4. SSL automático

### Variáveis de Ambiente

| Variável | Descrição |
|----------|-----------|
| `VITE_SUPABASE_URL` | URL do projeto Supabase |
| `VITE_SUPABASE_ANON_KEY` | Chave pública Supabase |
| `VITE_STRIPE_PUBLIC_KEY` | Chave pública Stripe |
| `VITE_GTM_ID` | ID do Google Tag Manager |
| `VITE_SITE_URL` | URL do site para SEO |

---

## ⚡ Performance

### Otimizações Implementadas

| Otimização | Descrição |
|------------|-----------|
| **Code Splitting** | Rotas carregadas via `React.lazy()` |
| **Lazy Loading** | Imagens com `loading="lazy"` |
| **Preload** | Logo e fontes críticas |
| **Preconnect** | Domínios externos (fonts, GTM) |
| **Dimensões explícitas** | Todas imagens com width/height |
| **Pre-bundling** | Dependências críticas no Vite |

### Metas Lighthouse

| Métrica | Meta | Atual |
|---------|------|-------|
| Performance | 90+ | TBD |
| Accessibility | 95+ | TBD |
| Best Practices | 95+ | TBD |
| SEO | 100 | TBD |

### Core Web Vitals

| Métrica | Meta |
|---------|------|
| LCP (Largest Contentful Paint) | < 2.5s |
| FID (First Input Delay) | < 100ms |
| CLS (Cumulative Layout Shift) | < 0.1 |

---

## 🔍 SEO e Acessibilidade

### SEO

**Componente:** `src/components/SEO.tsx`

**Funcionalidades:**
- Meta tags dinâmicas
- Open Graph tags
- Twitter Cards
- Canonical URLs
- JSON-LD schemas

**Schemas implementados:**
- `Organization`
- `SoftwareApplication` (com ofertas)
- `FAQPage`
- `Article` (blog posts)

### Acessibilidade

**Implementações:**
- Contraste WCAG AA
- Foco visível em elementos interativos
- `aria-labels` em botões icon-only
- Navegação por teclado
- `prefers-reduced-motion`
- Alt text em imagens

---

## 🔒 Segurança

### Headers de Segurança

**Arquivo:** `public/_headers`

```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
```

### Práticas de Segurança

| Prática | Descrição |
|---------|-----------|
| **HTTPS** | Forçado via Vercel |
| **CSP** | Content Security Policy |
| **Env vars** | Chaves em variáveis de ambiente |
| **JWT** | Autenticação via Supabase |
| **Sanitização** | Conteúdo Markdown sanitizado |

---

## 📚 Documentação Relacionada

- [Fluxo de Checkout](./FLUXO_CHECKOUT.md)
- [Integração Stripe](./INTEGRACAO_STRIPE.md)
- [Otimizações PageSpeed](./OTIMIZACOES.md)

---

© 2025 Meu Agente. Documentação técnica.
