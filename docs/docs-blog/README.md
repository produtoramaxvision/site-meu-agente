# 📚 Documentação do Blog - Meu Agente

Bem-vindo à documentação do blog! Esta pasta contém todos os recursos necessários para criar, otimizar e automatizar a criação de artigos.

---

## 📁 Arquivos Disponíveis

| Arquivo | Descrição |
|---------|-----------|
| [ANALISE_ARTIGOS.md](./ANALISE_ARTIGOS.md) | Análise completa da estrutura e formato dos artigos existentes |
| [MELHORES_PRATICAS_SEO.md](./MELHORES_PRATICAS_SEO.md) | Guia de SEO baseado em Google, Semrush e Yoast |
| [TEMPLATE_ARTIGO.md](./TEMPLATE_ARTIGO.md) | Template pronto para criar novos artigos manualmente |
| [PROMPT_AGENTE_IA_ARTIGOS.md](./PROMPT_AGENTE_IA_ARTIGOS.md) | Prompts para automação com n8n e outras plataformas |

---

## 🚀 Quick Start

### Criar Artigo Manualmente

1. Copie o template de `TEMPLATE_ARTIGO.md`
2. Preencha o frontmatter YAML
3. Escreva o conteúdo seguindo a estrutura
4. Salve em `content/blog/nome-do-slug.md`
5. Atualize `src/lib/blog.ts` com os metadados

### Criar Artigo com IA (n8n)

1. Configure o workflow n8n conforme `PROMPT_AGENTE_IA_ARTIGOS.md`
2. Defina tema, keywords e categoria
3. Execute o workflow
4. Revise e publique

---

## 📋 Checklist de Publicação

```
SEO
□ Title tag otimizado (50-70 caracteres)
□ Meta description (150-160 caracteres)
□ URL slug limpo
□ Keyword nas primeiras 100 palavras

Conteúdo
□ Mínimo 1.500 palavras
□ 5-8 seções H2
□ Sumário com links
□ Exemplos práticos
□ CTAs claros

Links
□ 3-5 links internos
□ 1-3 links externos
□ Posts relacionados

Mídia
□ Imagem de capa
□ Alt text em imagens
□ Pelo menos 3 elementos visuais
```

---

## 📊 Categorias do Blog

| Categoria | Cor | Temas |
|-----------|-----|-------|
| Automação | 🔵 | Processos automatizados, produtividade |
| Vendas | 🟢 | SDR, leads, conversão, CRM |
| Marketing | 🟣 | Google Ads, campanhas, analytics |
| Finanças | 🟡 | Gestão financeira, controle, relatórios |
| WhatsApp | 🟢 | API, Business, integrações |
| IA | 🔵 | Inteligência Artificial, agentes |
| Casos de Uso | 🟠 | Cases, exemplos, ROI |

---

## 🔗 Links Úteis

- **Blog:** `/blog`
- **App:** https://app.meuagente.api.br
- **Contato:** `/contato`
- **Planos:** `/planos`

---

*Última atualização: Dezembro 2025*
