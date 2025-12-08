# 🤖 GUIA DE AGENTES - Referência Rápida

**Versão:** 1.0  
**Última Atualização:** Dezembro/2025

---

## 📋 Índice

1. [Visão Geral dos Agentes](#visão-geral-dos-agentes)
2. [Agentes por Plano](#agentes-por-plano)
3. [Referência Rápida de Comandos](#referência-rápida-de-comandos)
4. [Tabela de Disponibilidade](#tabela-de-disponibilidade)

---

## 🎯 Visão Geral dos Agentes

O Meu Agente disponibiliza **12 agentes especializados** que trabalham de forma integrada no WhatsApp. Cada agente é um especialista em uma área específica.

| Agente | Emoji | Especialidade |
|--------|:-----:|---------------|
| Financeiro | 💰 | Controle de caixa e transações |
| Web Search | 🔍 | Pesquisas na internet |
| Scrape/Extract | 📊 | Extração de dados estruturados |
| Agendamento | 📅 | Agenda e tarefas |
| SDR | 🎯 | Qualificação de leads |
| Marketing | 📢 | Otimização Google Ads |
| Dev | 💻 | Suporte técnico/código |
| Vídeo | 🎬 | Geração de vídeos |
| Confirmação | ✅ | Confirmação de presença |
| Resumo de Grupos | 📝 | Resumo de grupos WhatsApp |
| Remarketing | 🔄 | Reengajamento de contatos |
| Follow-up | 📞 | Reativação de inativos |

---

## 📦 Agentes por Plano

### 🆓 PLANO FREE (R$ 0/mês)

> Operações manuais no app, sem automação WhatsApp

---

#### 💰 Agente Financeiro (Manual)

**O que faz:** Controle básico de entradas e saídas financeiras.

| Característica | Detalhe |
|----------------|---------|
| **Modo** | Manual (apenas no app) |
| **Categorias** | 12 categorias disponíveis |
| **Exportação** | ❌ Não disponível |
| **Alertas** | ❌ Não disponível |

**Limitações no Free:**
- Registro apenas pelo app web
- Sem exportação de dados
- Sem alertas automáticos
- Dados voláteis (sem backup)

---

#### 🔍 Agente Web Search (Básico)

**O que faz:** Pesquisas simples na web.

| Característica | Detalhe |
|----------------|---------|
| **Modo** | Manual (app) |
| **Nível** | Básico |
| **Consultas/dia** | Limitado |
| **Fontes** | Públicas apenas |

**Exemplo de uso:**
```
"Pesquise empresas de tecnologia em São Paulo"
```

---

#### 📊 Agente Scrape/Extract (Básico)

**O que faz:** Extração básica de dados de fontes públicas.

| Característica | Detalhe |
|----------------|---------|
| **Modo** | Manual (app) |
| **Nível** | Básico |
| **Formatos** | Visualização apenas |
| **Fontes** | APIs públicas e dados abertos |

---

### 📘 PLANO BÁSICO (R$ 497/mês)

> Tudo do Free + automação básica + Agente de Agendamento

---

#### 💰 Agente Financeiro (Completo)

**O que faz:** Controle completo de caixa com exportação.

| Característica | Detalhe |
|----------------|---------|
| **Modo** | App + WhatsApp (infraestrutura Meu Agente) |
| **Categorias** | 12 categorias |
| **Exportação** | ✅ CSV e PDF |
| **Alertas** | ✅ Saldo e vencimentos |
| **Duplicatas** | ✅ Detecção automática |

**Comandos WhatsApp:**
```
💰 REGISTRAR TRANSAÇÕES
"Registra entrada de R$ 1.200 categoria Vendas, cliente João"
"Saída de R$ 89,90 em Alimentação, almoço de trabalho"
"Entrada 5000 reais, Assinaturas, descrição 'Plano anual cliente X'"

📊 CONSULTAR
"Qual meu saldo do mês?"
"Quanto gastei em Marketing esta semana?"
"Lista despesas de hoje"

📄 EXPORTAR
"Exporta CSV de novembro"
"Gera PDF das transações de 01/11 a 30/11"
"Exporta relatório do mês passado"
```

---

#### 🔍 Agente Web Search (Intermediário)

**O que faz:** Pesquisas com filtros avançados e resumos.

| Característica | Detalhe |
|----------------|---------|
| **Modo** | App + WhatsApp |
| **Nível** | Intermediário |
| **Filtros** | Por região, período, fonte |
| **Resultados** | Resumos com links |

**Comandos WhatsApp:**
```
🔍 PESQUISAS SIMPLES
"Pesquise tendências de e-commerce 2025"
"Busque notícias de marketing digital desta semana"

🔍 PESQUISAS COM FILTROS
"Busque restaurantes em Curitiba com boas avaliações"
"Pesquise concorrentes de [produto] na região Sul"

📊 COMPARAÇÕES
"Compare CRM Pipedrive vs HubSpot"
"Análise rápida de ferramentas de email marketing"
```

---

#### 📊 Agente Scrape/Extract (Intermediário)

**O que faz:** Extração com mais opções de formato.

| Característica | Detalhe |
|----------------|---------|
| **Modo** | App + WhatsApp |
| **Nível** | Intermediário |
| **Formatos** | CSV, JSON |
| **Fontes** | APIs públicas, dados abertos, sites permitidos |

**Comandos WhatsApp:**
```
📊 EXTRAÇÃO BÁSICA
"Extraia dados de empresas de tecnologia do portal dados.gov"
"Busque no portal de dados abertos de SP informações de transporte"

📄 EXPORTAÇÃO
"Gere CSV com os dados extraídos"
"Exporte em JSON"
```

---

#### 📅 Agente de Agendamento

**O que faz:** Gestão completa de agenda com integração Google.

| Característica | Detalhe |
|----------------|---------|
| **Modo** | App + WhatsApp |
| **Integrações** | Google Calendar, Drive, Tasks, Meet |
| **Lembretes** | ✅ Via WhatsApp |
| **Anexos** | ✅ Do Google Drive |

**Comandos WhatsApp:**
```
📅 CRIAR EVENTOS
"Marca reunião com João amanhã às 15h"
"Agenda call com equipe sexta 10h no Google Meet"
"Cria evento 'Apresentação cliente' dia 10/12 às 14h"

🔗 COM MEET
"Marca reunião com Maria terça 16h no Meet e envia o link"
"Agenda videoconferência amanhã 9h, tema: planejamento Q1"

📎 COM ANEXOS
"Anexa arquivo Proposta.pdf na reunião de segunda"
"Adiciona apresentação do Drive no evento de amanhã"

✅ TAREFAS
"Cria tarefa: enviar orçamento até sexta 17h"
"Nova tarefa: revisar contrato, prazo segunda"
"Tarefa urgente: ligar para fornecedor hoje"

🔔 LEMBRETES
"Me lembra de ligar para cliente às 16h"
"Lembrete amanhã 8h: enviar relatório"

📋 CONSULTAS
"Quais meus compromissos de amanhã?"
"Lista reuniões da semana"
"O que tenho para hoje?"
```

---

### 💼 PLANO BUSINESS (R$ 997/mês)

> Tudo do Básico + Número dedicado + Suporte 24/7 + Agentes especializados

---

#### 🎯 Agente SDR (Sales Development Representative)

**O que faz:** Qualificação automatizada de leads com agendamento.

| Característica | Detalhe |
|----------------|---------|
| **Modo** | WhatsApp automático |
| **Qualificação** | Fit alto/médio/baixo |
| **Agendamento** | Automático via Calendar |
| **Confirmação** | WhatsApp + E-mail |

**Fluxo Automático:**
```
1. Lead envia mensagem → Recepção humanizada
2. Coleta: nome, empresa, interesse, urgência, orçamento
3. Qualificação: determina fit
4. Oferta: reunião ou orçamento
5. Agendamento: marca no Google Calendar
6. Confirmação: envia para WhatsApp e e-mail
```

**Comandos de Gestão:**
```
🎯 QUALIFICAÇÃO MANUAL
"Qualifica lead: Ana, 11 99999-9999, quer demo do produto"
"Avalia: João da empresa XYZ, interessado em plano Business"

📅 AGENDAMENTO
"Oferece reunião quinta 10:30 ou sexta 14:00 para Maria"
"Marca demo com lead qualificado para amanhã"

📋 ORÇAMENTOS
"Prepara orçamento para o lead da última conversa"
"Gera proposta comercial para empresa ABC"

📊 RELATÓRIOS
"Quantos leads qualificados esta semana?"
"Status dos leads em andamento"
```

**Mensagens Automáticas (exemplos):**
```
"Oi, [Nome]! Sou do Meu Agente. Vi seu interesse em [produto] — te ajudo rapidinho."

"Para te direcionar melhor: qual seu objetivo principal e para quando você precisa?"

"Consigo [data1] às [hora1] ou [data2] às [hora2]. Qual funciona melhor?"

"Perfeito! Fechei [data] às [hora] por Google Meet. Enviei a confirmação aqui e no seu e-mail."
```

---

#### 📢 Agente de Marketing (Google Ads)

**O que faz:** Análise e otimização de campanhas Google Ads.

| Característica | Detalhe |
|----------------|---------|
| **Modo** | WhatsApp |
| **Análises** | Campanhas, grupos, termos |
| **Alertas** | Gasto, CTR, conversões |
| **Sugestões** | Termos negativos, lances |

**Comandos WhatsApp:**
```
📊 ANÁLISES
"Analisa campanha 'Tráfego Dezembro'"
"Como está a performance do grupo 'Marca'?"
"Relatório da última semana de ads"

🔍 TERMOS NEGATIVOS
"Sugere 5 termos negativos para campanha de leads"
"Quais termos estão desperdiçando orçamento?"

📈 COMPARAÇÕES
"Compara esta semana com a anterior"
"Evolução de CTR no último mês"
"Performance de outubro vs novembro"

⚠️ DIAGNÓSTICOS
"Por que o gasto diário está estourando cedo?"
"O que está causando queda no CTR?"
"Diagnóstico da campanha com baixa conversão"

💡 OTIMIZAÇÕES
"Como posso melhorar a campanha de remarketing?"
"Sugestões de otimização para campanha de busca"
"Recomendações de lance para [palavra-chave]"
```

---

#### 💻 Agente de Dev

**O que faz:** Suporte técnico para desenvolvedores.

| Característica | Detalhe |
|----------------|---------|
| **Modo** | WhatsApp |
| **Linguagens** | JavaScript, Python, PHP, SQL, etc. |
| **Funções** | Debug, otimização, testes |
| **Limites** | Respeita confidencialidade |

**Comandos WhatsApp:**
```
🐛 DEBUGGING
"Revise meu endpoint /api/checkout, erro 500 quando customerId vazio"
"Por que esta função retorna undefined?"
"Debug: query SQL não retorna resultados esperados"

⚡ OTIMIZAÇÃO
"Otimiza esta query que está lenta: [query]"
"Como melhorar performance desta função?"
"Refatora este código para melhor legibilidade"

🧪 TESTES
"Sugere testes unitários para módulo de pagamento"
"Casos de borda para função de validação de CPF"
"Cria teste para endpoint de autenticação"

📝 DOCUMENTAÇÃO
"Documenta esta função: [código]"
"Gera JSDoc para este módulo"
"README para este componente React"

💡 DÚVIDAS TÉCNICAS
"Diferença entre useMemo e useCallback no React"
"Quando usar índice composto no PostgreSQL?"
"Melhores práticas para autenticação JWT"
```

---

#### 🎬 Agente de Vídeo (Google Veo 3)

**O que faz:** Geração de vídeos a partir de prompts.

| Característica | Detalhe |
|----------------|---------|
| **Modo** | WhatsApp |
| **Formatos** | MP4, vertical/horizontal |
| **Duração** | Até 60s por vídeo |
| **Cota** | Limite mensal (ver plano) |

**Comandos WhatsApp:**
```
🎬 CRIAÇÃO BÁSICA
"Cria vídeo de 30s apresentando o Meu Agente"
"Gera vídeo curto para stories sobre [tema]"

📐 COM ESPECIFICAÇÕES
"Vídeo 1080x1920 (vertical) de 15s para reels"
"Cria vídeo 1920x1080 (horizontal) para YouTube"

✏️ COM ROTEIRO
"Cria vídeo com roteiro: 'Bem-vindo ao Meu Agente. Somos sua equipe de IA...'"
"Gera vídeo seguindo este script: [texto]"

🔄 VARIAÇÕES
"Cria 2 variações do vídeo para teste A/B"
"Gera versão alternativa com outro estilo"

🎯 PARA NICHOS
"Adapta roteiro para clínica odontológica"
"Versão do vídeo para e-commerce de moda"

📋 STORYBOARD
"Monte storyboard com 6 cenas e legendas"
"Planejamento visual para vídeo institucional"
```

---

### 🏆 PLANO PREMIUM (R$ 1.497/mês)

> Tudo do Business + Agentes exclusivos + Backups + Governança avançada

---

#### ✅ Agente de Confirmação

**O que faz:** Confirma presença em reuniões automaticamente.

| Característica | Detalhe |
|----------------|---------|
| **Modo** | Automático (diário) |
| **Fonte** | Google Calendar + Tasks |
| **Horários** | Configuráveis |
| **Ações** | Confirma ou reagenda |

**Funcionamento:**
```
⏰ ROTINA DIÁRIA
1. 8h: Verifica reuniões do dia no Calendar
2. Envia confirmação para cada participante
3. Registra respostas
4. Alerta sobre não-confirmados

✅ MENSAGEM AUTOMÁTICA
"Oi [Nome]! Confirmando nossa reunião de hoje às [hora]. 
Você consegue participar? 
Responda SIM para confirmar ou me avise se precisar reagendar."

📋 TAREFAS
1. Varredura diária no Google Tasks
2. Lembrete de tarefas pendentes/vencidas
3. Notificação via WhatsApp
```

**Comandos de Gestão:**
```
⚙️ CONFIGURAÇÃO
"Configura confirmação para enviar às 7h"
"Confirma apenas reuniões com clientes externos"
"Desativa confirmação para eventos internos"

📊 RELATÓRIOS
"Quantas confirmações enviadas hoje?"
"Taxa de confirmação da semana"
"Lista reuniões não confirmadas"
```

---

#### 📝 Agente de Resumo de Grupos

**O que faz:** Resumo diário de grupos WhatsApp selecionados.

| Característica | Detalhe |
|----------------|---------|
| **Modo** | Automático (diário) |
| **Período** | Últimas 24h |
| **Conteúdo** | Destaques, decisões, pendências |
| **Requisito** | Consentimento do grupo |

**Exemplo de Resumo:**
```
📊 Resumo do Grupo "Equipe Vendas" - 07/12/2025

🔥 DESTAQUES
• João fechou 3 novos contratos (R$ 15k total)
• Maria solicitou material atualizado de preços
• Reunião de alinhamento marcada para segunda 9h

💬 PRINCIPAIS DISCUSSÕES
• Estratégia de prospecção para Q1/2026
• Novo script de abordagem aprovado pelo gerente
• Debate sobre metas do próximo trimestre

📌 PENDÊNCIAS
• Atualizar CRM com novos leads
• Enviar proposta para cliente XYZ
• Agendar treinamento de produto

👥 PARTICIPAÇÃO
• 15 membros ativos
• 47 mensagens
• 3 arquivos compartilhados
```

**Comandos de Gestão:**
```
⚙️ CONFIGURAÇÃO
"Adiciona grupo 'Equipe Marketing' ao resumo"
"Remove grupo 'Avisos' do monitoramento"
"Horário do resumo: 18h"

📋 CONSULTAS
"Resumo do grupo vendas de ontem"
"Quais grupos estão configurados?"
"Estatísticas de mensagens da semana"
```

---

#### 🔄 Agente de Remarketing

**O que faz:** Reengaja contatos que já interagiram.

| Característica | Detalhe |
|----------------|---------|
| **Modo** | Automático (configurável) |
| **Critérios** | Interação prévia, tempo, funil |
| **Mensagens** | Templates aprovados |
| **Requisito** | Opt-in do contato |

**Funcionamento:**
```
🎯 IDENTIFICAÇÃO
1. Analisa histórico de conversas
2. Identifica contatos que interagiram mas não converteram
3. Segmenta por tempo e interesse

📨 DISPARO
1. Seleciona template apropriado (aprovado pelo WhatsApp)
2. Personaliza com dados do contato
3. Dispara em horários otimizados

⚠️ REGRAS
• Fora da janela 24h: apenas templates aprovados
• Respeita opt-out imediatamente
• Máximo de 2 tentativas por contato
```

**Comandos de Gestão:**
```
⚙️ CONFIGURAÇÃO
"Reengaja leads que não responderam há 7 dias"
"Configura remarketing para carrinho abandonado"
"Define template para reativação"

📊 RELATÓRIOS
"Quantos reengajamentos esta semana?"
"Taxa de resposta do remarketing"
"Lista contatos reengajados"

⏸️ CONTROLE
"Pausa remarketing para contato [número]"
"Desativa campanha de reengajamento temporariamente"
```

---

#### 📞 Agente de Follow-up

**O que faz:** Localiza e reativa contatos inativos.

| Característica | Detalhe |
|----------------|---------|
| **Modo** | Automático (configurável) |
| **Períodos** | Minutos a anos |
| **Ações** | Lembrete, mensagem, alerta |
| **Requisito** | Templates e opt-in |

**Configurações de Período:**
```
⏱️ EXEMPLOS DE REGRAS
• "Contatos sem resposta há 30 minutos → lembrete"
• "Leads inativos há 7 dias → mensagem de follow-up"
• "Clientes sem compra há 3 meses → oferta especial"
• "Contatos há 1 ano → campanha de reativação"
```

**Comandos de Gestão:**
```
⚙️ CONFIGURAÇÃO
"Configura follow-up para leads inativos há 5 dias"
"Cria regra: clientes sem contato há 30 dias recebem pesquisa"
"Define mensagem de follow-up: [texto]"

📊 RELATÓRIOS
"Quantos follow-ups enviados hoje?"
"Lista contatos que responderam ao follow-up"
"Taxa de reativação do mês"

📋 CONSULTAS
"Quais contatos estão inativos há mais de 15 dias?"
"Lista leads qualificados sem resposta"
```

---

## 📋 Referência Rápida de Comandos

### Comandos Universais

| Comando | Ação |
|---------|------|
| `SAIR` ou `pare` | Cancela notificações |
| `ajuda` | Menu de opções |
| `status` | Status dos agentes |

### Atalhos por Agente

| Agente | Prefixo Sugerido | Exemplo |
|--------|------------------|---------|
| Financeiro | "registra", "entrada", "saída" | "entrada 500 vendas" |
| Pesquisa | "pesquise", "busque" | "pesquise tendências" |
| Agendamento | "marca", "agenda", "cria tarefa" | "marca reunião amanhã" |
| SDR | "qualifica", "lead" | "qualifica lead Ana" |
| Marketing | "analisa campanha" | "analisa campanha dezembro" |
| Dev | "debug", "otimiza", "revise" | "debug erro 500" |
| Vídeo | "cria vídeo" | "cria vídeo 30s" |

---

## 📊 Tabela de Disponibilidade

| Agente | Free | Básico | Business | Premium |
|--------|:----:|:------:|:--------:|:-------:|
| 💰 Financeiro | Manual | ✅ | ✅ | ✅ |
| 🔍 Web Search | Básico | Interm. | ✅ | Avançado |
| 📊 Scrape/Extract | Básico | Interm. | Interm. | Avançado |
| 📅 Agendamento | ❌ | ✅ | ✅ | ✅ |
| 🎯 SDR | ❌ | ❌ | ✅ | ✅ |
| 📢 Marketing | ❌ | ❌ | ✅ | ✅ |
| 💻 Dev | ❌ | ❌ | ✅ | ✅ |
| 🎬 Vídeo | ❌ | ❌ | ✅ | ✅+ |
| ✅ Confirmação | ❌ | ❌ | ❌ | ✅ |
| 📝 Resumo Grupos | ❌ | ❌ | ❌ | ✅ |
| 🔄 Remarketing | ❌ | ❌ | ❌ | ✅ |
| 📞 Follow-up | ❌ | ❌ | ❌ | ✅ |

**Legenda:**
- ❌ = Não disponível
- Manual = Apenas via app (sem WhatsApp)
- Básico/Interm./Avançado = Nível de recursos
- ✅ = Disponível
- ✅+ = Disponível com cota maior

---

© 2025 Meu Agente. Todos os direitos reservados.
