# Meu Agente — Product Requirements Document (PRD)

**Versão:** 2.0  
**Data:** Dezembro/2025  
**Contato comercial:** [comercial@meuagente.api.br](mailto:comercial@meuagente.api.br)  
**Site:** https://site.meuagente.api.br  
**App:** https://app.meuagente.api.br

---

## Sumário

1. [Visão Geral](#1-visão-geral)
2. [Público-Alvo](#2-público-alvo)
3. [Planos e Preços](#3-planos-e-preços)
4. [Matriz de Recursos por Plano](#4-matriz-de-recursos-por-plano)
5. [Agentes de IA](#5-agentes-de-ia)
6. [Casos de Uso por Segmento](#6-casos-de-uso-por-segmento)
7. [Fluxos de Uso no WhatsApp](#7-fluxos-de-uso-no-whatsapp)
8. [Integrações](#8-integrações)
9. [Segurança, Privacidade e Conformidade](#9-segurança-privacidade-e-conformidade)
10. [Suporte e SLAs](#10-suporte-e-slas)
11. [Métricas de Sucesso](#11-métricas-de-sucesso)
12. [Roadmap](#12-roadmap)
13. [FAQ Técnico](#13-faq-técnico)
14. [Glossário](#14-glossário)

---

## 1. Visão Geral

### 1.1 O que é o Meu Agente?

**Meu Agente** é um **micro SaaS** que disponibiliza uma equipe de **Agentes de IA** operando diretamente em um número do **WhatsApp** para executar tarefas de **atendimento, operações e automação empresarial**.

### 1.2 Missão

Democratizar o acesso à IA para atendimento no WhatsApp, conectando empresas aos seus clientes de forma **inteligente, rápida e humana**.

### 1.3 Proposta de Valor

| Benefício | Impacto |
|-----------|---------|
| ⏰ **Economia de Tempo** | Redução de até **40 horas/mês** em tarefas operacionais |
| 📈 **Aumento de Conversões** | Até **35% mais conversões** com SDR virtual |
| 🤖 **Atendimento 24/7** | Agentes trabalhando sem pausas, dentro das regras do WhatsApp Business |
| 🔒 **Segurança Total** | Conformidade LGPD, criptografia de ponta a ponta |
| 💬 **Linguagem Natural** | Interação por texto como se fosse um colega de trabalho |

### 1.4 Diferenciais Competitivos

- **Linguagem natural**: Sem comandos decorados, converse normalmente
- **Multi-agentes**: Diversos especialistas em um único número
- **Integrações Google**: Calendar, Drive, Tasks, Gmail (opcional)
- **Conformidade**: LGPD, políticas WhatsApp Business
- **Escalabilidade**: Do Free ao Premium conforme crescimento

---

## 2. Público-Alvo

### 2.1 Segmentos Primários

| Segmento | Uso Principal | Agentes Mais Usados |
|----------|---------------|---------------------|
| **Tecnologia/SaaS** | Qualificação de leads para demos, debugging | SDR, Dev, Web Search |
| **Saúde (Clínicas)** | Agendamento, confirmação de consultas | Agendamento, Confirmação, SDR |
| **Educação** | Matrículas, agendamento de aulas | SDR, Agendamento |
| **Varejo/E-commerce** | Atendimento 24/7, recuperação de carrinho | SDR, Remarketing |
| **Agências de Marketing** | Otimização Google Ads, relatórios | Marketing, Web Search |
| **Consultorias** | Qualificação de leads, follow-up | SDR, Follow-up |

### 2.2 Personas

#### **Empreendedor Solo**
- Volume: Baixo a médio
- Necessidade: Automatizar atendimento sem equipe
- Plano indicado: Básico ou Business

#### **Gerente de Vendas**
- Volume: Médio a alto
- Necessidade: SDR virtual para qualificar leads
- Plano indicado: Business ou Premium

#### **Gestor de Operações**
- Volume: Alto
- Necessidade: Automação de processos, follow-up
- Plano indicado: Premium

---

## 3. Planos e Preços

> Valores consolidados. Impostos não inclusos.

### 3.1 Plano FREE — R$ 0/mês

**Para quem quer explorar sem compromisso.**

- ✅ Acesso ao app em nuvem
- ✅ Agente Financeiro (manual)
- ✅ Agente Web Search (básico)
- ✅ Agente Scrape/Extract (básico)
- ❌ Automação WhatsApp
- ❌ Exportação CSV/PDF
- ❌ Suporte
- ❌ Backups

### 3.2 Plano BÁSICO — R$ 497/mês

**Para profissionais e pequenas equipes começando.**

Tudo do Free, mais:
- ✅ Automação via infraestrutura Meu Agente
- ✅ Exportação CSV/PDF
- ✅ Agente Web Search (intermediário)
- ✅ Agente Scrape/Extract (intermediário)
- ✅ Agente de Agendamento
- ❌ Número WhatsApp dedicado
- ❌ Implantação inclusa
- ❌ Suporte 24/7
- ❌ Agentes Business/Premium

### 3.3 Plano BUSINESS — R$ 997/mês ⭐ MAIS POPULAR

**Para empresas que precisam de automação completa.**

Tudo do Básico, mais:
- ✅ **Número WhatsApp dedicado**
- ✅ **Implantação (setup) inclusa**
- ✅ **Suporte prioritário 24/7** (SLA 2h)
- ✅ Agente SDR
- ✅ Agente de Marketing (Google Ads)
- ✅ Agente de Dev
- ✅ Agente de Vídeo (Veo 3)
- ✅ Integrações Google (opcional, custo adicional)

**Custo adicional:** R$ 149/hora para manutenção/treinamento

### 3.4 Plano PREMIUM — R$ 1.497/mês 🏆 MELHOR CUSTO-BENEFÍCIO

**Máxima automação e personalização.**

Tudo do Business, mais:
- ✅ **Agente de Confirmação** (diário)
- ✅ **Agente de Resumo de Grupos**
- ✅ **Agente de Remarketing**
- ✅ **Agente de Follow-up**
- ✅ **Web Search/Scrape Avançados**
- ✅ **Backups diários off-site** (política 3-2-1)
- ✅ Cota maior de vídeos (Veo 3)
- ✅ Governança de dados avançada
- ✅ Analytics personalizados mensais
- ✅ Máxima prioridade de suporte

**Custo adicional:** R$ 149/hora para manutenção/treinamento

---

## 4. Matriz de Recursos por Plano

| Recurso | Free | Básico | Business | Premium |
|---------|:----:|:------:|:--------:|:-------:|
| App em nuvem | ✅ | ✅ | ✅ | ✅ |
| Agente Financeiro | ✅ Manual | ✅ | ✅ | ✅ |
| Agente Web Search | Básico | Interm. | ✅ | Avançado |
| Agente Scrape/Extract | Básico | Interm. | Interm. | Avançado |
| Exportação CSV/PDF | ❌ | ✅ | ✅ | ✅ |
| Agente de Agendamento | ❌ | ✅ | ✅ | ✅ |
| Número WhatsApp dedicado | ❌ | ❌ | ✅ | ✅ |
| Implantação inclusa | ❌ | ❌ | ✅ | ✅ |
| Suporte 24/7 | ❌ | ❌ | ✅ | ✅ |
| Agente SDR | ❌ | ❌ | ✅ | ✅ |
| Agente de Marketing | ❌ | ❌ | ✅ | ✅ |
| Agente de Dev | ❌ | ❌ | ✅ | ✅ |
| Agente de Vídeo | ❌ | ❌ | ✅ | ✅ Cota+ |
| Agente de Confirmação | ❌ | ❌ | ❌ | ✅ |
| Agente Resumo Grupos | ❌ | ❌ | ❌ | ✅ |
| Agente de Remarketing | ❌ | ❌ | ❌ | ✅ |
| Agente de Follow-up | ❌ | ❌ | ❌ | ✅ |
| Backups diários | ❌ | ❌ | ❌ | ✅ |
| Governança avançada | ❌ | Básica | Interm. | Avançada |

---

## 5. Agentes de IA

### 5.1 Agentes Base (Todos os Planos)

#### 💰 Agente Financeiro
- **Função:** Controle de caixa (entradas/saídas)
- **Capacidades:**
  - Registro de transações com 12 categorias
  - Detecção de duplicatas
  - Alertas de contas vencidas e saldo negativo
  - Exportação CSV/PDF (planos pagos)

#### 🔍 Agente Web Search
- **Função:** Pesquisas avançadas na web
- **Capacidades:**
  - Pesquisa por tema, fonte, localidade
  - Resumos citados com links
  - Análises comparativas

#### 📊 Agente Scrape/Extract
- **Função:** Extração de dados estruturados
- **Capacidades:**
  - Extração de portais de dados abertos
  - Consulta a APIs oficiais
  - Relatórios CSV/JSON
- **Limitação:** Apenas fontes permitidas/APIs oficiais

### 5.2 Agentes Básico+ (Básico, Business, Premium)

#### 📅 Agente de Agendamento
- **Função:** Gestão de agenda e tarefas
- **Integrações:** Google Calendar, Drive, Tasks, Meet
- **Capacidades:**
  - Criar/editar eventos
  - Anexar arquivos do Drive
  - Criar tarefas com prazos
  - Lembretes via WhatsApp

### 5.3 Agentes Business+ (Business, Premium)

#### 🎯 Agente SDR
- **Função:** Qualificação de leads e agendamento
- **Fluxo:**
  1. Recepção humanizada
  2. Coleta de dados (nome, empresa, interesse, urgência, orçamento)
  3. Qualificação (fit alto/médio/baixo)
  4. Oferta de reunião ou orçamento
  5. Agendamento automático
  6. Confirmação WhatsApp + e-mail

#### 📢 Agente de Marketing
- **Função:** Otimização de Google Ads
- **Capacidades:**
  - Análise de campanhas
  - Sugestão de termos negativos
  - Alertas de gasto/CTR
  - Comparação de períodos

#### 💻 Agente de Dev
- **Função:** Suporte técnico para desenvolvedores
- **Capacidades:**
  - Debugging multi-linguagem
  - Sugestões de otimização
  - Criação de testes unitários
  - Revisão de código

#### 🎬 Agente de Vídeo (Veo 3)
- **Função:** Geração de vídeos
- **Capacidades:**
  - Vídeos a partir de prompts/roteiros
  - Variações para testes A/B
  - Formatos: stories, reels, MP4
- **Cotas:** Limite por plano

### 5.4 Agentes Premium Exclusivos

#### ✅ Agente de Confirmação
- **Função:** Confirmação diária de presença
- **Operação:**
  - Contata leads agendados no dia
  - Varredura diária no Google Tasks
  - Horários pré-definidos

#### 📝 Agente de Resumo de Grupos
- **Função:** Resumo de grupos WhatsApp
- **Operação:**
  - Monitora grupos selecionados
  - Extrai pontos relevantes (24h)
  - Resumo estruturado diário
- **Requisito:** Consentimento e regras do grupo

#### 🎯 Agente de Remarketing
- **Função:** Reengajamento de contatos
- **Operação:**
  - Identifica contatos no histórico
  - Dispara mensagens baseadas em funil
  - Templates aprovados fora de 24h
- **Requisito:** Opt-in do contato

#### 📞 Agente de Follow-up
- **Função:** Reativação de contatos inativos
- **Operação:**
  - Identificação por período configurável
  - Lembretes e mensagens de reativação
- **Requisito:** Templates e opt-in

---

## 6. Casos de Uso por Segmento

### 6.1 Tecnologia/SaaS

| Necessidade | Agente | Exemplo |
|-------------|--------|---------|
| Qualificar leads para demo | SDR | "Lead interessado em trial, marcar demo terça 14h" |
| Controle de MRR | Financeiro | "Entrada R$ 5.000 categoria Recorrente" |
| Debugging de API | Dev | "Erro 500 no endpoint /checkout" |
| Pesquisa de concorrentes | Web Search | "Comparar CRMs do mercado" |

### 6.2 Saúde (Clínicas/Consultórios)

| Necessidade | Agente | Exemplo |
|-------------|--------|---------|
| Agendamento de consultas | Agendamento | "Marcar consulta Dr. Silva quinta 15h" |
| Confirmação de presença | Confirmação | Automático no dia da consulta |
| Controle de pagamentos | Financeiro | "Entrada R$ 350 categoria Consultas" |
| Redução de no-show | Follow-up | Lembrete 24h antes |

### 6.3 Educação

| Necessidade | Agente | Exemplo |
|-------------|--------|---------|
| Qualificar interessados | SDR | "Lead quer info sobre curso de Python" |
| Agendar aula experimental | Agendamento | "Aula teste sexta 10h" |
| Controle de mensalidades | Financeiro | "Entrada R$ 997 categoria Mensalidades" |

### 6.4 Varejo/E-commerce

| Necessidade | Agente | Exemplo |
|-------------|--------|---------|
| Atendimento 24/7 | SDR | Qualificação automática de interessados |
| Recuperação de carrinho | Remarketing | Mensagem após abandono |
| Pesquisa de preços | Web Search | "Comparar preço produto X" |

### 6.5 Agências de Marketing

| Necessidade | Agente | Exemplo |
|-------------|--------|---------|
| Análise de campanhas | Marketing | "Analisar campanha Google Ads outubro" |
| Termos negativos | Marketing | "Sugerir 5 termos negativos" |
| Relatórios para cliente | Web Search + Scrape | Dados estruturados para apresentação |
| Criação de vídeos | Vídeo | "Vídeo 30s para stories" |

---

## 7. Fluxos de Uso no WhatsApp

### 7.1 Como Falar com o Meu Agente

Escreva normalmente, como falaria com um colega. Exemplos práticos:

### 7.2 Exemplos por Agente

#### Financeiro
```
"Registra entrada de R$ 1.200 na categoria Assinaturas, Plano Business, data 01/12/2025"
"Saída de R$ 320 em Marketing, descrição 'Impulsionamento Instagram'"
"Exporta CSV de setembro, categorias Marketing e Operação"
"Qual meu saldo do mês?"
```

#### Web Search
```
"Busque 3 pousadas em Fortaleza com potencial para meu produto"
"Tendências de roupas fitness em SP nos últimos 90 dias"
"Compare CRM vs ERP para clínicas"
```

#### Agendamento
```
"Marca reunião com João amanhã 15h no Meet"
"Cria tarefa: enviar proposta até sexta 17h"
"Anexa Proposta_v3.pdf na reunião de segunda"
```

#### SDR
```
"Qualifica lead: Ana, 11 99999-9999, quer demo"
"Oferece dois horários: quinta 10:30 ou sexta 14:00"
"Prepara orçamento com base na conversa"
```

#### Marketing
```
"Analisa campanha 'Tráfego Dezembro', sugere 3 termos negativos"
"Por que o gasto diário está estourando cedo?"
"Compara última semana com anterior, 5 insights"
```

#### Vídeo
```
"Cria vídeo 30s em 1080x1920 com roteiro: 'Bem-vindo ao Meu Agente...'"
"Adapta roteiro para clínica odontológica, vídeo para stories"
```

### 7.3 Palavras de Controle

| Comando | Ação |
|---------|------|
| **SAIR** / **pare** | Cancela notificações |
| **ajuda** | Menu de opções |
| **status** | Status dos agentes |

---

## 8. Integrações

### 8.1 Google Workspace

| Serviço | Funcionalidade | Disponibilidade |
|---------|----------------|-----------------|
| Google Calendar | Eventos e reuniões | Básico+ (custo adicional Business+) |
| Google Drive | Anexos de arquivos | Básico+ |
| Google Tasks | Tarefas com prazos | Básico+ |
| Gmail | E-mails de confirmação | Business+ |
| Google Meet | Links de reunião | Básico+ |

**Requisitos:** OAuth com escopos mínimos

### 8.2 WhatsApp Business

- Canal principal de comunicação
- Mensagens dentro das políticas Meta
- Templates aprovados para proativas (>24h)
- Número dedicado (Business/Premium)

### 8.3 Stripe

- Processamento de pagamentos
- Gestão de assinaturas
- Faturas automáticas

### 8.4 Supabase

- Banco de dados PostgreSQL
- Autenticação de usuários
- Edge Functions
- Realtime sync

---

## 9. Segurança, Privacidade e Conformidade

### 9.1 LGPD

- ✅ Bases legais definidas por finalidade
- ✅ Canal do Encarregado (DPO) disponível
- ✅ Direitos do titular garantidos
- ✅ Políticas de retenção e descarte

### 9.2 Criptografia

- ✅ Dados em trânsito: TLS 1.3
- ✅ Dados em repouso: AES-256
- ✅ Criptografia de ponta a ponta no WhatsApp

### 9.3 Consentimento e Opt-out

- ✅ Registro de opt-in
- ✅ Palavras de parada: **SAIR**, **pare**
- ✅ Opt-out imediato e automático

### 9.4 Scraping Ético

- ✅ Apenas fontes permitidas e APIs oficiais
- ✅ Respeito a robots.txt e termos de uso
- ❌ Nunca sites que proíbem scraping

### 9.5 Backups (Premium)

- Política 3-2-1 (3 cópias, 2 mídias, 1 off-site)
- Backups diários off-site
- Testes periódicos de restauração

### 9.6 Certificações em Progresso

- 🔄 ISO 27001 (em processo)
- ✅ Monitoramento 24/7
- ✅ Infraestrutura em data center seguro

---

## 10. Suporte e SLAs

### 10.1 Canais por Plano

| Plano | Suporte | SLA |
|-------|---------|-----|
| Free | ❌ Sem suporte | - |
| Básico | ❌ Sem suporte | - |
| Business | ✅ 24/7 prioritário | 2 horas |
| Premium | ✅ 24/7 máxima prioridade | 1 hora |

### 10.2 Horário Comercial

- Segunda a Sexta: 8h às 18h
- Sábado: 9h às 13h
- Domingo/Feriados: Fechado (exceto suporte 24/7)

### 10.3 Contatos

| Canal | Contato |
|-------|---------|
| WhatsApp | (11) 95118-2561 |
| Email Geral | contato@meuagente.api.br |
| Comercial | comercial@meuagente.api.br |
| Suporte | suporte@meuagente.api.br |

---

## 11. Métricas de Sucesso

### 11.1 Métricas de Negócio

| Métrica | Meta |
|---------|------|
| Economia de tempo | 40h/mês por equipe |
| Aumento de conversões | +35% |
| Redução de no-show | -50% |
| NPS | > 50 |

### 11.2 Métricas Técnicas

| Métrica | Meta |
|---------|------|
| Uptime App Core | 99.99% |
| Uptime Agentes | 99.9% |
| Tempo de resposta | < 2s |
| SLA Suporte Business | 2h |

### 11.3 Relatórios Disponíveis

- **Vendas:** Conversão por etapa, no-show, ticket médio
- **Marketing:** CTR templates, opt-in/opt-out, ROI
- **Operações:** Transações por período, tarefas concluídas
- **Exportação:** CSV, PDF (planos pagos)

---

## 12. Roadmap

### 12.1 Histórico

| Período | Marco |
|---------|-------|
| **2023** | Fundação da empresa |
| **Q3 2023** | Lançamento do MVP com parceiros selecionados |
| **2024** | Expansão nacional, integrações oficiais |
| **Q4 2024** | Lançamento dos agentes Premium |
| **2025** | Site e app redesenhados, novos agentes |

### 12.2 Próximos Passos (2025-2026)

| Período | Planejamento |
|---------|--------------|
| **Q1 2026** | Integração com outros canais (Telegram, Instagram) |
| **Q2 2026** | Agentes de voz |
| **Q3 2026** | Expansão internacional |
| **Q4 2026** | Marketplace de agentes customizados |

---

## 13. FAQ Técnico

### P: Posso usar sem número próprio?
**R:** Sim, nos planos Free e Básico o atendimento usa a infraestrutura do Meu Agente.

### P: O que muda no Business/Premium?
**R:** Número WhatsApp dedicado, implantação inclusa, suporte 24/7 e agentes adicionais.

### P: Como funcionam mensagens proativas?
**R:** Fora da janela de 24h, apenas com template aprovado pelo WhatsApp e opt-in do contato.

### P: Há taxa de manutenção?
**R:** Sim, R$ 149/hora quando solicitada (ajustes de modelos, reconfigurações, treinamentos).

### P: Vocês fazem scraping de sites que proíbem?
**R:** Não. Trabalhamos apenas com APIs oficiais e fontes permitidas.

### P: Como são feitos os backups?
**R:** Política 3-2-1 no Premium: backups diários off-site com testes de restauração.

### P: Qual a diferença dos níveis de Web Search?
**R:** Básico (consultas simples), Intermediário (filtros avançados), Avançado (análises profundas, mais fontes).

---

## 14. Glossário

| Termo | Definição |
|-------|-----------|
| **Agente** | IA especializada em uma função (Financeiro, SDR, etc.) |
| **SDR** | Sales Development Representative - qualificação de leads |
| **MRR** | Monthly Recurring Revenue - receita recorrente mensal |
| **CTR** | Click-Through Rate - taxa de cliques |
| **Opt-in** | Consentimento ativo do usuário |
| **Opt-out** | Solicitação de saída/cancelamento |
| **SLA** | Service Level Agreement - acordo de nível de serviço |
| **LGPD** | Lei Geral de Proteção de Dados |
| **DPO** | Data Protection Officer - encarregado de dados |
| **Veo 3** | Modelo de geração de vídeo do Google |
| **Template** | Mensagem pré-aprovada pelo WhatsApp Business |
| **Janela 24h** | Período em que mensagens livres podem ser enviadas após interação |

---

## Observações Comerciais

- Limites de consumo (execuções, minutos de vídeo) detalhados na Proposta Comercial
- Ajustes fora de escopo são tratados como add-ons sob demanda
- Preços sujeitos a reajuste anual
- Contratos mínimos de 12 meses para Business/Premium (negociável)

---

**Documento atualizado em:** Dezembro/2025  
**Versão:** 2.0  
**Próxima revisão:** Março/2026

© 2025 Meu Agente. Todos os direitos reservados.
